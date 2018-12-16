import React from 'react';
import axios from 'axios'
import Filter from './components/Filter'
import List from './components/List'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      filter: ''
    }
  }

  componentDidMount() {
    axios.get("https://restcountries.eu/rest/v2/all").then(response => {
      this.setState({ countries: response.data })
    })
  }

  handleInputChange = (prop) => (event) => {
    let newState = {}
    newState[prop] = event.target.value
    this.setState(newState)
  }

  showCountry = (name) => () => this.setState({ filter: name })


  render() {
    const countries = this.state.countries.filter(country => country.name.toLowerCase().includes(this.state.filter.toLowerCase()))
    return (
      <div>
        <Filter text="find countries:" onChange={ this.handleInputChange("filter") } value={ this.state.filter } />
        <List countries={ countries } showCountry={ this.showCountry } />
      </div>
    )
  }
}

export default App;
