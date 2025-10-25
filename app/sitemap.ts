import { MetadataRoute } from 'next';
import { ROUTES } from '@/lib/routes-config';
import { siteConfig } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/docs`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blocks`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ];

  // Component pages from routes
  const componentPages: MetadataRoute.Sitemap = [];
  
  ROUTES.forEach((route) => {
    if (route.groupKey === 'components' && route.children) {
      route.children.forEach((child) => {
        componentPages.push({
          url: `${baseUrl}${child.url}`,
          lastModified: new Date(),
          changeFrequency: 'weekly',
          priority: 0.8,
        });
      });
    } else if (route.children) {
      route.children.forEach((child) => {
        componentPages.push({
          url: `${baseUrl}${child.url}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.6,
        });
      });
    }
  });

  return [...staticPages, ...componentPages];
}

