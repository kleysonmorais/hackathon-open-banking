import React from 'react';
import dynamic from 'next/dynamic';

const DynamicAppTabNavigationWithNoSSR = dynamic(
  () => import('app/UI/components/app-tab'),
  { ssr: false }
);

export default function AjudaPage() {
  return (
    <>
      <DynamicAppTabNavigationWithNoSSR title="Ajuda" return="/principal" />

      <img src="imgs/ajuda.svg" className="py-4 px-8 w-full" alt="foto" />
    </>
  );
}
