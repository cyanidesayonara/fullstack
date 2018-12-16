import React from 'react';
import Number from './Number.js'

const NumberTable = ({ persons }) => {
  return (
    <table>
      <tbody>
        {
          persons.map(person =>
            <Number key={ person.name } name={ person.name } number={ person.number } />
          )
        }
      </tbody>
    </table>
  )
}

export default NumberTable