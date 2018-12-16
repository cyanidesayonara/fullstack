import React from 'react';
import Otsikko from './Otsikko.js';
import Sisalto from './Sisalto.js';
import Yhteensa from './Yhteensa.js';

const Kurssi = ({ nimi, osat }) => {
  return (
    <div>
      <Otsikko nimi={ nimi } />
      <Sisalto osat={ osat } />
      <Yhteensa osat={ osat } />
    </div>
  )
}

export default Kurssi