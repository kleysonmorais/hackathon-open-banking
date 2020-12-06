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

      {/* <img src="../imgs/foto1.png" alt="foto" />
      <img src="../imgs/foto2-2.png" alt="foto" />
      <DynamicLabelBottomNavigationWithNoSSR selected="busca" /> */}
    </>
  );
}
