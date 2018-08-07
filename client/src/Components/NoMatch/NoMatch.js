import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NoMatch.css';

class NoMatch extends Component {

  state = {}

  render() {
    return (
      <div className="NoMatch">
        <h2 className="PageTitle">404 Error</h2>
        <hr />
        <p>Seems like you're lost!</p>
        <br />
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default NoMatch;