import React, { Component } from 'react';

import Persons from './Persons'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      persons: [{
        "first_name": "Abbi",
        "last_name": "Maud"
      }, {
        "first_name": "Tabatha",
        "last_name": "Pattingson"
      }, {
        "first_name": "Sayers",
        "last_name": "Boyde"
      }, {
        "first_name": "Avrit",
        "last_name": "Tixier"
      }, {
        "first_name": "Percival",
        "last_name": "Arnau"
      }, {
        "first_name": "Sigismond",
        "last_name": "Wase"
      }, {
        "first_name": "Harman",
        "last_name": "Bert"
      }, {
        "first_name": "Lind",
        "last_name": "Hargroves"
      }, {
        "first_name": "Monique",
        "last_name": "Ruffles"
      }, {
        "first_name": "Francklyn",
        "last_name": "Crumpton"
      }],
      searchString: '',
      sortBy:'first_name',
    }
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  byNames = (ele) => {
    const normFirstName = ele.first_name.toLowerCase()
    const normLastName = ele.last_name.toLowerCase()
    const normSearchString = this.state.searchString.toLowerCase()
    
    return normFirstName.includes(normSearchString) || normLastName.includes(normSearchString)
  }

  byColumns = (a, b) => {
    return a[this.state.sortBy] > b[this.state.sortBy] ? 1 : -1
  }

  render() {
    return (
      <div>
       <input type="text" name="searchString" value={this.state.searchString} onChange={this.handleChange}/>
       <select name='sortBy' value={this.state.sortBy} onChange={this.handleChange}>
        <option value='first_name'>First Name</option>
        <option value='last_name'>Last Name</option>
       </select>
       <Persons persons={this.state.persons.filter(this.byNames).sort(this.byColumns)} />
      </div>
    );
  }
}

export default App;
