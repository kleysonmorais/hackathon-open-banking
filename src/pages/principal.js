import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import dynamic from 'next/dynamic';
import { ScrollingContainers } from 'app/UI/components/scrolling-containers';
import { CategoryCardItem } from 'app/UI/components/category-card-item';
// import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const DynamicAppTabNavigationWithNoSSR = dynamic(
  () => import('app/UI/components/app-tab'),
  { ssr: false }
);

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

const accountsBank = [
  { name: 'NuBank', value: 1450.93, logo: 'imgs/nubank-logo.png' },
  { name: 'Itaú', value: 2450.93, logo: 'imgs/itau.jpg' },
  { name: 'Caixa', value: 2450.93, logo: 'imgs/caixa-logo.png' },
];

const cards = [
  {
    content: 'Gestão de consentimento',
    page: 'gestao-de-consentimento',
    about: 'Configurar permissões',
  },
  {
    content: 'Minhas despesas',
    page: 'minhas-despesas',
    about: 'Resumo',
  },
  {
    content: 'Objetivos',
    page: 'objetivos',
    about: 'Defina metas',
  },
  { content: 'Investimentos', page: 'investimentos', about: 'Resumo' },
  {
    about: 'Moderado',
    content: 'Perfil de investidor',
    page: 'perfil-de-investidor',
  },
  { content: 'Ajustar Planos', page: 'ajustar-planos', about: 'Premium' },
  { content: 'Me ajuda', page: 'me-ajuda', about: 'Dúvidas' },
];
export default function FormulariosPage() {
  const classes = useStyles();
  return (
    <>
      <DynamicAppTabNavigationWithNoSSR title="Olá, Kleyson" />

      <div style={{ backgroundColor: '#B02334' }}>
        <ScrollingContainers>
          {cards.map((card, index) => (
            <CategoryCardItem
              key={index.toString()}
              content={card.content}
              page={card.page}
              about={card.about}
            />
          ))}
        </ScrollingContainers>
      </div>

      <div className="h-screen bg-gray-100">
        <Card className={classes.root} variant="outlined">
          <CardContent className="my-2">
            <div className="flex justify-start">
              <img
                width={100}
                // style={{ borderRadius: 5 }}
                src="imgs/undraw_wallet.svg"
                alt="nubank"
              />
              <div className="text-center">
                <h2 className="leading-tight font-sans text-base px-12 text-center pt-4">
                  Kleyson, seu <br />
                  patrimônio hoje: <br />
                </h2>
                <p
                  className="font-semibold p-2 text-lg"
                  style={{ color: '#4B7594' }}
                >
                  R$15.450,00
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {accountsBank.map((accounts, index) => (
          <div key={index.toString()} className="m-2">
            <Card className={classes.root} variant="outlined">
              <CardContent className="my-2">
                <p className="text-xs text-green-800">Conta Bancária</p>
                <div className="flex justify-start pt-2">
                  <img
                    width={50}
                    style={{ borderRadius: 5 }}
                    src={accounts.logo}
                    alt="nubank"
                  />
                  <div className="px-2">
                    <Typography variant="h5" component="h2">
                      {accounts.name}
                    </Typography>
                    {/* <p className="font-sm text-base font-bold">Nubank</p> */}
                    <span className="font-sans text-base font-semibold text-green-800">
                      R$ {accounts.value}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}
