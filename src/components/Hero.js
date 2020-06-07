import React from 'react';
import { Container, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HeroBanner from '../assets/images/hero_illus.png';
import CloudDownload from '@material-ui/icons/CloudDownload';

const useStyles = makeStyles(theme => ({
  heroContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '10rem',
    marginBottom: '18rem'
  },
  heroMessagesContainer: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    top: '12.5rem',
    height: '25rem',
    left: '3.6rem'
  },
  heroBanner: {
    height: '40rem',
    width: '60rem'
  },
  heroMessageTitle: {
    fontWeight: 500
  },
  heroMessageSubtitle: {
    color: theme.palette.text.secondary,
    fontWeight: 400,
    marginTop: '1.6rem'
  },
  heroBtn: {
    fontSize: '1.4rem',
    background: theme.palette.info.main,
    color: 'white',
    width: '12rem',
    borderRadius: '2px',
    marginTop: '2rem',
    '&:hover': {
      background: theme.palette.info.dark
    }
  },
  btnLink: {
    textDecoration: 'none'
  }
}));

const Hero = () => {
  const classes = useStyles();
  return (
    <Container className={classes.heroContainer} maxWidth="lg">
      <div className={classes.heroMessagesContainer}>
        <Typography
          className={classes.heroMessageTitle}
          variant="h1"
          component="h1"
        >
          Hi there!
        </Typography>
        <Typography
          className={classes.heroMessageSubtitle}
          variant="h2"
          component="h2"
        >
          I'm Vishwanath, and I'm a software development engineer.
        </Typography>
        <a
          className={classes.btnLink}
          href="https://drive.google.com/file/d/1-ZdFHRJzEYCiayosyExphqeiclnRO8Wx/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="contained"
            startIcon={<CloudDownload />}
            className={classes.heroBtn}
            size="medium"
          >
            Resume
          </Button>
        </a>
      </div>
      <img className={classes.heroBanner} src={HeroBanner} alt="" />
    </Container>
  );
};

export default Hero;
