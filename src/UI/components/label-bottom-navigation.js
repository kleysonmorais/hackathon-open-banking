import React, { useState } from 'react';
import Router from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Toolbar from '@material-ui/core/Toolbar';

// Icons
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import NotListedLocationOutlinedIcon from '@material-ui/icons/NotListedLocationOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';

const useStyles = makeStyles({
  root: {
    width: '100%',
    backgroundColor: '#10386C',
  },
});

export default function LabelBottomNavigation({ selected }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(selected);
  const [internetColor, setInternetColor] = useState('#B53232');
  const [internetStatus, setInternetStatus] = useState(
    'Desconectado da internet: Salvando dados localmente'
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
    Router.push(`/${newValue}`);
  };

  const changeInternetStatus = () => {
    setInternetColor('#4B78BA');
    setInternetStatus('Sincronizando dados com a base CNT ...');
  };

  setTimeout(() => {
    changeInternetStatus();
  }, 10000);

  return (
    <div className="block lg:hidden">
      <Toolbar />
      <div
        className="flex justify-center text-white w-full"
        style={{
          position: 'fixed',
          bottom: '55px',
          backgroundColor: internetColor,
        }}
      >
        {internetStatus}
      </div>
      <BottomNavigation
        style={{ position: 'fixed', bottom: 0 }}
        value={value}
        onChange={handleChange}
        className={classes.root}
        showLabels
      >
        <BottomNavigationAction
          style={{ color: 'white' }}
          label="Formularios"
          value="formularios"
          icon={<FormatListBulletedIcon />}
        />
        <BottomNavigationAction
          style={{ color: 'white' }}
          label="Dúvidas"
          value="duvidas"
          icon={<NotListedLocationOutlinedIcon />}
        />
        <BottomNavigationAction
          style={{ color: 'white' }}
          label="Chat"
          value="chat"
          icon={<ChatOutlinedIcon />}
        />
        <BottomNavigationAction
          style={{ color: 'white' }}
          label="Perfil"
          value="perfil"
          icon={<PersonOutlineOutlinedIcon />}
        />
      </BottomNavigation>
    </div>
  );
}
