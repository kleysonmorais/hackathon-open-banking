<<<<<<< HEAD
import React from 'react';
=======
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
>>>>>>> implementar-api
import { ScrollingContainers } from 'app/UI/components/scrolling-containers';
import { CategoryCardItem } from 'app/UI/components/category-card-item';
import Typography from '@material-ui/core/Typography';

import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';

export default function FormulariosPage() {
  return (
    <>
      <div className="h-screen" style={{ backgroundColor: '#ff574eff' }}>
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
                <Typography variant="h5" component="h2">
                  Nubank
                </Typography>
                {/* <p className="font-sm text-base font-bold">Nubank</p> */}
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
                {/* <p className="font-sm text-base font-bold">Itaú</p> */}
                <Typography variant="h5" component="h2">
                  Itaú
                </Typography>
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
                <Typography variant="h5" component="h2">
                  Caixa
                </Typography>
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
            <CategoryCardItem
              content="Gestão de Consentimento"
              page="gestao-de-consentimento"
            />
            <CategoryCardItem
              content="Minhas despesas"
              page="minhas-despesas"
            />
            <CategoryCardItem content="Objetivos" page="objetivos" />
            <CategoryCardItem content="Investimentos" page="investimentos" />
            <CategoryCardItem
              content="Perfil de investidor"
              page="perfil-de-investidor"
            />
            <CategoryCardItem content="Ajustar Planos" page="ajustar-planos" />
            <CategoryCardItem content="Me ajuda" page="me-ajuda" />
          </ScrollingContainers>
        </div>
      </div>
    </>
  );
}
