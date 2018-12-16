import React from 'react';

const Numero = ({ name, number }) => {
  return (
    <tr>
      <td>
        { name }
      </td>
      <td>
        { number }
      </td>
    </tr>
  )
}

export default Numero