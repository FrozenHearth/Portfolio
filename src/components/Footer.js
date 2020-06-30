import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  footerContainer: {
    display: 'flex',
    width: '100%',
    height: '5rem',
    alignItems: 'center',
    background: '#302e41',
  },
  footerMsg: {
    color: 'white',
    margin: '0 auto',
    fontSize: '1.5rem',
    fontWeight: 500,
  },
}));

export const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footerContainer}>
      <Typography className={classes.footerMsg}>© 2020 Vishwanath </Typography>
    </footer>
  );
};
