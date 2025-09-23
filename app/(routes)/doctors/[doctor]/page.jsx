import { getAllInfoDoctor } from '@/app/_services/graphQL_custom/QueryGraphQL';
import { fetcher } from '@/app/_services/fetcher';
import DoctorDescription from '@/app/_components/DoctorDescription/DoctorDescription';
import FullText from '@/app/_components/FullText/FullText';
import dynamic from 'next/dynamic';
import { setting } from '@/lib/setting';
import Script from 'next/script';

// Динамічний імпорт клієнтського компоненту
const PricesBlockClient = dynamic(() => import('@/app/_components/PricesBlock/PricesBlockClient'), { ssr: false });

export async function generateMetadata({ params }) {
  const query = getAllInfoDoctor(params.doctor);
  const data = await fetcher(query);
  const doctor = data?.doctoRs?.[0];

  return {
    title: `${doctor?.nameDoctor ?? ''} ${doctor?.lastName ?? ''} | ${setting.fullTitle ?? ''}`,
    description: doctor?.description ?? '',
    openGraph: {
      title: `${doctor?.nameDoctor ?? ''} ${doctor?.lastName ?? ''}`,
      description: doctor?.description ?? '',
      images: [doctor?.imageDoctor?.url ?? ''],
      url: `${setting.url}doctors/${params.doctor}`,
      type: 'website',
    },
    alternates: {
      canonical: `${setting.url}doctors/${params.doctor}`,
    },
  };
}

export default async function DoctorSinglePage({ params }) {
  const query = getAllInfoDoctor(params.doctor);
  const data = await fetcher(query);
  const doctor = data?.doctoRs?.[0];
  const text = doctor?.fullText?.html;
  const majors = doctor?.majorSpecialy || [];

  if (!doctor) return <div>Лікаря не знайдено</div>;

  return (
    <div>
      <DoctorDescription doctor={doctor} majors={majors} params={params.doctor} />
      <FullText FullText={text} />
      {/* PricesBlockClient завантажується окремо на клієнті */}
      <PricesBlockClient doctorId={params.doctor} />
      <Script id="ld-json-doctor" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: `${doctor?.nameDoctor ?? ''} ${doctor?.lastName ?? ''}`.trim(),
            jobTitle: (majors || []).join(', '),
            image: doctor?.imageDoctor?.url,
            url: `${setting.url}doctors/${params.doctor}`,
            worksFor: {
              "@type": "Dentist",
              name: setting.fullTitle,
              url: setting.url
            },
            description: doctor?.description ?? ''
          })
        }}
      />
    </div>
  );
}