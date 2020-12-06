import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import dynamic from 'next/dynamic';
import { ScrollingContainers } from 'app/UI/components/scrolling-containers';
import { CategoryCardItem } from 'app/UI/components/category-card-item';
// import { makeStyles } from '@material-ui/core/styles';

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
    content: 'Permissões',
    page: 'permissoes',
    about: 'Uso de dados',
  },
  {
    content: 'Moderado',
    page: 'perfil-de-investidor',
    about: 'Perfil do investidor',
  },
  {
    content: 'Objetivos',
    page: 'objetivos',
    about: 'Suas metas',
  },
  {
    content: 'Poupe seu dinheiro',
    page: 'planejamento',
    about: 'Seu plano inteligente',
  },
  {
    about: 'Recomendações',
    content: 'Para você',
    page: 'para-voce',
  },
  {
    content: 'Meus investimentos',
    page: 'meus-investimentos',
    about: 'Entenda',
  },
  { content: 'Me ajuda', page: 'ajuda', about: 'Suporte' },
];
export default function FormulariosPage() {
  const classes = useStyles();
  return (
    <>
      <DynamicAppTabNavigationWithNoSSR title="Meu Gerente" />

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
          <CardContent className="my-2 flex justify-between w-full">
            <h2 className="font-medium font-sans text-base text-left">
              Kleyson, seu <br />
              patrimônio hoje: <br />
            </h2>
            <p
              className="font-semibold text-base text-right"
              style={{ color: '#4B7594' }}
            >
              R$1.450,00 <br />{' '}
              <span className="font-semibold text-sm underline">
                meus investimentos
              </span>
            </p>
          </CardContent>
        </Card>

        <img src="imgs/home-1.svg" className="py-8 px-12 w-full" alt="foto" />
        <img src="imgs/home-2.svg" className="py-4 px-8 w-full" alt="foto" />

        {/* {accountsBank.map((accounts, index) => (
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
                    <span className="font-sans text-base font-semibold text-green-800">
                      R$ {accounts.value}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))} */}
      </div>
    </>
  );
}
