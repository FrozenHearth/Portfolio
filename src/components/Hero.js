import React from 'react';
import { Container, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HeroBanner from '../assets/images/hero_illus.png';
import CloudDownload from '@material-ui/icons/CloudDownload';

const useStyles = makeStyles(theme => ({
  heroContainer: {
    display: 'flex',
    marginTop: '10rem',
    marginBottom: '12rem'
  },
  heroMessagesContainer: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    top: '5.5rem',
    height: '25rem',
    left: '3.6rem'
  },
  heroBanner: {
    height: '40rem',
    width: '60rem',
    marginLeft: 'auto'
  },
  heroMessageTitle: {
    fontWeight: 300,
    fontSize: '9rem'
  },
  heroMessageSubtitle: {
    color: theme.palette.text.secondary,
    fontWeight: 400,
    marginTop: '3.6rem',
    marginLeft: '0.5rem'
  },
  heroMessageSubtitle2: {
    marginTop: '3rem',
    marginLeft: '0.5rem',
    fontSize: '1.8rem',
    color: '#757575'
  },
  heroBtn: {
    fontSize: '1.4rem',
    background: theme.palette.info.main,
    color: 'white',
    width: '12rem',
    borderRadius: '2px',
    marginTop: '3.6rem',
    marginLeft: '0.5rem',

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
    <Container
      id="scrollToHero"
      className={classes.heroContainer}
      maxWidth="lg"
    >
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
          variant="h4"
          gutterBottom
          component="h4"
        >
          I am{' '}
          <span style={{ color: '#000', fontWeight: 600 }}>Vishwanath.</span>
        </Typography>
        <Typography
          className={classes.heroMessageSubtitle2}
          variant="h5"
          component="h5"
        >
          I am a MS CS grad, and a software development engineer.
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
