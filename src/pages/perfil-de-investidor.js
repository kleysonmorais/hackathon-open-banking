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

      <img src="imgs/perfil-1.svg" className="py-4 px-8 w-full" alt="foto" />
    </>
  );
}
