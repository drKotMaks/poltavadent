import { setting } from '@/lib/setting';

export default function robots() {
  const base = setting.url.replace(/\/$/, '');
  return {
    rules: [{
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    }],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}


