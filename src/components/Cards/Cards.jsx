import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';

import { Container, StyledGrid, Load } from './Cards.styles';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return <Load>Loading...</Load>;
  }

  function getFormattedDate(date) {
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');

    return month + '/' + day + '/' + year;
  }

  return (
    <Container>
      <Grid container spacing={5} justify="center">
        <StyledGrid infected="true" item component={Card} xs={12} md={3}>
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
            <Typography varaint="body2">
              Number of active cases of COVID-19.
            </Typography>
            <Typography
              align="right"
              variant="overline"
              display="block"
              color="textSecondary">
              Last Update {getFormattedDate(new Date(lastUpdate))}
            </Typography>
          </CardContent>
        </StyledGrid>
        <StyledGrid recovered="true" item component={Card} xs={12} md={3}>
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
            <Typography varaint="body2">
              Number of recoveries from COVID-19.
            </Typography>
            <Typography
              align="right"
              variant="overline"
              display="block"
              color="textSecondary">
              Last Update {getFormattedDate(new Date(lastUpdate))}
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
            <Typography varaint="body2">
              Number of deaths caused by COVID-19.
            </Typography>
            <Typography
              align="right"
              variant="overline"
              display="block"
              color="textSecondary">
              Last Update {getFormattedDate(new Date(lastUpdate))}
            </Typography>
          </CardContent>
        </StyledGrid>
      </Grid>
    </Container>
  );
};

export default Cards;
