import Services from "./_components/Services/page";
import CallToActionNew from "./_components/CallToActionNew/CallToActionNew";
import DoctorsListNew from "./_components/DoctorsListNew/DoctorsListNew";
import Reviews from "./_components/Reviews/Reviews";
import  {setting} from "@/lib/setting";



export const metadata = {
  title: {
    default: setting.fullTitle,
    template: "%s | Стоматологія на Позняках",
  },
  description: setting.description,
  keywords: [
  "Стоматологія Полтава Дент",
  "Стоматкабінет на Позняках",
  "Полтава Дент стоматологія",
  "Лікування зубів Позняки",
  "Стоматологічна клініка Полтава Дент",
  "Ортодонтія Полтава Дент",
  "Профілактика зубів Полтава Дент",
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
    </main>
  );
}
