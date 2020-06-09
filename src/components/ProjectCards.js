import React from 'react';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Star from '@material-ui/icons/Star';
import { Icon } from '@iconify/react';
import forkIcon from '@iconify/icons-jam/fork';

const useStyles = makeStyles(theme => ({
  gridRoot: {
    marginTop: '1rem',
    display: 'flex',
    flexWrap: 'wrap'
  },
  projectsCardContainer: {
    boxShadow: 'rgba(0, 0, 0, 0.11) 0px 1px 6px 0px',
    width: '37.3rem',
    minHeight: '18rem',
    marginRight: '2rem',
    marginBottom: '2rem',
    borderRadius: 0,
    position: 'relative'
  },
  projectTitle: {
    fontSize: '1.6rem',
    fontWeight: 700,
    marginTop: '1rem',
    marginBottom: '1.5rem'
  },
  projectDescription: {
    marginBottom: '2rem'
  },
  projectCardActions: {
    display: 'flex',
    position: 'absolute'
  },
  starIcon: {
    fontSize: '1.8rem'
  },
  starsCount: {
    marginRight: '2rem'
  },
  forkIcon: {
    fontSize: '1.8rem'
  },
  brackets: {
    fontSize: '1.6rem',
    marginRight: '0.5rem'
  },
  progLanguage: {
    fontSize: '1.6rem',
    marginRight: '2rem'
  },
  anchor: {
    textDecoration: 'none'
  }
}));

const ProjectCards = ({ repos }) => {
  console.log(repos);
  const classes = useStyles();
  return (
    <div className={classes.gridRoot}>
      {repos.length > 0
        ? repos.map((repo, index) => (
            <Grid key={index} item>
              <a
                className={classes.anchor}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card className={classes.projectsCardContainer}>
                  <CardContent>
                    <Typography
                      className={classes.projectTitle}
                      variant="h5"
                      component="h2"
                      gutterBottom
                    >
                      {repo.name}
                    </Typography>
                    <Typography
                      gutterBottom
                      color="textSecondary"
                      variant="h5"
                      component="h2"
                      className={classes.projectDescription}
                    >
                      {repo.description}
                    </Typography>
                    <div className={classes.projectCardActions}>
                      <span className={classes.brackets}>{'</>'}</span>
                      <span className={classes.progLanguage}>
                        {repo.language}
                      </span>

                      <Star className={classes.starIcon} />
                      <Typography
                        className={classes.starsCount}
                        gutterBottom
                        variant="h5"
                        component="h2"
                      >
                        {repo.stargazers_count}
                      </Typography>
                      <Icon className={classes.forkIcon} icon={forkIcon} />
                      <Typography gutterBottom variant="h5" component="h2">
                        {repo.forks}
                      </Typography>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </Grid>
          ))
        : ''}
    </div>
  );
};

export default ProjectCards;
