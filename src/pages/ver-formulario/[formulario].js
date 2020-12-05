import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import Card from '@material-ui/core/Card';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import DirectionsBoatOutlinedIcon from '@material-ui/icons/DirectionsBoatOutlined';
import MapOutlinedIcon from '@material-ui/icons/MapOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';
import AccessTimeOutlinedIcon from '@material-ui/icons/AccessTimeOutlined';
import FlagOutlinedIcon from '@material-ui/icons/FlagOutlined';
import WavesOutlinedIcon from '@material-ui/icons/WavesOutlined';
import NavigateNextOutlinedIcon from '@material-ui/icons/NavigateNextOutlined';

const Wrapper = styled.div`
  a {
    text-decoration: none;
  }
`;

const ImageWrapper = styled.div`
  /* cursor: pointer; */
`;

const DynamicAppTabNavigationWithNoSSR = dynamic(
  () => import('app/UI/components/app-tab'),
  { ssr: false }
);

const DynamicLabelBottomNavigationWithNoSSR = dynamic(
  () => import('app/UI/components/label-bottom-navigation'),
  { ssr: false }
);

const useStyles = makeStyles({
  root: {
    minWidth: 275,
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
});

function SimpleCard() {
  const classes = useStyles();
  return (
    <div className="p-4">
      <Card className={classes.root}>
        <Wrapper className="md:max-w-sm w-full md:max-w-full md:flex h-full">
          <ImageWrapper
            className="flex-none bg-cover
        text-center overflow-hidden w-2/3"
            style={{ backgroundImage: `url('../imgs/mapa.png')` }}
          />

          <div
            className="p-4 flex flex-col justify-between leading-normal shadow-xl 
            w-full bg-white text-white"
            style={{ backgroundColor: '#686868' }}
          >
            <div className="">
              <div
                className="flex justify-evenly leading-snug font-medium text-center
              text-gray-900 text-xl mb-2 font-bold py-4"
              >
                <img
                  src="../icons/sol.svg"
                  alt="icon"
                  className="w-8 h-8 mr-2"
                />
                <p className="text-white text-center">28º</p>
              </div>
              <hr />
              <div className="flex justify-evenly text-center py-4">
                <p className="text-white">
                  <MoneyOffIcon className="my-2" fontSize="large" />
                  <br />
                  Área sem pedágio
                </p>
                <p className="text-white">
                  <DirectionsBoatOutlinedIcon
                    className="my-2"
                    fontSize="large"
                  />
                  <br />
                  Área com balsa
                </p>
              </div>
            </div>
          </div>
        </Wrapper>

        <div className="py-6 px-2">
          <div className="grid grid-cols-4 gap-3 py-2">
            <div className="px-4 text-lg">
              <MapOutlinedIcon className="mr-2" />
              Rota 6
            </div>
            <div className="px-4 text-lg">
              <RoomOutlinedIcon className="mr-2" />
              TO-458
            </div>
            <div className="px-4 text-lg">
              <EventOutlinedIcon className="mr-2" />
              24/10/2020
            </div>
            <div className="px-4 text-lg">
              <WavesOutlinedIcon className="mr-2" /> Flexível
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2 py-2">
            <div className="px-4 text-lg">
              <FlagOutlinedIcon className="mr-2" /> Início:
              <br />
              <span
                className="border-black rounded mr-2 ml-1"
                style={{ border: 'solid 1px', fontSize: '10px' }}
              >
                km
              </span>{' '}
              5867
            </div>
            <div className="px-4 text-lg">
              <br />
              <AccessTimeOutlinedIcon className="mr-2" /> 10:58
            </div>
            <div className="px-4 text-lg">
              <br />
              <RoomOutlinedIcon className="mr-2" /> Palmas - TO
            </div>
          </div>
          <div className="grid grid-cols-4 gap-3 py-2">
            <div className="px-4 text-lg">
              <FlagOutlinedIcon className="mr-2" />
              Fim:
              <br />
              <span
                className="border-black rounded mr-2 ml-1"
                style={{ border: 'solid 1px', fontSize: '10px' }}
              >
                km
              </span>
              5907
            </div>
            <div className="px-4 text-lg">
              <br />
              <AccessTimeOutlinedIcon className="mr-2" /> 11:25
            </div>
            <div className="px-4 text-lg">
              <br />
              <RoomOutlinedIcon className="mr-2" /> Gurupí - TO
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default function VerFormularioPage() {
  const classes = useStyles();
  return (
    <>
      <DynamicAppTabNavigationWithNoSSR
        title={'Formulário #78569 - Trecho 8'}
        return="/formularios"
      />
      <SimpleCard />
      <Link href="/trecho-km/[km].js" as={`/trecho-km/10`}>
        <div className="px-4 py-2">
          <Card className={classes.root}>
            <div className="p-2 flex justify-between">
              <div className="text-lg flex justify-start">
                <img
                  src="../icons/location.svg"
                  alt="icon"
                  className="w-8 h-8 mr-2"
                />
                Km 10
              </div>
              <NavigateNextOutlinedIcon fontSize="large" />
            </div>
          </Card>
        </div>
      </Link>

      <Link href="/trecho-km/[km].js" as={`/trecho-km/20`}>
        <div className="px-4 py-2">
          <Card className={classes.root}>
            <div className="p-2 flex justify-between">
              <div className="text-lg flex justify-start">
                <img
                  src="../icons/location.svg"
                  alt="icon"
                  className="w-8 h-8 mr-2"
                />
                Km 20
              </div>
              <NavigateNextOutlinedIcon fontSize="large" />
            </div>
          </Card>
        </div>
      </Link>

      <Link href="/trecho-km/[km].js" as={`/trecho-km/30`}>
        <div className="px-4 py-2">
          <Card className={classes.root}>
            <div className="p-2 flex justify-between">
              <div className="text-lg flex justify-start">
                <img
                  src="../icons/location.svg"
                  alt="icon"
                  className="w-8 h-8 mr-2"
                />
                Km 30
              </div>
              <NavigateNextOutlinedIcon fontSize="large" />
            </div>
          </Card>
        </div>
      </Link>

      <Link href="/trecho-km/[km].js" as={`/trecho-km/40`}>
        <div className="px-4 py-2">
          <Card className={classes.root}>
            <div className="p-2 flex justify-between">
              <div className="text-lg flex justify-start">
                <img
                  src="../icons/location.svg"
                  alt="icon"
                  className="w-8 h-8 mr-2"
                />
                Km 40
              </div>
              <NavigateNextOutlinedIcon fontSize="large" />
            </div>
          </Card>
        </div>
      </Link>

      <div className="px-4 py-2">
        <Card className={classes.root}>
          <div className="p-2 flex justify-between">
            <div className="text-lg flex justify-start">
              <img
                src="../icons/add_road.svg"
                alt="icon"
                className="w-8 h-8 mr-2"
              />
              Faixas adicionais
            </div>
            <NavigateNextOutlinedIcon fontSize="large" />
          </div>
        </Card>
      </div>

      <div className="px-4 py-2">
        <Card className={classes.root}>
          <div className="p-2 flex justify-between">
            <div className="text-lg flex justify-start">
              <img
                src="../icons/local_movies.svg"
                alt="icon"
                className="w-8 h-8 mr-2"
              />
              Pontes / viadutos
            </div>
            <NavigateNextOutlinedIcon fontSize="large" />
          </div>
        </Card>
      </div>
      <Link href="/fotos">
        <div className="px-4 py-2">
          <Card className={classes.root}>
            <div className="p-2 flex justify-between">
              <div className="text-lg flex justify-start">
                <img
                  src="../icons/add_a_photo.svg"
                  alt="icon"
                  className="w-8 h-8 mr-2"
                />
                Fotos
              </div>
              <NavigateNextOutlinedIcon fontSize="large" />
            </div>
          </Card>
        </div>
      </Link>
      <div className="px-4 py-2">
        <Card className={classes.root}>
          <div className="p-2 flex justify-between">
            <div className="text-lg flex justify-start">
              <img
                src="../icons/cancel.svg"
                alt="icon"
                className="w-8 h-8 mr-2"
              />
              Encerrar formulário
            </div>
            <NavigateNextOutlinedIcon fontSize="large" />
          </div>
        </Card>
      </div>
      <div className="px-4 py-2">
        <Card className={classes.root}>
          <div className="p-2 flex justify-between">
            <div className="text-lg flex justify-start">
              <img
                src="../icons/add_comment.svg"
                alt="icon"
                className="w-8 h-8 mr-2"
              />
              Comentários
            </div>
            <NavigateNextOutlinedIcon fontSize="large" />
          </div>
        </Card>
      </div>
      <DynamicLabelBottomNavigationWithNoSSR selected="" />
    </>
  );
}
