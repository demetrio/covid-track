import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';

import { Container, StyledGrid, Load } from './Cards.styles';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return <Load>Loading...</Load>;
  }

  return (
    <Container>
      <Grid container spacing={3} justify="center">
        <StyledGrid infected item component={Card} xs={12} md={3}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography varaint="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={1.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography varaint="body2">
              Number of active cases of COVID-19.
            </Typography>
          </CardContent>
        </StyledGrid>
        <StyledGrid recovered item component={Card} xs={12} md={3}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography varaint="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={1.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography varaint="body2">
              Number of recoveries from COVID-19.
            </Typography>
          </CardContent>
        </StyledGrid>
        <StyledGrid item component={Card} xs={12} md={3}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography varaint="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={1.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography varaint="body2">
              Number of deaths caused by COVID-19.
            </Typography>
          </CardContent>
        </StyledGrid>
      </Grid>
    </Container>
  );
};

export default Cards;
