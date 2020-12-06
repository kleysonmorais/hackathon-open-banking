import React, { useState } from 'react';
import dynamic from 'next/dynamic';

import Radio from '@material-ui/core/Radio';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';

const DynamicAppTabNavigationWithNoSSR = dynamic(
  () => import('app/UI/components/app-tab'),
  { ssr: false }
);

export default function DuvidasPage() {
  const [selectedValue, setSelectedValue] = useState('agora');
  const [valor, setValor] = useState(0);
  const [confirmation, setConfirmation] = useState(true);
  const [rendaMensal, setRendaMensal] = useState(0);
  const [checkedA, setCheckedA] = useState(true);

  const handleConfirm = () => {
    setConfirmation(true);
    setTimeout(() => {
      setConfirmation(false);
    }, 2000);
  };

  return (
    <>
      <DynamicAppTabNavigationWithNoSSR
        title="Poupe seu dinheiro"
        return="/principal"
      />

      {confirmation && (
        <div
          className="fixed p-3 w-full text-center"
          style={{ color: 'white', backgroundColor: 'green' }}
        >
          Plano confirmado com sucesso
        </div>
      )}

      <div className="m-4">
        <p
          className="w-full text-center font-bold"
          style={{ fontSize: '18px' }}
        >
          Planos que encontramos para seu perfil
        </p>

        <Card style={{ marginBottom: '25px', marginTop: '25px' }}>
          <div className="p-3 flex items-center place-content-between">
            <div className="flex">Investir agora</div>
            <div>
              <Radio
                checked={selectedValue === 'agora'}
                onChange={() => setSelectedValue('agora')}
                value="a"
                name="radio-button-demo"
              />
            </div>
          </div>

          <div className="p-3 flex items-center place-content-between">
            <div className="flex">Assinatura mensal</div>
            <div>
              <Radio
                checked={selectedValue === 'mensal'}
                onChange={() => setSelectedValue('mensal')}
                value="a"
                name="radio-button-demo"
              />
            </div>
          </div>

          <div className="p-3 flex items-center place-content-between">
            <div className="flex">Assinatura dinâmica</div>
            <div>
              <Radio
                checked={selectedValue === 'dinamica'}
                onChange={() => setSelectedValue('dinamica')}
                value="a"
                name="radio-button-demo"
              />
            </div>
          </div>
        </Card>

        {selectedValue === 'agora' && (
          <Card style={{ marginBottom: '25px', marginTop: '25px' }}>
            <CardContent fullWidth>
              <p className="w-full font-bold" style={{ fontSize: '12px' }}>
                Qual o valor do deposito
              </p>
              <TextField
                fullWidth
                type="number"
                id="outlined-basic"
                variant="outlined"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
              />
            </CardContent>

            <CardContent fullWidth>
              <p className="w-full font-bold" style={{ fontSize: '12px' }}>
                Código de barras gerado
              </p>
              <p className="w-full text-center">
                23793 38128 60045 646985 79000 063309 1 844200000{valor}000
              </p>
            </CardContent>

            <CardContent fullWidth>
              <div className="flex items-center mb-6">
                <p className="font-bold" style={{ fontSize: '12px' }}>
                  Deseja que o Meu Gerente faça o investimento de forma
                  automática?
                </p>
                <p className="text-center">
                  <Switch
                    checked={checkedA}
                    onChange={() => setCheckedA(!checkedA)}
                    name="checkedA"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                  />
                </p>
              </div>
              {checkedA && (
                <p className="w-full text-center">
                  Assim que o dinheiro chegar iremos investir da melhor forma
                  para você
                </p>
              )}
            </CardContent>
          </Card>
        )}

        {selectedValue === 'mensal' && (
          <Card style={{ marginBottom: '25px', marginTop: '25px' }}>
            <CardContent fullWidth>
              <p className="w-full font-bold" style={{ fontSize: '12px' }}>
                Escolher qual conta vamos retirar o investimento
              </p>
              <div className="w-full text-center mt-3">
                <select className="w-full" style={{ height: '45px' }}>
                  <option>Bills - Obiebank</option>
                  <option>Household - Obiebank</option>
                </select>
              </div>
            </CardContent>
            <CardContent fullWidth>
              <p className="w-full font-bold" style={{ fontSize: '12px' }}>
                Qual o valor deseja investir?
              </p>
              <TextField
                fullWidth
                type="number"
                id="outlined-basic"
                variant="outlined"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
              />
              <p className="w-full text-center mt-5">
                Agora o Meu Gerente vai investir da melhor forma e você pode
                acompanhar tudo sobre o seu dinheiro
              </p>
            </CardContent>
          </Card>
        )}

        {selectedValue === 'dinamica' && (
          <Card style={{ marginBottom: '25px', marginTop: '25px' }}>
            <CardContent fullWidth>
              <p className="w-full font-bold" style={{ fontSize: '12px' }}>
                Escolher qual conta vamos retirar o investimento
              </p>
              <div className="w-full text-center mt-3">
                <select className="w-full" style={{ height: '45px' }}>
                  <option>Bills - Obiebank</option>
                  <option>Household - Obiebank</option>
                </select>
              </div>
            </CardContent>
            <CardContent fullWidth>
              <p className="w-full font-bold" style={{ fontSize: '12px' }}>
                Qual o valor minimo de renda mensal para começar a investir?
              </p>
              <TextField
                fullWidth
                type="number"
                id="outlined-basic"
                variant="outlined"
                value={rendaMensal}
                onChange={(e) => setRendaMensal(e.target.value)}
              />
              <p className="w-full text-center mt-5">
                Agora o Meu Gerente vai investir da melhor forma e você pode
                acompanhar tudo sobre o seu dinheiro
              </p>
            </CardContent>
            <CardContent fullWidth>
              <p className="w-full font-bold" style={{ fontSize: '12px' }}>
                Qual o valor deseja investir?
              </p>
              <TextField
                fullWidth
                type="number"
                id="outlined-basic"
                variant="outlined"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
              />
              <p className="w-full text-center mt-5">
                Meu Gerente só vai investir R$ {valor},00 se vc ganhar mais de
                R${rendaMensal},00 por mês{' '}
              </p>
            </CardContent>
          </Card>
        )}
      </div>

      <div className="w-full flex justify-center">
        <button
          type="button"
          className="place-self-center my-5 font-bold py-2 px-4 rounded-full w-3/4"
          style={{ backgroundColor: '#B02334', color: 'white' }}
          onClick={() => handleConfirm()}
        >
          Confirmar
        </button>
      </div>
    </>
  );
}
