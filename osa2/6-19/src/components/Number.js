import React from 'react';

const Number = ({ name, number, handleRemove }) => {
  return (
    <tr>
      <td>
        { name }
      </td>
      <td>
        { number }
      </td>
      <td>
        <button onClick={ handleRemove }>
          poista
        </button>
      </td>
    </tr>
  )
}

export default Number