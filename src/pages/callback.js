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

export default function DuvidasPage() {
  return (
    <>
      <DynamicAppTabNavigationWithNoSSR title="callback" />

      <div className="container mx-auto my-4">Tela de Callback</div>

      <DynamicLabelBottomNavigationWithNoSSR selected="callback" />
    </>
  );
}
