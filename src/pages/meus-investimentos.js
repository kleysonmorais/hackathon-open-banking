import React from 'react';
import dynamic from 'next/dynamic';

const DynamicAppTabNavigationWithNoSSR = dynamic(
  () => import('app/UI/components/app-tab'),
  { ssr: false }
);

export default function MeusInvestimentosPage() {
  return (
    <>
      <DynamicAppTabNavigationWithNoSSR
        title="Meus investimentos"
        return="/principal"
      />

      <img src="imgs/invest-1.svg" className="py-4 px-8 w-full" alt="foto" />
    </>
  );
}
