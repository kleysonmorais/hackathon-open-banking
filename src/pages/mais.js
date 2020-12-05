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

export default function PerfilPage() {
  return (
    <>
      <DynamicAppTabNavigationWithNoSSR title="Mais opções" />

      <img src="../imgs/Group-109.png" alt="foto" />
      <img src="../imgs/Group-110.png" alt="foto" />

      <DynamicLabelBottomNavigationWithNoSSR selected="perfil" />
    </>
  );
}
