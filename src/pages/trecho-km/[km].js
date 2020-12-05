import React from 'react';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import QuestionComponent from 'app/UI/components/question';

const DynamicAppTabNavigationWithNoSSR = dynamic(
  () => import('app/UI/components/app-tab'),
  { ssr: false }
);

const DynamicLabelBottomNavigationWithNoSSR = dynamic(
  () => import('app/UI/components/label-bottom-navigation'),
  { ssr: false }
);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    flexGrow: 1,
    // backgroundColor: theme.palette.background.paper,
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
  margin: {
    margin: 4,
  },
});

const GEOMETRIA_DATA = [
  {
    title: '1 - Tipo de rodovia',
    showCount: true,
    check: 'Pista dupla com faixa central',
    items: [
      { text: 'Pista dupla com canteiro central', value: 1 },
      { text: 'Pista dupla com barreira central', value: 0 },
      { text: 'Pista dupla com faixa central', value: 6 },
      { text: 'Pista simples de mão única', value: 3 },
      { text: 'Pista simples de mão dupla', value: 0 },
    ],
  },
  {
    showCount: true,
    title: '2 - Perfil da rodovia',
    check: 'Plano',
    items: [
      { text: 'Plano', value: 8 },
      { text: 'Ondulado ou montonhoso', value: 2 },
    ],
  },
  {
    showCount: false,
    title: '3 - Faixa adicional de subida',
    check: 'Possui faixa adicional de subida',
    items: [
      { text: 'Possui faixa adicional de subida' },
      { text: 'Não possui faixa adicional de subida' },
    ],
  },
  {
    showCount: false,
    title: '4 - Pontes/viadutos',
    check: 'Possui ponte ou viaduto',
    items: [
      { text: 'Possui ponte ou viaduto' },
      { text: 'Não possui ponte ou viaduto' },
    ],
  },
  {
    showCount: true,
    title: '5 - Presença de curvas perigosas',
    check: 'Trecho COM curvas perigosas',
    items: [
      { text: 'Trecho COM curvas perigosas', value: 7 },
      { text: 'Trecho SEM curvas perigosas', value: 3 },
    ],
  },
  {
    showCount: true,
    title: '5.1 - Condições das curvas perigosas',
    check: 'COM placas E SEM defensas',
    items: [
      { text: 'COM placas E COM defensas', value: 1 },
      { text: 'COM placas E SEM defensas', value: 3 },
      { text: 'SEM placas E COM defensas', value: 2 },
      { text: 'SEM placas E SEM defensas', value: 1 },
    ],
  },
];

const PAVIMENTACAO = [
  {
    title: '1 - Condições de superfície',
    showCount: true,
    check: 'Desgastado',
    items: [
      { text: 'Perfeito', value: 2 },
      { text: 'Desgastado', value: 5 },
      { text: 'Trincas em malha/remendo', value: 1 },
      { text: 'Afundamentos/ondulações/buracos', value: 2 },
      { text: 'Destruído', value: 0 },
    ],
  },
  {
    showCount: true,
    title: '2 - Velocidade devido ao pavimento',
    check: 'Obriga a redução de velocidade',
    items: [
      { text: 'Não obriga a redução de velocidade', value: 3 },
      { text: 'Obriga a redução de velocidade', value: 5 },
      { text: 'Baixíssima velocidade', value: 2 },
    ],
  },
  {
    showCount: true,
    title: '3 - Ponto crítico (adicionar foto)',
    check: 'Não possui',
    items: [
      { text: 'Não possui', value: 8 },
      { text: 'Queda de barreiras', value: 0 },
      { text: 'Ponte caída', value: 0 },
      { text: 'Erosão na pista', value: 1 },
      { text: 'Buraco grande', value: 0 },
      { text: 'Passagem em nível', value: 0 },
      { text: 'Obra no pavimento', value: 0 },
      { text: 'Balança em operação', value: 0 },
      { text: 'Outros', value: 1 },
    ],
  },
];

