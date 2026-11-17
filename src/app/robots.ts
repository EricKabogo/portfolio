import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://portfolio-sigma-eight-24.vercel.app/sitemap.xml',
  };
}
