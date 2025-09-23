"use client"

import PricesBlock from '@/app/_components/PricesBlock/PricesBlock';
import TitleH1 from '@/app/_components/Typography/TitleH1';
import getPrices from '@/app/hooks/getPrices';
import React from 'react';
import Script from 'next/script';
import { setting } from '@/lib/setting';

const Prices = () => {
  const { prices, isError, isLoading}  =  getPrices()

  return (
    <div>
        <TitleH1 text="Наші прозорі ціни:"/>
      <PricesBlock prices={prices} />
      <Script id="ld-json-prices" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "OfferCatalog",
            name: "Прайс Полтава Дент",
            url: `${setting.url}prices`,
            itemListElement: (prices || []).map(p => ({
              "@type": "Offer",
              name: p.titlE,
              price: p.costNew ?? p.costSpetial ?? p.oldCost ?? null,
              priceCurrency: "UAH",
              availability: "https://schema.org/InStock"
            }))
          })
        }}
      />
    </div>
  );
};

export default Prices;