import React, { useState, useEffect } from 'react';
import { NativeSelect } from '@material-ui/core';

import { fetchCountries } from '../../api';

import { Form } from './CountryPicker.styles';

const Countries = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);

  if (!countries) {
    return null;
  }

  return (
    <Form>
      <NativeSelect
        defaultValue=""
        onChange={e => handleCountryChange(e.target.value)}>
        <option value="">Global</option>
        {countries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </Form>
  );
};

export default Countries;
