import React, { Component } from 'react';
import './Portfolio.css';

import ProjectList from './Projects/ProjectList';

class Portfolio extends Component {

  state = {}

  render() {
    return (
      <div className="Portfolio">
        <h2 className="PageTitle">Portfolio</h2>
        <hr />
        <p>Welcome to my Portfolio!</p>
        <br />
        <ProjectList />
      </div>
    );
  }
}

export default Portfolio;