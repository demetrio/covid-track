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

  const data = [
    {
      type: 'Infected',
      data: confirmed.value,
      text: 'Number of active from COVID-19',
    },
    {
      type: 'Recovered',
      data: recovered.value,
      text: 'Number of recoveries from COVID-19',
    },
    {
      type: 'Death',
      data: deaths.value,
      text: 'Number of deaths caused by COVID-19',
    },
  ];

  return (
    <Container>
      <Grid container spacing={5} justify="center">
        {data.map(({ type, data, text }) => (
          <StyledGrid
            key={data}
            type={type}
            item
            component={Card}
            xs={12}
            md={3}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                {type}
              </Typography>
              <Typography varaint="h5">
                <CountUp start={0} end={data} duration={1.5} separator="," />
              </Typography>
              <Typography varaint="body2">{text}</Typography>
              <Typography
                align="right"
                variant="overline"
                display="block"
                color="textSecondary">
                Last Update {getFormattedDate(new Date(lastUpdate))}
              </Typography>
            </CardContent>
          </StyledGrid>
        ))}
      </Grid>
    </Container>
  );
};

export default Cards;
