import React from 'react';
import dynamic from 'next/dynamic';

const DynamicAppTabNavigationWithNoSSR = dynamic(
  () => import('app/UI/components/app-tab'),
  { ssr: false }
);

const DynamicLabelBottomNavigationWithNoSSR = dynamic(
  () => import('app/UI/components/label-bottom-navigation'),
  { ssr: false }
);

export default function DuvidasPage() {
  return (
    <>
      <DynamicAppTabNavigationWithNoSSR
        title="Trecho 8 - Fotos"
        return="/ver-formulario/78569"
      />

      <img src="../imgs/foto1.png" alt="foto" />
      <img src="../imgs/foto2-2.png" alt="foto" />

      <DynamicLabelBottomNavigationWithNoSSR selected="busca" />
    </>
  );
}
