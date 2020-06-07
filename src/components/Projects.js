import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import ProjectCards from './ProjectCards';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '125rem',
    margin: '0 0 10rem 0',
    position: 'relative',
    left: '11rem'
  },
  title: {
    fontSize: '2.5rem',
    marginTop: '3rem'
  }
}));

const Projects = () => {
  const classes = useStyles();
  return (
    <Container size="md" id="scrollTo" className={classes.root}>
      <h1 className={classes.title}>Projects</h1>
      <ProjectCards />
    </Container>
  );
};

export default Projects;
