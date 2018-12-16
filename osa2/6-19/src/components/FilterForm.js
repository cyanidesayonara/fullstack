import React from 'react';

const FilterForm = ({ handleNameChange, nameValue }) => {
  return (
    <div>
        rajaa näytettäviä: <input value={ nameValue } onChange={ handleNameChange } />
    </div>         
  )
}

export default FilterForm