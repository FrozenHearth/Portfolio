import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import ProjectCards from './ProjectCards';
import axios from 'axios';

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

const getToken = async () => {
  try {
    const res = await axios.get(process.env.REACT_APP_PROD);
    return res.data.accessToken;
  } catch (err) {
    return console.log(err);
  }
};

const getRepos = token => {
  return axios
    .get('https://api.github.com/users/FrozenHearth/repos', {
      headers: {
        Authorization: `token ${token}`
      }
    })
    .then(res => {
      const filteredRepos = res.data.filter(
        repo => !repo.fork && repo.stargazers_count > 0 && !repo.private
      );
      return filteredRepos;
    });
};

const Projects = () => {
  const classes = useStyles();
  const [token, setAccessToken] = useState('');
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    getToken().then(accessToken => {
      setAccessToken(accessToken);
    });
  }, [token]);
  useEffect(() => {
    if (token) {
      getRepos(token).then(filteredRepos => {
        setRepos(filteredRepos);
      });
    }
  }, [token]);

  return (
    <Container id="scrollToProjects" size="md" className={classes.root}>
      <h1 className={classes.title}>Projects</h1>
      {repos.length > 0 ? <ProjectCards repos={repos} /> : ''}
    </Container>
  );
};

export default Projects;
