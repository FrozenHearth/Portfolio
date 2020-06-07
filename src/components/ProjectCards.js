import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const n = 9;

const useStyles = makeStyles(theme => ({
  gridRoot: {
    marginTop: '1rem',
    display: 'flex',
    flexWrap: 'wrap'
  },
  projectsCardContainer: {
    boxShadow: 'rgba(0, 0, 0, 0.11) 0px 1px 6px 0px',
    width: '37.3rem',
    marginRight: '2rem',
    marginBottom: '2rem',
    borderRadius: 0
  },
  projectTitle: {
    fontSize: '1.6rem',
    fontWeight: 700,
    marginTop: '1rem',
    marginBottom: '1.5rem'
  }
}));

const ProjectCards = () => {
  const classes = useStyles();
  return (
    <div className={classes.gridRoot}>
      {n === 9
        ? [...Array(n)].map((_, index) => (
            <Grid key={index} item>
              <Card className={classes.projectsCardContainer}>
                <CardContent>
                  <Typography
                    className={classes.projectTitle}
                    variant="h5"
                    component="h2"
                    gutterBottom
                  >
                    TheMovieDB
                  </Typography>
                  <Typography color="textSecondary" variant="h5" component="h2">
                    A SPA(single-page app) repository of movies, people & TV
                    shows from TheMovieDB API.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Icon</Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        : ''}
    </div>
  );
};

export default ProjectCards;
