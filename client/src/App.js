import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// eslint-disable-next-line
import { Link } from "react-router-dom";
import axios from 'axios';

import './App.css';

import Home from './Components/Home/Home';
import BlogList from './Components/Blog/BlogList/BlogList';
import BlogWriter from './Components/Blog/BlogWriter/BlogWriter';
import BlogPage from './Components/Blog/BlogPage/BlogPage';
import BlogEdit from './Components/Blog/BlogEdit/BlogEdit';

class App extends Component {

  state = {
    currentPage: "/"
  }

  getData = (that) => {
    axios.get('/back')
    .then(function (response) {
      that.setState({"text": response.data.info});
    })
  }

  render() {
    return (
      <div className="Navbar">
      {/* <nav className="nav">
        <h2>Brendan Bormann</h2>
        <hr />
      </nav> */}
      <Router>
        <div>
          
          <Route exact path="/blog-write" component={BlogWriter} />
          <Route exact path="/blog-edit/:id" component={BlogEdit} />
          <Route exact path="/blog/:id" component={BlogPage} />
          <Route exact path="/blog-list" component={BlogList} />
          {/* <Link to="/contact">Contact</Link>
          <Link to={`${props.match.url}/learn`} className="btn btn-default">Hello</Link>

          <nav>
            <li className={window.location.pathname === "/" ? "active" : ""}>
              <Link to="/">Home</Link>
            </li>
          </nav> */}
          <Route exact path="/" component={Home} />
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
