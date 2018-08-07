import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Switch } from "react-router-dom";
// import axios from 'axios';

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

// navbar //
import Navbar from './Components/Navbar/Navbar';

class App extends Component {

  state = {
    currentPage: "Hello"
  }

  changePage = async (page) => {
    console.log(this.state.currentPage);
    await this.setState({ 'currentPage': page });
    console.log(this.state.currentPage);
  }

  render() {
    return (
      <div className="App">
      <Router>
        <div>
          <Navbar page={this.state.currentPage} />
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
