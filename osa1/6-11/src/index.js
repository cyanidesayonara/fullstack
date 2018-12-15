import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Header = ({ text }) => {
  return (
    <div>
      <h3>{ text }</h3>
    </div>
  )
}
const Button = ({ handleClick, text }) => {
  return (
    <button onClick={ handleClick }>
      { text }
    </button>
  )
}

const Statistics = ({ hyva, neutraali, huono, keskiarvo, positiivisia }) => {
  if (hyva + neutraali + huono > 0) {
    return (
      <table>
        <tbody>
          <Statistic text={ 'hyvä' } statistic={ hyva } />
          <Statistic text={ 'neutraali' } statistic={ neutraali } />
          <Statistic text={ 'huono' } statistic={ huono } />
          <Statistic text={ 'keskiarvo' } statistic={ keskiarvo } />
          <Statistic text={ 'positiivisia' } statistic={ positiivisia } sign={ "%" } />
        </tbody>
      </table>
    )
  }
  return (
    <div>
      <p>ei yhtään palautetta annettu</p>
    </div>
  )
}

const Statistic = ({ text, statistic, sign }) => {
  return (
    <tr>
      <td>{ text }</td>
      <td>{ statistic } { sign }</td>
    </tr>
  )
}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0,
    }
  }

  render() {
    const addVote = ( statistic ) => {
      const handler = () => {
        this.setState({ [ statistic ]: this.state[statistic] + 1})
      }
      return handler
    }

    const average = () => {
      if (this.state.hyva + this.state.neutraali + this.state.huono > 0) {
        return ((this.state.hyva + (this.state.huono * -1)) / (this.state.hyva + this.state.huono + this.state.neutraali)).toFixed(1)
      } else {
        return 0
      }
    }
    const positive = () => {
      if (this.state.hyva + this.state.neutraali + this.state.huono > 0) {
        return (this.state.hyva / (this.state.hyva + this.state.neutraali + this.state.huono) * 100).toFixed(1)
      } else {
        return 0
      }
    }

    return (
      <div>
        <Header text={ 'anna palautetta' } />
        <Button handleClick={ addVote('hyva')} text={ 'hyvä' }  />
        <Button handleClick={ addVote('neutraali') } text={ 'neutraali' } />
        <Button handleClick={ addVote('huono') } text={ 'huono' } />
        <Header text={ 'statistiikka' } />
        <Statistics hyva={ this.state.hyva } 
        neutraali={ this.state.neutraali } 
        huono={ this.state.huono } 
        keskiarvo={ average }
        positiivisia = { positive }
        />
      </div>
    )  
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)