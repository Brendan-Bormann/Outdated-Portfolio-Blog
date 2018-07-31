import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import './Portfolio.css';

class Portfolio extends Component {

  state = {}

  render() {
    return (
      <div className="Portfolio">
        <h2>Portfolio</h2>
        <hr />
        <p>Welcome to my Portfolio!</p>
      </div>
    );
  }
}

export default Portfolio;