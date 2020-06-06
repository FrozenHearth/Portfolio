import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Home from '@material-ui/icons/Home';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    '& .MuiSvgIcon-root': {
      fontSize: '2.4rem'
    }
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    fontSize: '1.6rem'
  },
  actionBtns: {
    marginRight: '1rem'
  },
  navBtn: {
    fontSize: '1.4rem'
  }
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="transparent" position="static">
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
            <Button className={classes.navBtn} size="medium" color="inherit">
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
