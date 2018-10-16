import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko1 = (props) => {
  return (
    <div>
      <p>{props.unicafe.otsikko1}</p>
    </div>
  )
}

const Otsikko2 = (props) => {
  return (
    <div>
      <p>{props.unicafe.otsikko2}</p>
    </div>
  )
}

const App = () => {
  const unicafe = {
    otsikko1: "anna palautetta",
    otsikko2: "statistiikka",
  }

  return (
    <div>
      <Otsikko1 unicafe={unicafe} />
      <Otsikko2 unicafe={unicafe} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)