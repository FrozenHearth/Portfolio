import React, { useLayoutEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Home from '@material-ui/icons/Home';
import { HashLink as Link } from 'react-router-hash-link';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    '& .MuiSvgIcon-root': {
      fontSize: '2.4rem'
    }
  },
  appBar: {
    boxShadow: 'none'
  },
  menuButton: {
    marginRight: '1.6rem',
    marginLeft: '8rem'
  },
  title: {
    flexGrow: 1,
    fontSize: '1.6rem'
  },
  actionBtns: {
    marginRight: '12rem'
  },
  navBtn: {
    fontSize: '1.4rem'
  }
}));

const Navbar = props => {
  const classes = useStyles();

  const scrollToProjects = () => {
    const anchor = document.querySelector('#scrollTo');
    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} color="transparent" position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            size="medium"
            className={classes.menuButton}
            color="inherit"
          >
            <Home />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Vishwanath BV
          </Typography>
          <div className={classes.actionBtns}>
            <Button className={classes.navBtn} size="medium" color="inherit">
              About
            </Button>
            <Button
              onClick={scrollToProjects}
              className={classes.navBtn}
              size="medium"
              color="inherit"
            >
              Projects
            </Button>
            <Button className={classes.navBtn} size="medium" color="inherit">
              Contact
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
