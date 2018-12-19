import React from 'react';
import Number from './Number.js'

const NumberTable = ({ persons, handleRemove }) => {
  return (
    <table>
      <tbody>
        {
          persons.map(person =>
            <Number 
              key={ person.name } 
              name={ person.name } 
              number={ person.number }
              handleRemove={ handleRemove((person)) }
            />
          )
        }
      </tbody>
    </table>
  )
}

export default NumberTable