import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header/page";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/toaster";
import Footer from "./_components/Footer/Footer";
import Warnimg from "./_components/Warning/Warning";
import Script from 'next/script';



const inter = JetBrains_Mono({ subsets: ["cyrillic"] });




export default function RootLayout({ children }) {
  return (
   
    <html lang="en">
  {/* Google Tag Manager - head script (placed as close to <head> start as possible) */}
  <Script id="gtm-script" strategy="beforeInteractive">
    {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N22B68');`}
  </Script>
      <SessionProvider>
          <body>
    {/* Google Tag Manager (noscript) - immediately after opening <body> */}
    <noscript dangerouslySetInnerHTML={{__html: '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N22B68" height="0" width="0" style="display:none;visibility:hidden"></iframe>'}} />
            <Header/>
            {children}
            <Warnimg/>
            <Footer/>
            <Toaster/>
          </body>
      </SessionProvider>
    </html>
    
  );
}
