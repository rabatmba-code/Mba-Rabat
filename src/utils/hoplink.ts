import { AffiliateSettings, ClickBankOffer } from '../types';

export function buildHoplink(
  offer: ClickBankOffer,
  settings: AffiliateSettings
): string {
  if (settings.customHoplinkOverride && settings.customHoplinkOverride.trim().length > 0) {
    return settings.customHoplinkOverride;
  }

  // If the offer has a direct pre-configured ClickBank hoplink
  if (offer.hoplinkFallback && offer.hoplinkFallback.includes('.hop.clickbank.net')) {
    const tid = settings.trackingId?.trim() ? `?tid=${encodeURIComponent(settings.trackingId.trim())}` : '';
    if (!tid) return offer.hoplinkFallback;
    const separator = offer.hoplinkFallback.includes('?') ? '&' : '?';
    return `${offer.hoplinkFallback}${separator}tid=${encodeURIComponent(settings.trackingId.trim())}`;
  }

  const nickname = settings.clickBankNickname?.trim() || 'vitalpath';
  const tid = settings.trackingId?.trim() ? `?tid=${encodeURIComponent(settings.trackingId.trim())}` : '';
  
  // Standard ClickBank Hoplink format:
  // https://[affiliate].[vendor].hop.clickbank.net/?tid=[tid]
  return `https://${nickname}.${offer.vendorId}.hop.clickbank.net/${tid}`;
}

export const defaultAffiliateSettings: AffiliateSettings = {
  clickBankNickname: 'vitalpath',
  trackingId: 'vpd_web_01',
  activePromotedOfferId: 'gluco6',
  customHoplinkOverride: '',
  enableStickyBanner: true,
  enableExitIntentDiscount: true,
};
