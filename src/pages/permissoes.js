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
        <button
          type="button"
          className="place-self-center my-5 bg-white font-bold py-2 px-4 rounded-full w-3/4"
          style={{ backgroundColor: '#B02334', color: 'white' }}
          onClick={() => handleNovoBanco()}
        >
          Novo Banco
        </button>

        {integrated.map((element) => (
          <img src="imgs/perm-1.svg" className="py-4 px-8 w-full" alt="foto" />
        ))}

        {/* <img src="imgs/perm-3.svg" className="py-4 px-24 w-full" alt="foto" />
        <img src="imgs/perm-2.svg" className="py-4 px-8 w-full" alt="foto" /> */}
      </div>
    </>
  );
}
