import React from 'react'
import ReactDOM from 'react-dom'

const Header = (text) => {
  return (
    <div>
      <h3>{text}</h3>
    </div>
  )
}

const Button = (clickHandler, text) => {
  return (
    <div>
      <button>
        {props.unicafe.nappi1}
      </button>
      <button>
        {props.unicafe.nappi2}
      </button>
      <button>
        {props.unicafe.nappi3}
      </button> 
    </div>
  )
}

const Statistcs = (text, number) => {
  return (
    <div>
      <p>{text} {number}</p>
      <p>{text} {number}</p>
      <p>{text} {number}</p>
    </div>
  )  
}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0
    }
  }

  unicafe = {
    otsikko1: "anna palautetta",
    otsikko2: "statistiikka",
    nappi1: "hyvä",
    nappi2: "neutraali",
    nappi3: "huono",
  }

  render() {
    return (
      <div>
        <Otsikko1 unicafe={this.unicafe} />
        <Napit unicafe={this.unicafe} />
        <Otsikko2 unicafe={this.unicafe} />
        <Statistiikka unicafe={this.unicafe} />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)