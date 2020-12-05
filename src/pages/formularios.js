import React from 'react';
import dynamic from 'next/dynamic';
import { ScrollingContainers } from 'app/UI/components/scrolling-containers';
import { CategoryCardItem } from 'app/UI/components/category-card-item';
import { BannerCardItem } from 'app/UI/components/banner-card-item';
import { FormCardItem } from 'app/UI/components/form-card-item';
import { GridTemplate } from 'app/UI/components/grid-template';

const DynamicAppTabNavigationWithNoSSR = dynamic(
  () => import('app/UI/components/app-tab'),
  { ssr: false }
);

const DynamicLabelBottomNavigationWithNoSSR = dynamic(
  () => import('app/UI/components/label-bottom-navigation'),
  { ssr: false }
);

const formularios = [
  {
    trecho: 1,
    id: '45841',
    rota: 6,
    data: '21/10/2020',
    br: 'BR-157',
    km: 40,
    status: 'Completo',
    corStatus: '#268E24',
    color: '#fff',
  },
  {
    trecho: 6,
    id: '56234',
    rota: 6,
    data: '24/10/2020',
    br: 'BR-157',
    km: 20,
    status: 'Pendências',
    corStatus: '#E07B04',
    color: '#fff',
  },
  {
    trecho: 8,
    id: '78569',
    rota: 6,
    data: '25/10/2020',
    br: 'BR-157',
    km: 40,
    status: 'Em progresso',
    corStatus: '#CAB923',
    color: '#fff',
  },
  {
    trecho: 10,
    id: '85963',
    rota: 6,
    data: '25/10/2020',
    br: 'BR-157',
    km: 30,
    status: 'Para fazer',
    corStatus: '#fff',
    color: '#686868',
  },
];

export default function FormulariosPage() {
  return (
    <>
      <DynamicAppTabNavigationWithNoSSR title={'Formulários'} />

      <div className="container mx-auto">
        {/* <div className="my-4 md:my-8">
          <ScrollingContainers>
            <CategoryCardItem />
            <CategoryCardItem />
            <CategoryCardItem />
            <CategoryCardItem />
            <CategoryCardItem />
            <CategoryCardItem />
          </ScrollingContainers>
        </div>

        <div className="my-4 md:my-12">
          <ScrollingContainers>
            <BannerCardItem />
            <BannerCardItem />
            <BannerCardItem />
          </ScrollingContainers>
        </div>

        <h2 className="text-xl font-medium mx-2 mt-8">Parceiros</h2> */}
        <div className="my-4">
          <GridTemplate mobileCols="1" desktopCols="1">
            {formularios.map((element, index) => {
              return <FormCardItem key={`form ${index}`} item={element} />;
            })}
          </GridTemplate>
        </div>
      </div>

      <DynamicLabelBottomNavigationWithNoSSR selected="formularios" />
    </>
  );
}
