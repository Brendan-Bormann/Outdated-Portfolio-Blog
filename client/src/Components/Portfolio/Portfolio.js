import React, { Component } from 'react';
import './Portfolio.css';

import ProjectList from './Projects/ProjectList';

class Portfolio extends Component {

  state = {}

  render() {
    return (
      <div className="Portfolio">
        <p>Welcome to my Portfolio!</p>
        <br />
        <ProjectList />
      </div>
    );
  }
}

export default Portfolio;