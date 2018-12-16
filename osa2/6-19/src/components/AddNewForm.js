import React from 'react';

const AddNewForm = ({ handleSubmit, handleNameChange, handleNumberChange, nameValue, numberValue }) => {
  return (
    <form onSubmit={ handleSubmit }>
      <div>
        nimi: <input value={ nameValue } onChange={ handleNameChange } />
      </div>
      <div>
        numero: <input value={ numberValue } onChange={ handleNumberChange } />
      </div>          
      <div>
        <button type="submit">lisää</button>
      </div>
    </form>
  )
}

export default AddNewForm