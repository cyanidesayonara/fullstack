import React from 'react'
import Country from './Country'

const List = ({ countries, showCountry }) => {
  if (countries.length > 10) {
    return (
      <div>
        <p>
          too many matches, specify another filter
        </p>
      </div>
    )
  }
  else if (countries.length > 1) {
    return (
      <div>
        { countries.map(country =>
          <p key={ country.name } onClick={ showCountry(country.name)}>
            { country.name }
          </p>
        )}
      </div>
    )
  }
  else {
    return (
      <ul>
        { countries.map(country =>
          <Country 
          name={ country.name }
          nativeName={ country.nativeName }
          capital={ country.capital }
          population={ country.population }
          flag={ country.flag }
          />
        )}
      </ul>
    )
  }
}

export default List