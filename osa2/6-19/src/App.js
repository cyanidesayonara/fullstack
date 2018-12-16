import React from 'react';
import Header from './components/Header.js'
import Numero from './components/Numero.js'
import AddNewForm from './components/AddNewForm.js'

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

  setNewName = ( event ) => {
    event.preventDefault()
    let exists = false
    this.state.persons.map(person => {
      if (person.name === this.state.newName) {
        exists = true
      }
      return exists
    })
    if (!exists) {
      this.setState(prevState => ({
        persons: [...prevState.persons, {
          name: this.state.newName,
          number: this.state.newNumber
        }]
      }))
    }
  }

  handleInputChange = (prop) => ( event ) => {
    let newState = {}
    newState[prop] = event.target.value
    this.setState(newState)
  }

  render() {
    return (
      <div>
        <Header text='Puhelinluettelo' />
        <Header text='Lisää uusi' />
        <AddNewForm
          handleSubmit={ this.setNewName }
          handleNameChange = { this.handleInputChange("newName") }
          handleNumberChange={ this.handleInputChange("newNumber") }
          nameValue = { this.state.newName }
          numberValue = { this.state.newNumber }
        />
        <Header text='Numerot' />
        <table>
          <tbody>
            {
              this.state.persons.map(person =>
                <Numero key={ person.name } name={ person.name } number={ person.number } />
              )
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default App
