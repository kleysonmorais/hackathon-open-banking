import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
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
}));

const DynamicAppTabNavigationWithNoSSR = dynamic(
  () => import('app/UI/components/app-tab'),
  { ssr: false }
);

export default function ObjetivosPage() {
  const classes = useStyles();
  const [openNew, setOpenNew] = useState(false);
  const [objetivos, setObjetivos] = useState([]);

  const [nome, setNome] = useState('');
  const [date, setDate] = useState(null);
  const [valor, setValor] = useState(50);

  const handleNovoObjetivo = () => {
    const auxObjetivos = objetivos;
    auxObjetivos.push({ nome, date, valor });
    setObjetivos(auxObjetivos);
    setOpenNew(false);
    setNome('');
    setDate(null);
    setValor(50);
  };

  return (
    <>
      <DynamicAppTabNavigationWithNoSSR title="Objetivos" return="/principal" />

      <div className="m-4">
        <Card className={classes.root} style={{ marginBottom: '25px' }}>
          <div className="p-3 flex items-center place-content-between">
            <Typography variant="h6" component="h2">
              Adicionar Meta ou Objetivo
            </Typography>
            <AddIcon htmlColor="#B02334" onClick={() => setOpenNew(true)} />
          </div>
        </Card>

        {!openNew &&
          objetivos.map((objetivo) => (
            <Card className={classes.root} style={{ marginBottom: '10px' }}>
              <CardContent fullWidth>
                <div className="flex items-center place-content-between">
                  <Typography variant="h5" component="h2">
                    {objetivo.nome}
                  </Typography>
                  <p>
                    <div className="mr-3">{objetivo.date}</div>
                    R$ {objetivo.valor},00
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}

        {openNew && (
          <Card className={classes.root}>
            <CardContent fullWidth>
              <Typography variant="h6" component="h2">
                Novo Objetivo
              </Typography>
              <TextField
                fullWidth
                id="outlined-basic"
                variant="outlined"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </CardContent>

            <CardContent fullWidth>
              <Typography variant="h6" component="h2">
                Quando quer realiza-lo?
              </Typography>
              <TextField
                type="date"
                fullWidth
                id="outlined-basic"
                variant="outlined"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </CardContent>

            <CardContent fullWidth>
              <Typography variant="h6" component="h2">
                Quanto deseja poupar mensalmente?
              </Typography>
              <TextField
                type="number"
                fullWidth
                id="outlined-basic"
                variant="outlined"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
              />
            </CardContent>
          </Card>
        )}
      </div>

      {openNew && (
        <div className="absolute bottom-0 w-full flex justify-center">
          <button
            type="button"
            className="place-self-center my-5 font-bold py-2 px-4 rounded-full w-3/4"
            style={{ backgroundColor: '#B02334', color: 'white' }}
            onClick={handleNovoObjetivo}
          >
            Salvar
          </button>
        </div>
      )}
    </>
  );
}
