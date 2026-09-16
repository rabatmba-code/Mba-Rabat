import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig, Plugin} from 'vite';
import { generateSitemapXml } from './src/utils/sitemapGenerator';

function dynamicSitemapPlugin(): Plugin {
  return {
    name: 'dynamic-sitemap-plugin',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url || '';
        if (url === '/sitemap.xml' || url.startsWith('/sitemap.xml?')) {
          try {
            const xml = generateSitemapXml();
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/xml; charset=utf-8');
            res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
            res.end(xml);
            return;
          } catch (err) {
            console.error('[dynamicSitemapPlugin] Error serving live sitemap:', err);
          }
        }
        next();
      });
    },
    buildStart() {
      try {
        const xml = generateSitemapXml();
        const publicPath = path.resolve(__dirname, 'public', 'sitemap.xml');
        fs.writeFileSync(publicPath, xml, 'utf8');
      } catch (err) {
        console.error('[dynamicSitemapPlugin] Error writing public/sitemap.xml:', err);
      }
    },
    generateBundle() {
      try {
        const xml = generateSitemapXml();
        this.emitFile({
          type: 'asset',
          fileName: 'sitemap.xml',
          source: xml,
        });
      } catch (err) {
        console.error('[dynamicSitemapPlugin] Error emitting sitemap.xml asset:', err);
      }
    }
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), dynamicSitemapPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    optimizeDeps: {
      exclude: ['@google/genai', 'formdata-polyfill', 'node-fetch', 'gaxios', 'express'],
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
