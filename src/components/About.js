import React from 'react';
import EducationIllus from '../assets/images/education_illus.png';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  aboutMeContainer: {
    display: 'flex',
    marginTop: '10rem',
    marginBottom: '12rem'
  },
  aboutMeBanner: {
    height: '45rem',
    width: '60rem'
  },
  aboutMeTitle: {
    fontWeight: 300,
    fontSize: '7rem',
    marginLeft: '15rem',
    marginTop: '5rem'
  },
  aboutMeDetails: {
    display: 'flex'
  },
  educationDetailsContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  detailsTitle: {
    fontWeight: 400,
    fontSize: '3rem',
    marginTop: '4rem'
  }
}));

export const AboutMe = () => {
  let educationDetails = [
    {
      degree: 'M.Sc. (Computer Science)',
      college: ' MIT, Alandi (2018 - 2020) - Final Semester',
      id: 0
    },
    {
      degree: 'B.Sc. (Computer Science)',
      college: 'MIT, Alandi (2013 - 2017)',
      id: 1
    },
    {
      degree: 'Jr. College',
      college: 'Nowrosjee Wadia College (2011 - 2013)',
      id: 2
    }
  ];
  let workExpDetails = [
    {
      company: 'Red Hat',
      description: 'Software Engineer Intern (June 2018 - Dec 2018), Pune',
      id: 0
    },
    {
      company: `Bots N' Brains`,
      description: 'Software Engineer Intern (July 2019 - Nov 2019), Pune',
      id: 1
    },
    {
      company: 'Zaya Learning Labs',
      description: 'Software Development Engineer (Mar 2020 - current), Mumbai',
      id: 2
    }
  ];
  const classes = useStyles();
  return (
    <Container
      id="scrollToAboutMe"
      className={classes.aboutMeContainer}
      maxWidth="xl"
    >
      <img src={EducationIllus} className={classes.aboutMeBanner} alt="" />
      <div className={classes.educationDetailsContainer}>
        <Typography
          className={classes.aboutMeTitle}
          variant="h1"
          component="h1"
        >
          About me?
        </Typography>
        <Box
          style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
          marginBottom="2rem"
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '40%',
              marginRight: '4rem'
            }}
          >
            <Typography
              className={classes.detailsTitle}
              variant="h3"
              component="h3"
              gutterBottom
            >
              Education
            </Typography>
            {educationDetails.length > 0
              ? educationDetails.map(item => (
                  <div
                    className={classes.educationDetailsContainer}
                    key={item.id}
                  >
                    <Typography component="p" variant="h5">
                      {item.degree}
                    </Typography>
                    <Box marginBottom="2rem">
                      <Typography
                        component="p"
                        variant="h5"
                        color="textSecondary"
                      >
                        {item.college}
                      </Typography>
                    </Box>
                  </div>
                ))
              : ''}
          </div>
          <div
            style={{ display: 'flex', flexDirection: 'column', width: '60%' }}
          >
            <Typography
              className={classes.detailsTitle}
              variant="h3"
              component="h3"
              gutterBottom
            >
              Work Experience
            </Typography>
            {workExpDetails.length > 0
              ? workExpDetails.map(item => (
                  <div
                    className={classes.educationDetailsContainer}
                    key={item.id}
                  >
                    <Typography component="p" variant="h5">
                      {item.company}
                    </Typography>
                    <Box marginBottom="2rem">
                      <Typography
                        component="p"
                        variant="h5"
                        color="textSecondary"
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </div>
                ))
              : ''}
          </div>
        </Box>
      </div>
    </Container>
  );
};
