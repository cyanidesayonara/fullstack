import React from 'react';

const Yhteensa = ({ osat }) => {
  return (
    <p>
      yhteensa { osat.reduce((acc, osa) => acc + osa.tehtavia, 0) } tehtävää
    </p>
  )
}

export default Yhteensa