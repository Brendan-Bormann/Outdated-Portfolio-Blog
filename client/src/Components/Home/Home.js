import React, { Component } from 'react';

import './Home.css';

class Home extends Component {

  state = {
    text: "hi"
  }

  

  render() {
    return (
      <div className="Home">
        <p>Welcome to my personal site!</p>
      </div>
    );
  }
}

export default Home;