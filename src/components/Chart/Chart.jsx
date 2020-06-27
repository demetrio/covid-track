import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import styles from './Chart.modules.css';
import { Line, Bar } from 'react-chartjs-2';

const Chart = () => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchAPI();
  });

  return <div>This is a Chart</div>;
};

export default Chart;
