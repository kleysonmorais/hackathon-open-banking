import React from 'react';
import dynamic from 'next/dynamic';
import { ScrollingContainers } from 'app/UI/components/scrolling-containers';
import { CategoryCardItem } from 'app/UI/components/category-card-item';
import { BannerCardItem } from 'app/UI/components/banner-card-item';
import { FormCardItem } from 'app/UI/components/form-card-item';
import { GridTemplate } from 'app/UI/components/grid-template';

import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';

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
      <div className="h-screen" style={{ backgroundColor: '#499FA4' }}>
        <div className="text-center">
          <h2 className="leading-tight font-sans text-base px-24 text-center pt-4 text-white">
            Kleyson, seu <br />
            patrimônio hoje: <br />
          </h2>
          <p className="font-semibold text-yellow-400 p-2 text-lg">
            R$15.450,00
          </p>
        </div>

        <div className="mb-4 mt-2">
          <div className="rounded bg-white m-2 px-4 py-6">
            <p className="text-xs text-green-800">Conta Bancária</p>
            <div className="flex justify-start pt-2">
              <img
                width={50}
                style={{ borderRadius: 5 }}
                src="imgs/nubank-logo.png"
                alt="nubank"
              />
              <div className="px-2">
                <p className="font-sm text-base font-bold">Nubank</p>
                <span className="font-sans text-base font-semibold text-green-800">
                  R$ 1.254,32
                </span>
              </div>
            </div>
          </div>
          <div className="rounded bg-white m-2 px-4 py-6">
            <p className="text-xs text-green-800">Conta Bancária</p>
            <div className="flex justify-start pt-2">
              <img
                width={50}
                style={{ borderRadius: 5 }}
                src="imgs/itau.jpg"
                alt="nubank"
              />
              <div className="px-2">
                <p className="font-sm text-base font-bold">Itaú</p>
                <span className="font-sans text-base font-semibold text-green-800">
                  R$ 2.004,11
                </span>
              </div>
            </div>
          </div>

          <div className="rounded bg-white m-2 px-4 py-6">
            <p className="text-xs text-green-800">Conta Bancária</p>
            <div className="flex justify-start pt-2">
              <img
                width={50}
                style={{ borderRadius: 5 }}
                src="imgs/caixa-logo.png"
                alt="nubank"
              />
              <div className="px-2">
                <p className="font-sm text-base font-bold">Caixa</p>
                <span className="font-sans text-base font-semibold text-green-800">
                  R$ 101,01
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div className="rounded bg-white m-2 p-4">
              <div className="flex justify-start pt-2">
                <ArrowUpwardOutlinedIcon />
                <div className="px-2">
                  <p className="text-xs text-green-800">Redimentos</p>
                  <p className="font-sans text-base font-semibold text-green-800">
                    5,3%
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded bg-white m-2 p-4">
              <div className="flex justify-start pt-2">
                <AccountBalanceWalletOutlinedIcon />
                <div className="px-2">
                  <p className="text-xs text-green-800">Saldo Investido</p>
                  <p className="font-sans text-base font-semibold text-green-800">
                    R$ 13.350,00
                  </p>
                </div>
              </div>
            </div>
          </div>

          <ScrollingContainers>
            <CategoryCardItem content="Minhas despesas" />
            <CategoryCardItem content="Objetivos" />
            <CategoryCardItem content="Investimentos" />
            <CategoryCardItem content="Perfil de investidor" />
            <CategoryCardItem content="Ajustar Planos" />
            <CategoryCardItem content="Me ajuda" />
          </ScrollingContainers>
        </div>
      </div>
    </>
  );
}
