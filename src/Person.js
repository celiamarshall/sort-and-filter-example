import React from 'react'

const Person = ({ person: { first_name, last_name }}) =>
  <tr>
    <td>{first_name}</td>
    <td>{last_name}</td>
  </tr>

export default Person