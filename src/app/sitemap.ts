import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://portfolio-sigma-eight-24.vercel.app',
      lastModified: new Date(),
    },
  ];
}
