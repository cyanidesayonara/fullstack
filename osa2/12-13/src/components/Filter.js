import React from 'react'

const Filter = ({ text, onChange, value }) => {
  return (
    <div>
      { text } <input onChange={ onChange } value={ value } />
    </div>
  )
}

export default Filter