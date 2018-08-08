import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NoMatch.css';

class NoMatch extends Component {

  state = {}

  render() {
    return (
      <div className="NoMatch">
        <p>Seems like you're lost!</p>
        <br />
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default NoMatch;