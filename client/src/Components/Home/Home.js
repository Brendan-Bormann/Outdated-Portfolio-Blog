import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import './Home.css';

class Home extends Component {

  state = {
    text: "hi"
  }

  getData = (that) => {
    axios.get('/api/get/data')
      .then(function (response) {
        that.setState({
          "text": response.data.info
        });
      })
  }

  render() {
    return (
      <div className="Home">
        <h1>Brendan Bormann</h1>
        <hr />
        <p>Welcome to my personal site!</p>
        <Link to="/blog-list">Blog List</Link>
      </div>
    );
  }
}

export default Home;