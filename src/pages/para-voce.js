import React from 'react';
import dynamic from 'next/dynamic';
import { GridTemplate } from 'app/UI/components/grid-template';
import { CategoryCardItem } from 'app/UI/components/category-card-item';

const DynamicAppTabNavigationWithNoSSR = dynamic(
  () => import('app/UI/components/app-tab'),
  { ssr: false }
);

const DynamicLabelBottomNavigationWithNoSSR = dynamic(
  () => import('app/UI/components/label-bottom-navigation'),
  { ssr: false }
);

export default function ParaVocePage() {
  return (
    <>
      <DynamicAppTabNavigationWithNoSSR title="Para você" return="/principal" />

      <img src="imgs/invest-2.svg" className="py-4 px-8 w-full" alt="foto" />
    </>
  );
}
