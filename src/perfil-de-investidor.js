import React from 'react';
import dynamic from 'next/dynamic';

const DynamicAppTabNavigationWithNoSSR = dynamic(
  () => import('app/UI/components/app-tab'),
  { ssr: false }
);

export default function MinhasDepesasPage() {
  return (
    <>
      <DynamicAppTabNavigationWithNoSSR
        title="Perfil do Investidor"
        return="/principal"
      />

      {/* <img src="../imgs/foto1.png" alt="foto" />
      <img src="../imgs/foto2-2.png" alt="foto" />
      <DynamicLabelBottomNavigationWithNoSSR selected="busca" /> */}
    </>
  );
}
