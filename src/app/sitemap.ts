import { MetadataRoute } from 'next';
import { SCENARIOS } from '@/data/scenarios';
import { CATEGORIES } from '@/data/categories';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://whatifinsurance.cristianvaduva.com';
  const currentDate = new Date().toISOString();

  // Static core routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/scenarii`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/quiz`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/verificare-polita`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/studio`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/despre`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/declinare-responsabilitate`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/confidentialitate`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/termeni`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  // Dynamic scenario routes (all 121 scenarios)
  const scenarioRoutes: MetadataRoute.Sitemap = SCENARIOS.map((scenario) => ({
    url: `${baseUrl}/scenarii/${scenario.categoryId}/${scenario.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: scenario.featured ? 0.9 : 0.8,
  }));

  return [...staticRoutes, ...scenarioRoutes];
}
