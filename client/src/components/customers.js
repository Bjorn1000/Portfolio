import React, { Component } from 'react';
import './customers.css';

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      programs: []
    };
  }

  componentDidMount() {
    fetch('/api/programs')
      .then(res => res.json())
      .then(programs => this.setState({programs}, () => console.log('Customers fetched...', programs)));
  }

  render() {
    return (
      <div>
        <h2>Customers</h2>
        <ul>
        {this.state.programs.map(program => 
          <li key={program.id}>{program.name} {program.language}</li>
        )}
        </ul>
      </div>
    );
  }
}

export default Customers;
