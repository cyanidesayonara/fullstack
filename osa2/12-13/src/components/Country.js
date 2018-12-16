import React from 'react'

const Country = ({ name, nativeName, capital, population, flag, detail }) => {
  return (
    <li key={ name }> 
      <h1>
        { name } { nativeName }
      </h1>
      <p>
        capital: { capital }
      </p>
      <p>
        population: { population }
      </p>
      <img src={ flag } />
    </li>
  )
}

export default Country        
        