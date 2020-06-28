import React from 'react';
import { Cards, Chart, CountryPicker } from './components';
import { Container } from './App.styles';

import { fetchData } from './api/';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  };

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data });
  }

  handleCountryChange = async country => {
    const data = await fetchData(country);
    this.setState({ data, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <Container>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </Container>
    );
  }
}

export default App;