export default function KmPage() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <DynamicAppTabNavigationWithNoSSR
        title="Trecho 8 - Km 10"
        return="/ver-formulario/78569"
      />

      <div className="container mx-auto my-4">
        <div className="px-4 py-2">
          <Card className={classes.root}>
            <div className={classes.margin}>
              <div className="p-2 grid-cols-2 grid">
                <Grid container spacing={1} alignItems="flex-end">
                  <Grid item>
                    <img
                      src="../icons/km.svg"
                      alt="icon"
                      className="w-8 h-8 mr-2"
                    />
                  </Grid>
                  <Grid item>
                    <TextField id="input-with-icon-grid" label="hodômetro" />
                  </Grid>
                </Grid>

                <Grid container spacing={1} alignItems="flex-end">
                  <Grid item>
                    <img
                      src="../icons/local.svg"
                      alt="icon"
                      className="w-8 h-8 mr-2"
                    />
                  </Grid>
                  <Grid item>
                    <TextField id="input-with-icon-grid" label="latitude" />
                  </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="flex-end">
                  <Grid item>
                    <img
                      src="../icons/location.svg"
                      alt="icon"
                      className="w-8 h-8 mr-2"
                    />
                  </Grid>
                  <Grid item>
                    <TextField id="input-with-icon-grid" label="ponto GPS" />
                  </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="flex-end">
                  <Grid item>
                    <img
                      src="../icons/local.svg"
                      alt="icon"
                      className="w-8 h-8 mr-2"
                    />
                  </Grid>
                  <Grid item>
                    <TextField id="input-with-icon-grid" label="longitude" />
                  </Grid>
                </Grid>
              </div>
            </div>
          </Card>

          <div className="py-4">
            <AppBar position="static">
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="simple tabs example"
                centered
                indicatorColor="primary"
              >
                <Tab
                  label="GEOMETRIA DA VIA"
                  icon={
                    <img
                      src="../icons/architecture.svg"
                      alt="icon"
                      className="w-8 h-8 mr-2"
                    />
                  }
                  {...a11yProps(0)}
                />
                <Tab
                  label="PAVIMENTAÇÃO"
                  icon={
                    <img
                      src="../icons/add_road_white.svg"
                      alt="icon"
                      className="w-8 h-8 mr-2"
                    />
                  }
                  {...a11yProps(1)}
                />
                <Tab
                  label="SINALIZAÇÃO"
                  icon={
                    <img
                      src="../icons/traffic.svg"
                      alt="icon"
                      className="w-8 h-8 mr-2"
                    />
                  }
                  {...a11yProps(2)}
                />
                <Tab
                  label="APOIO"
                  icon={
                    <img
                      src="../icons/support.svg"
                      alt="icon"
                      className="w-8 h-8 mr-2"
                    />
                  }
                  {...a11yProps(3)}
                />
              </Tabs>
            </AppBar>
            <Card className={classes.root}>
              <TabPanel value={value} index={0}>
                {GEOMETRIA_DATA.map((item, index) => (
                  <QuestionComponent data={item} key={index.toString()} />
                ))}
              </TabPanel>
            </Card>
            <Card className={classes.root}>
              <TabPanel value={value} index={1}>
                {PAVIMENTACAO.map((item, index) => (
                  <QuestionComponent data={item} key={index.toString()} />
                ))}
              </TabPanel>
            </Card>
            <Card className={classes.root}>
              <TabPanel value={value} index={2}>
                {GEOMETRIA_DATA.map((item, index) => (
                  <QuestionComponent data={item} key={index.toString()} />
                ))}
              </TabPanel>
            </Card>
            <Card className={classes.root}>
              <TabPanel value={value} index={3}>
                {PAVIMENTACAO.map((item, index) => (
                  <QuestionComponent data={item} key={index.toString()} />
                ))}
              </TabPanel>
            </Card>
          </div>
        </div>
      </div>

      <DynamicLabelBottomNavigationWithNoSSR selected="" />
    </>
  );
}
