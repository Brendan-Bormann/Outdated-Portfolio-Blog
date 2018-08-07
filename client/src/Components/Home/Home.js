import React, { Component } from 'react';

import './Home.css';

class Home extends Component {

  state = {
    text: "hi"
  }

  render() {
    return (
      <div className="Home">
        <h2 className="PageTitle">Welcome</h2>
        <hr />
        <p>Welcome to my personal site!</p>
      </div>
    );
  }
}

export default Home;