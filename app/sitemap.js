import { getDoctorsQuery, getServicesData } from '@/app/_services/graphQL_custom/QueryGraphQL';
import { fetcher } from '@/app/_services/fetcher';
import { setting } from '@/lib/setting';

export default async function sitemap() {
  const baseUrl = setting.url.replace(/\/$/, '');

  let services = [];
  let doctors = [];
  try {
    const servicesData = await fetcher(getServicesData);
    services = servicesData?.servicEss || [];
  } catch {}
  try {
    const doctorsData = await fetcher(getDoctorsQuery);
    doctors = doctorsData?.doctoRs || [];
  } catch {}

  const staticRoutes = [
    '',
    '/prices',
    '/about',
  ];

  const urls = [
    ...staticRoutes.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.7,
    })),
    ...services.map((s) => ({
      url: `${baseUrl}/categories/${s.slug}`,
      lastModified: s.updatedAt || new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
    ...doctors.map((d) => ({
      url: `${baseUrl}/doctors/${d.slugDoctor}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.6,
    })),
  ];

  return urls;
}


