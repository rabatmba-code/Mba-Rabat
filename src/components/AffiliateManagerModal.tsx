import React, { useState } from 'react';
import { 
  X, 
  SlidersHorizontal, 
  Copy, 
  Check, 
  ExternalLink, 
  ShieldCheck, 
  Zap, 
  RefreshCw, 
  Info,
  Layers,
  Sparkles,
  Link as LinkIcon
} from 'lucide-react';
import { AffiliateSettings, ClickBankOffer } from '../types';
import { buildHoplink } from '../utils/hoplink';

interface AffiliateManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: AffiliateSettings;
  onUpdateSettings: (newSettings: AffiliateSettings) => void;
  offers: ClickBankOffer[];
}

export const AffiliateManagerModal: React.FC<AffiliateManagerModalProps> = ({
  isOpen,
  onClose,
  settings,
  onUpdateSettings,
  offers,
}) => {
  const [copied, setCopied] = useState(false);
  const [localSettings, setLocalSettings] = useState<AffiliateSettings>(settings);
  const [activeTab, setActiveTab] = useState<'hoplink' | 'offers' | 'strategy'>('hoplink');

  if (!isOpen) return null;

  const currentSelectedOffer = offers.find(o => o.id === localSettings.activePromotedOfferId) || offers[0];
  const generatedHoplink = buildHoplink(currentSelectedOffer, localSettings);

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedHoplink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSave = () => {
    onUpdateSettings(localSettings);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
      <div 
        className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200"
        id="clickbank-manager-modal"
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-slate-900 to-emerald-950 text-white p-5 flex items-center justify-between border-b border-emerald-900/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600/30 border border-emerald-500/40 flex items-center justify-center text-emerald-300">
              <SlidersHorizontal className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                ClickBank Engine & Offer Rotater
                <span className="text-[11px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/30">
                  Live Router
                </span>
              </h2>
              <p className="text-xs text-slate-300 mt-0.5">
                Manage your affiliate nickname, tracking tags, and dynamically switch promoted offers across the site.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            id="close-affiliate-modal-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-4 pt-2 gap-2 text-xs font-semibold text-slate-600">
          <button
            onClick={() => setActiveTab('hoplink')}
            className={`pb-2.5 px-3 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'hoplink' 
                ? 'border-emerald-600 text-emerald-800 font-bold' 
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            HopLink & Tracking Tags
          </button>
          <button
            onClick={() => setActiveTab('offers')}
            className={`pb-2.5 px-3 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'offers' 
                ? 'border-emerald-600 text-emerald-800 font-bold' 
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Swap Active Offer ({offers.length})
          </button>
          <button
            onClick={() => setActiveTab('strategy')}
            className={`pb-2.5 px-3 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'strategy' 
                ? 'border-emerald-600 text-emerald-800 font-bold' 
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            💡 Darija / Strategy Guide
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          {activeTab === 'hoplink' && (
            <div className="space-y-5">
              <div className="bg-emerald-50/80 border border-emerald-200 rounded-xl p-4 text-emerald-950">
                <div className="flex items-start gap-2.5">
                  <Sparkles className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-emerald-900">Dynamic HopLink Injection is Active</h4>
                    <p className="text-xs text-emerald-800 mt-1 leading-relaxed">
                      All review buttons, advertorial buy buttons, quiz recommendations, and banner links automatically use your credentials configured below.
                    </p>
                  </div>
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    ClickBank Account Nickname
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={localSettings.clickBankNickname}
                      onChange={(e) => setLocalSettings({ ...localSettings, clickBankNickname: e.target.value })}
                      placeholder="e.g. yournickname"
                      className="w-full font-mono text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-hidden"
                      id="input-cb-nickname"
                    />
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Your ClickBank affiliate username receiving commissions.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Tracking ID (TID)
                  </label>
                  <input
                    type="text"
                    value={localSettings.trackingId}
                    onChange={(e) => setLocalSettings({ ...localSettings, trackingId: e.target.value })}
                    placeholder="e.g. fb_campaign_01"
                    className="w-full font-mono text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-hidden"
                    id="input-cb-tid"
                  />
                  <p className="text-[11px] text-slate-500 mt-1">
                    Track traffic sources in ClickBank analytics (e.g. <code className="text-slate-700 font-mono">vpd_review</code>).
                  </p>
                </div>
              </div>

              {/* Active Promoted Offer Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Currently Highlighted Offer (Site-Wide Banner & Bridge)
                </label>
                <select
                  value={localSettings.activePromotedOfferId}
                  onChange={(e) => setLocalSettings({ ...localSettings, activePromotedOfferId: e.target.value })}
                  className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-emerald-500 outline-hidden font-medium"
                  id="select-active-offer"
                >
                  {offers.map((offer) => (
                    <option key={offer.id} value={offer.id}>
                      {offer.name} — {offer.categoryName} ({offer.guaranteeDays}d Guarantee)
                    </option>
                  ))}
                </select>
              </div>

              {/* Real-Time Generated Hoplink Display */}
              <div className="bg-slate-900 rounded-xl p-4 text-white">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                    <LinkIcon className="w-3.5 h-3.5 text-emerald-400" />
                    Live Generated ClickBank HopLink:
                  </span>
                  <span className="text-emerald-400 font-mono text-[11px]">Format: [affiliate].[vendor].hop.clickbank.net</span>
                </div>
                <div className="bg-slate-950 p-3 rounded-lg font-mono text-xs text-emerald-300 break-all border border-slate-800 select-all">
                  {generatedHoplink}
                </div>
                <div className="flex items-center justify-end gap-2.5 mt-3">
                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1.5 text-xs bg-slate-800 hover:bg-slate-700 text-white px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer"
                    id="copy-hoplink-btn"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-300" />
                        <span>Copy HopLink</span>
                      </>
                    )}
                  </button>
                  <a
                    href={generatedHoplink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1.5 rounded-lg font-medium transition-colors"
                    id="test-hoplink-btn"
                  >
                    <span>Test HopLink in New Tab</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Toggles */}
              <div className="border border-slate-200 rounded-xl p-4 space-y-3 bg-slate-50/50">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-slate-800 text-xs">Sticky Bottom Deal Bar</p>
                    <p className="text-[11px] text-slate-500">Shows a high-converting bottom banner prompting reader to check the active offer.</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={localSettings.enableStickyBanner}
                    onChange={(e) => setLocalSettings({ ...localSettings, enableStickyBanner: e.target.checked })}
                    className="w-4 h-4 text-emerald-600 rounded cursor-pointer"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'offers' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-600">
                Click <strong>"Set as Active"</strong> to rotate which ClickBank offer takes center stage on the homepage hero, sticky bar, and quiz funnel:
              </p>
              <div className="space-y-3">
                {offers.map((offer) => {
                  const isCurrent = localSettings.activePromotedOfferId === offer.id;
                  return (
                    <div 
                      key={offer.id}
                      className={`p-4 rounded-xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                        isCurrent 
                          ? 'border-emerald-500 bg-emerald-50/50 ring-1 ring-emerald-500' 
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <img 
                          src={offer.heroImage} 
                          alt={offer.name} 
                          className="w-14 h-14 rounded-lg object-cover border border-slate-200 shrink-0" 
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold text-slate-900 text-sm">{offer.name}</h4>
                            {isCurrent && (
                              <span className="text-[10px] font-bold bg-emerald-600 text-white px-2 py-0.5 rounded-full">
                                Active Primary
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-500">{offer.categoryName} • Vendor: <span className="font-mono text-slate-700">{offer.vendorId}</span></p>
                          <p className="text-xs font-semibold text-emerald-700 mt-0.5">
                            {offer.guaranteeDays}-Day Money Back Guarantee • Commission up to 75%
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setLocalSettings({ ...localSettings, activePromotedOfferId: offer.id })}
                          disabled={isCurrent}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                            isCurrent
                              ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                              : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                          }`}
                        >
                          {isCurrent ? 'Currently Active' : 'Set as Primary Offer'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'strategy' && (
            <div className="space-y-4 text-slate-700 leading-relaxed text-xs">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-blue-950">
                <h4 className="font-bold text-sm text-blue-900 mb-1 flex items-center gap-2">
                  <span>🇲🇦</span> الفكرة الذكية وراء اسم VitalPath Daily
                </h4>
                <p className="mt-1 text-blue-900/90 text-xs">
                  «الفكرة: اسم عام وprofessional، وما مربوطش بمنتج واحد، باش نقدروا نبدلو ClickBank offers من بعد.»
                </p>
              </div>

              <div className="space-y-2.5">
                <h5 className="font-bold text-slate-900 text-sm">علاش هاد الاستراتيجية كتربح فـ ClickBank؟</h5>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                  <li>
                    <strong className="text-slate-800">حماية حسابات الإعلانات:</strong> فيسبوك وGoogle Ads كيكرهو المواقع اللي مسمية بسمية برودوي واحد (بحال puravivereview.com) وكيديرو ليها Ban سريع. بينما <strong>VitalPath Daily</strong> كيبان مجلة طبية وصحية معتمدة (Health Authority Blog) كتقبل فالإعلانات بسهولة.
                  </li>
                  <li>
                    <strong className="text-slate-800">تبديل العروض (Offer Rotation):</strong> إلا هبط الـ Gravity ديال شي برودوي فـ ClickBank أو حبسو الـ Affiliate ديالو، ما غاتخسر والو! كتبدل غير الرابط وتخلي نفس المقال ونفس الترافيك.
                  </li>
                  <li>
                    <strong className="text-slate-800">بناء قائمة إيميل (Email List):</strong> القراء كيتسجلو فـ <em>VitalPath Daily Newsletter</em> وكتصيفط ليهم كل أسبوع عرض مختلف (مرة برودوي السكر، مرة برودوي التخسيس، مرة المفاصل).
                  </li>
                  <li>
                    <strong className="text-slate-800">High Ticket & Upsells:</strong> القارئ كيثق فالموقع حيت فيه أطباء مراجعين ومراجع علمية حقيقية (PubMed & Cell Metabolism).
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-4 flex items-center justify-between">
          <button
            onClick={onClose}
            className="text-xs font-semibold text-slate-600 hover:text-slate-800 px-3 py-2 cursor-pointer"
          >
            Cancel
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={handleSave}
              className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs px-5 py-2.5 rounded-lg shadow-xs transition-colors cursor-pointer"
              id="save-affiliate-settings-btn"
            >
              Apply Settings to Website
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
