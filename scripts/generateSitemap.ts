import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { generateSitemapXml } from '../src/utils/sitemapGenerator';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function writeSitemapFiles(): void {
  const rootDir = path.resolve(__dirname, '..');
  const publicDir = path.join(rootDir, 'public');
  const distDir = path.join(rootDir, 'dist');
  const xml = generateSitemapXml();

  // Write to public/sitemap.xml
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  const publicSitemapPath = path.join(publicDir, 'sitemap.xml');
  fs.writeFileSync(publicSitemapPath, xml, 'utf8');
  console.log(`[Sitemap] Generated public/sitemap.xml (${xml.length} bytes)`);

  // If dist/ exists, also write to dist/sitemap.xml
  if (fs.existsSync(distDir)) {
    const distSitemapPath = path.join(distDir, 'sitemap.xml');
    fs.writeFileSync(distSitemapPath, xml, 'utf8');
    console.log(`[Sitemap] Synced dist/sitemap.xml`);
  }
}

// Execute when run directly via CLI
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  writeSitemapFiles();
}
