import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Home from '@material-ui/icons/Home';
import { ScrollToComponent } from '../utils/scrollToComponent';

const useStyles = makeStyles(theme => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  root: {
    flexGrow: 1,
    '& .MuiSvgIcon-root': {
      fontSize: '2.4rem'
    }
  },
  appBar: {
    boxShadow: 'none'
  },
  appBarShadow: {
    boxShadow: '0 1px 6px 0 rgba(32, 33, 36, 0.28)',
    zIndex: 2,
    background: '#fff'
  },
  menuButton: {
    marginRight: '5rem',
    marginLeft: '1.5rem'
  },
  title: {
    flexGrow: 1,
    fontSize: '1.6rem'
  },
  actionBtns: {
    marginRight: '11.5rem'
  },
  navBtn: {
    fontSize: '1.4rem'
  }
}));

const Navbar = props => {
  const classes = useStyles();

  const [scrollCheck, setScroll] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        if (!scrollCheck) {
          setScroll('isScrolling');
        }
      } else {
        if (scrollCheck) {
          setScroll('');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
  }, [scrollCheck]);

  return (
    <div className={classes.root}>
      <AppBar
        className={
          scrollCheck === '' ? `${classes.appBar}` : `${classes.appBarShadow}`
        }
        color="transparent"
        position="fixed"
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            size="medium"
            className={classes.menuButton}
            color="inherit"
            onClick={() => ScrollToComponent('#scrollToHero')}
          >
            <Home />
          </IconButton>
          <div className={classes.actionBtns}>
            <Button
              onClick={() => ScrollToComponent('#scrollToAboutMe')}
              className={classes.navBtn}
              size="medium"
              color="inherit"
            >
              About
            </Button>
            <Button
              onClick={() => ScrollToComponent('#scrollToProjects')}
              className={classes.navBtn}
              size="medium"
              color="inherit"
            >
              Projects
            </Button>
            <Button
              onClick={() => ScrollToComponent('#scrollToSkills')}
              className={classes.navBtn}
              size="medium"
              color="inherit"
            >
              Skills
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
