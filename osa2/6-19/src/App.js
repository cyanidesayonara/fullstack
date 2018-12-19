import React from 'react';
import Header from './components/Header.js'
import Notification from './components/Notification.js'
import AddNewForm from './components/AddNewForm.js'
import FilterForm from './components/FilterForm.js'
import NumberTable from './components/NumberTable.js'
import personService from './services/persons.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: '',
      notification: null
    }
  }

  componentDidMount() {
    personService
      .getAll()
      .then(persons => {
        this.setState({ persons: persons })
      })
  }

  addName = ( event ) => {
    event.preventDefault()
    let newPerson = {}
    const person = this.state.persons.find(p => p.name === this.state.newName)
    if (person) {
      if (window.confirm(`${person.name} on jo luettelossa, korvataanko vanha numero uudella?`)) {
        newPerson = { ...person, number: this.state.newNumber }
        personService
          .update(person.id, newPerson)
          .then(updatedPerson => {
            const persons = this.state.persons.filter(p => p.id !== updatedPerson.id)
            this.setState({
              persons: persons.concat(updatedPerson),
              newName: '',
              newNumber: '',
              notification: `päivitettiin ${updatedPerson.name}`
            })
            setTimeout(() => {
              this.setState({
                notification: null
              })
            }, 3000)
          })
          .catch(error => {
            newPerson = {
              name: this.state.newName,
              number: this.state.newNumber
            }
            personService
              .create(newPerson)
              .then(newPerson => {
                const persons = this.state.persons.filter(p => p.id !== newPerson.id)
                this.setState({
                  persons: this.state.persons.concat(newPerson),
                  newName: '',
                  newNumber: '',
                  notification: `päivitettiin ${newPerson.name}`
                })
                setTimeout(() => {
                  this.setState({
                    notification: null
                  })
                }, 3000)
              })
          })
      }
    }
    else {
      newPerson = {
        name: this.state.newName,
        number: this.state.newNumber
      }
      personService
        .create(newPerson)
        .then(newPerson => {
          this.setState({
            persons: this.state.persons.concat(newPerson),
            newName: '',
            newNumber: '',
            notification: `lisättiin ${newPerson.name}`
          })
          setTimeout(() => {
            this.setState({
              notification: null
            })
          }, 3000)
        })
    }
  }

  handleRemove = ( person ) => {
    return () => {
      if (window.confirm(`Poistetaanko ${person.name}`)) {
        personService
          .remove(person.id)
          .then(removedPerson => {
            const persons = this.state.persons.filter(p => p.id !== person.id)
            this.setState({
              persons: persons,
              newName: '',
              newNumber: '',
              notification: `poistettiin ${person.name}`
            })
            setTimeout(() => {
              this.setState({
                notification: null
              })
            }, 3000)
          })
          .catch(error => {
            const persons = this.state.persons.filter(p => p.id !== person.id)
            this.setState({
              persons: persons,
              newName: '',
              newNumber: '',
              notification: `henkilön ${person.name} poisto epäonnistui`
            })
            setTimeout(() => {
              this.setState({
                notification: null
              })
            }, 3000)
          })
      }
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
    const shownPersons = this.state.persons.filter(p => p.name.toLowerCase().includes(this.state.filter.toLowerCase()))
    return (
      <div>
        <Header text='Puhelinluettelo' />
        <Notification message={ this.state.notification } />
        <FilterForm 
          handleNameChange = { this.handleInputChange("filter") }
          nameValue={ this.state.filter }
        />
        <Header text='Lisää uusi / muuta olemassaolevan numeroa' />
        <AddNewForm
          handleSubmit={ this.addName }
          handleNameChange = { this.handleInputChange("newName") }
          handleNumberChange={ this.handleInputChange("newNumber") }
          nameValue = { this.state.newName }
          numberValue = { this.state.newNumber }
        />
        <Header text='Numerot' />
        <NumberTable persons={ shownPersons } handleRemove={ this.handleRemove } />
      </div>
    )
  }
}

export default App
