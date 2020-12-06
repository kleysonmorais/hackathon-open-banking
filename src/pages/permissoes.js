import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

import { apiAggregator } from 'app/services/api';
import { tppId, aspspId } from 'app/utils/keys';

const DynamicAppTabNavigationWithNoSSR = dynamic(
  () => import('app/UI/components/app-tab'),
  { ssr: false }
);

export default function PermissoesPage() {
  const [providers, setProviders] = useState([]);
  const [integrated, setIntegrated] = useState([]);

  useEffect(() => {
    const clientId = localStorage.getItem('clientId');
    apiAggregator
      .request({ url: '/available', params: { 'x-app-id': tppId } })
      .then((response) => setProviders(response.data));

    apiAggregator
      .request({
        url: '/integrated',
        params: { 'x-app-id': tppId, 'x-user-id': clientId },
      })
      .then((response) => {
        console.log('response integrated');
        console.log(response.data);
        setIntegrated(response.data.providers);
      });
  }, []);

  const handleNovoBanco = () => {
    const clientId = localStorage.getItem('clientId');
    console.log('handleNovoBanco');
    apiAggregator
      .request({
        url: `/integrated/${aspspId}`,
        method: 'POST',
        params: { 'x-app-id': tppId, 'x-user-id': clientId },
      })
      .then((response) => {
        console.log('response handleNovoBanco');
        console.log(response.data);
        window.open(response.data.authUri, '_self');
      });
  };

  return (
    <>
      <DynamicAppTabNavigationWithNoSSR
        title="Permissões"
        return="/principal"
      />
      <div className="flex flex-col mb-4 mt-2">
        {/* <button
          type="button"
          className="place-self-center my-5 bg-white font-bold py-2 px-4 rounded w-3/4"
          style={{ color: '#B02334' }}
          onClick={() => handleNovoBanco()}
        >
          Novo Banco
        </button> */}

        {/* {integrated.map((element) => (
          <div key={element.id} className="rounded bg-white m-2 px-4 py-6">
            <p className="text-xs text-green-800">Conta Bancária</p>
            <div className="flex justify-start pt-2">
              <img
                width={100}
                style={{ borderRadius: 5 }}
                src={element.logo}
                alt="nubank"
              />
              <div className="px-4">
                <p className="font-sm text-base font-bold">{element.name}</p>
                <span className="font-sans text-base font-semibold text-green-800">
                  R$ 1.254,32
                </span>
              </div>
            </div>
          </div>
        ))} */}

        <img src="imgs/perm-3.svg" className="py-4 px-24 w-full" alt="foto" />
        <img src="imgs/perm-1.svg" className="py-4 px-8 w-full" alt="foto" />
        <img src="imgs/perm-2.svg" className="py-4 px-8 w-full" alt="foto" />
      </div>
    </>
  );
}
