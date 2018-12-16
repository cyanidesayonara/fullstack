import React from 'react';

const Osa = ({ id, nimi, tehtavia }) => {
  return (
    <li>
      { nimi } { tehtavia }
    </li>
  )
}

export default Osa