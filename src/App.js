import React, { useState, useEffect } from 'react';
import { Cards, Chart, CountryPicker } from './components';
import { Container } from './App.styles';

import { fetchData } from './api/';

const App = () => {
  const [data, setData] = useState({});
  const [country, setCountry] = useState('');

  useEffect(() => {
    const getData = async () => {
      setData(await fetchData());
    };
    getData();
  }, []);

  const handleCountryChange = async country => {
    const data = await fetchData(country);
    setData(data);
    setCountry(country);
  };

  return (
    <Container>
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </Container>
  );
};

export default App;
