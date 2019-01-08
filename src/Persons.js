import React from 'react'

import Person from './Person'

const Persons = ({persons}) => 
  <table>
    {
      persons.map((person, id) =>
        <Person key={id} person={person} />
      )
    }
  </table>

  export default Persons