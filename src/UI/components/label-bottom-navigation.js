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

import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';
import OutlinedFlagRoundedIcon from '@material-ui/icons/OutlinedFlagRounded';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';

const useStyles = makeStyles({
  root: {
    width: '100%',
    backgroundColor: '#B02334',
  },
});

export default function LabelBottomNavigation({ selected }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(selected);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    Router.push(`/${newValue}`);
  };

  return (
    <div className="block lg:hidden">
      <Toolbar />
      <BottomNavigation
        style={{ position: 'fixed', bottom: 0 }}
        value={value}
        onChange={handleChange}
        className={classes.root}
        showLabels
      >
        <BottomNavigationAction
          style={{ color: 'white' }}
          label="Principal"
          value="principal"
          icon={<HomeOutlinedIcon />}
        />
        <BottomNavigationAction
          style={{ color: 'white' }}
          label="Transações"
          value="transacoes"
          icon={<ListOutlinedIcon />}
        />
        <BottomNavigationAction
          style={{ color: 'white' }}
          label="Planejamento"
          value="planejamento"
          icon={<OutlinedFlagRoundedIcon />}
        />
        <BottomNavigationAction
          style={{ color: 'white' }}
          label="Mais"
          value="mais"
          icon={<MoreHorizOutlinedIcon />}
        />
      </BottomNavigation>
    </div>
  );
}
