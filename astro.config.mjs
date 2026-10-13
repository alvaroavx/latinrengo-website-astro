import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV || 'production', process.cwd(), 'PUBLIC_');
const site = process.env.PUBLIC_SITE_URL || env.PUBLIC_SITE_URL || 'http://localhost:4321';
const excluded = ['/latin-rengo', '/latin-rengo-v3', '/latin-rengo-social/archivo/social-original'];

export default defineConfig({
  site,
  output: 'static',
  integrations: [sitemap({ filter: (page) => !excluded.includes(new URL(page).pathname.replace(/\/$/, '')) })],
});
