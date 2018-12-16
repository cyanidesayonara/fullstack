import React from 'react';
import Header from './components/Header.js'
import AddNewForm from './components/AddNewForm.js'
import FilterForm from './components/FilterForm.js'
import NumberTable from './components/NumberTable.js'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Martti Tienari', number: '040-123456' },
        { name: 'Arto Järvinen', number: '040-123456' },
        { name: 'Lea Kutvonen', number: '040-123456' }
      ],
      newName: '',
      newNumber: '',
      filter: ''
    }
  }

  componentDidMount() {
    axios.get("http://localhost:3001/persons").then(response => {
      this.setState({ persons: response.data })
    })
  }

  addName = ( event ) => {
    event.preventDefault()
    const exists = this.state.persons.find(person => person.name === this.state.newName)
    if (!exists) {
      const person = {
        name: this.state.newName,
        number: this.state.newNumber
      }
      axios
        .post('http://localhost:3001/persons', person)
        .then(response => {
          const persons = this.state.persons.concat(person)
          this.setState({
            persons: persons,
            newName: '',
            newNumber: '',
          })
        })
    }
  }

  handleInputChange = ( prop ) => {
    return ( event ) => {
      let newState = {}
      newState[prop] = event.target.value
      this.setState(newState)
    }
  }

  render() {
    const shownPersons = this.state.persons.filter(person => person.name.toLowerCase().includes(this.state.filter.toLowerCase()))
    return (
      <div>
        <Header text='Puhelinluettelo' />
        <FilterForm 
          handleNameChange = { this.handleInputChange("filter") }
          nameValue={ this.state.filter }
        />
        <Header text='Lisää uusi' />
        <AddNewForm
          handleSubmit={ this.addName }
          handleNameChange = { this.handleInputChange("newName") }
          handleNumberChange={ this.handleInputChange("newNumber") }
          nameValue = { this.state.newName }
          numberValue = { this.state.newNumber }
        />
        <Header text='Numerot' />
        <NumberTable persons={ shownPersons } />
      </div>
    )
  }
}

export default App
