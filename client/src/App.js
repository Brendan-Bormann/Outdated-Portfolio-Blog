import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Switch } from "react-router-dom";
import axios from 'axios';

import './App.css';

// Landing Page //
import Home from './Components/Home/Home';

// Blog stuff //
import BlogList from './Components/Blog/BlogList/BlogList';
import BlogWriter from './Components/Blog/BlogWriter/BlogWriter';
import BlogPage from './Components/Blog/BlogPage/BlogPage';
import BlogEdit from './Components/Blog/BlogEdit/BlogEdit';

// Profile //
import Portfolio from './Components/Portfolio/Portfolio';

// git repos //
import RepoList from './Components/Portfolio/RepoList/RepoList';

// 404 page //
import NoMatch from './Components/NoMatch/NoMatch';

class App extends Component {

  state = {
    currentPage: "/"
  }

  getData = (that) => {
    axios.get('/back')
    .then(function (response) {
      console.log("k");
    })
  }

  componentDidMount() {
    this.getData(this);
  }

  render() {
    return (
      <div className="App">
      <Router>
        <div>
          <div className="App-Header">
            <div className="nav-links">
              <Link className="waves-effect waves-light btn white nav-links" to={"/"}>Home</Link>
              <Link className="waves-effect waves-light btn white nav-links" to={"/portfolio"}>Portfolio</Link>
              <Link className="waves-effect waves-light btn white nav-links" to={"/blog-list"}>Blogs</Link>
            </div>
            <hr />
          </div>
          <Switch>
            <Route path="/blog-write" component={BlogWriter} />
            <Route path="/blog-edit/:id" component={BlogEdit} />
            <Route path="/blog/:id" component={BlogPage} />
            <Route path="/blog-list" component={BlogList} />

            <Route path="/portfolio" component={Portfolio} />
            <Route path="/github" component={RepoList} />
            {/* <Link to="/contact">Contact</Link>
            <Link to={`${props.match.url}/learn`} className="btn btn-default">Hello</Link>

            <nav>
              <li className={window.location.pathname === "/" ? "active" : ""}>
                <Link to="/">Home</Link>
              </li>
            </nav> */}
            <Route exact path="/" component={Home} />
            <Route path="*" component={NoMatch} />
          </Switch>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
