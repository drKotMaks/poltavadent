import Services from "./_components/Services/page";
import CallToActionNew from "./_components/CallToActionNew/CallToActionNew";
import DoctorsListNew from "./_components/DoctorsListNew/DoctorsListNew";
import Reviews from "./_components/Reviews/Reviews";
import  {setting} from "@/lib/setting";
import Script from "next/script";



export const metadata = {
  title: {
    default: setting.fullTitle,
    template: "%s | Стоматологія на Позняках",
  },
  description: setting.description,
  alternates: {
    canonical: setting.url_cannonical,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
  keywords: [
  "Стоматологія Полтава Дент",
  "Стоматкабінет на Позняках",
  "Полтава Дент стоматологія",
  "Лікування зубів Позняки",
  "Стоматологічна клініка ПолтаваДент",
  "Ортодонтія ПолтаваДент",
  "Профілактика зубів ПолтаваДент",
  "Брекети на Позняках",
  "Вініри на Позняках",
  "Імплантація зубів Позняки",
  "Стоматологія на Позняках",
  "Стоматолог Київ Позняки",
  "Дитячий стоматолог Позняки",
  "Терапевтична стоматологія Позняки"
],
  authors: [{ name: setting.title, url: setting.url }],
  metadataBase: new URL(setting.url),
  openGraph: {
    title: setting.fullTitle,
    description: setting.description,
    url: setting.url,
    siteName: setting.title,
    images: [
      {
        url: "/main-foto.jpg",
        width: 1200,
        height: 630,
        alt: setting.fullTitle,
        type: "image/jpeg",
      },
    ],
    locale: "uk_UA",
    type: "website",
  },
};


export default function Home() {
 
  return (
    <main className="flex flex-col items-center justify-between p-2 pt-20 gap-10">
      <CallToActionNew/>
      <DoctorsListNew/>
      <Services/>
      <Reviews/>
      <Script id="ld-json-home" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            name: setting.fullTitle,
            url: setting.url,
            telephone: setting.phone_primery,
            email: setting.email,
            image: `${setting.url}main-foto.jpg`,
            address: {
              "@type": "PostalAddress",
              streetAddress: setting.adress,
              addressLocality: "Київ",
              addressCountry: "UA",
            },
            sameAs: [
              setting.socialMedia.facebook,
              setting.socialMedia.instagram,
              setting.socialMedia.youtube,
              setting.socialMedia.tiktok,
            ],
            priceRange: "$$",
          }),
        }}
      />
    </main>
  );
}
