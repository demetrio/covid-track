import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import { Container } from './Chart.styles';

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchAPI();
  }, []);

  const LineDataset = [
    {
      data: dailyData.map(data => data.confirmed),
      label: 'Infected',
      borderColor: '#3333ff',
      fill: true,
      lineTension: 0.1,
      borderCapStyle: 'butt',
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(51,51,255,0.5)',
      pointBackgroundColor: '#3333ff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(51,51,255,0.5)',
      pointHoverBorderColor: 'rgba(51,51,255,0.5)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
    },
    {
      data: dailyData.map(data => data.deaths),
      label: 'Deaths',
      borderColor: 'red',
      backgroundColor: 'rgba(255, 0, 0, 0.5)',
      fill: true,
      lineTension: 0.1,
      borderCapStyle: 'butt',
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(255, 0, 0, 0.5)',
      pointBackgroundColor: 'red',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(255, 0, 0, 0.5)',
      pointHoverBorderColor: 'rgba(255, 0, 0, 0.5)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
    },
  ];

  const lineChart = dailyData[0] ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: LineDataset,
      }}
    />
  ) : null;

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ['Infected', 'Recovered', 'Deaths'],
        datasets: [
          {
            label: 'People',
            backgroundColor: [
              'rgba(0, 0, 255, 0.5)',
              'rgba(0, 255, 0, 0.5)',
              'rgba(255, 0, 0, 0.5)',
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : null;

  return <Container>{country ? barChart : lineChart}</Container>;
};

export default Chart;
