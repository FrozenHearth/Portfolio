import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SkillsIllus from '../assets/images/skills_illus.png';

const useStyles = makeStyles(() => ({
  skillsContainer: {
    display: 'flex',
    marginTop: '10rem',
    marginBottom: '12rem'
  },
  skillsBanner: {
    height: '45rem',
    width: '60rem'
  },
  skillsTitle: {
    fontWeight: 300,
    fontSize: '7rem',
    margin: '5rem 0 0 15rem'
  },
  skillsDetailsContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  detailsTitle: {
    fontWeight: 400,
    fontSize: '3rem',
    marginTop: '4rem',
    marginLeft: '15rem'
  }
}));

export const Skills = () => {
  const classes = useStyles();
  return (
    <Container
      className={classes.skillsContainer}
      id="scrollToSkills"
      maxWidth="xl"
    >
      <div className={classes.skillsDetailsContainer}>
        <Typography className={classes.skillsTitle} variant="h1" component="h1">
          Skills
        </Typography>
        <Typography
          className={classes.detailsTitle}
          variant="h3"
          component="h3"
          gutterBottom
        >
          Frontend:
          <Typography component="p" variant="h5" color="textSecondary">
            HTML, CSS/SASS/SCSS, Javascript, Typescript, Angular, React, Redux,
            Vue, VueX
          </Typography>
        </Typography>
        <Typography
          className={classes.detailsTitle}
          variant="h3"
          component="h3"
          gutterBottom
        >
          Backend:
          <Typography component="p" variant="h5" color="textSecondary">
            Node.js, Express.js, GraphQL, Python, Django, Java, MongoDB, mySQL
          </Typography>
        </Typography>
      </div>
      <img className={classes.skillsBanner} src={SkillsIllus} alt="" />
    </Container>
  );
};
