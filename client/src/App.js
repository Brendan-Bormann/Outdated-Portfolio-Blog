import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Link } from "react-router-dom";
import { Switch } from "react-router-dom";

import AppContainer from './App.RouteChange';

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

// Contact //
import Contact from './Components/Contact/Contact';

class App extends Component {

  state = {
    currentPage: "Hello"
  }

  changePage = async (page) => {
    await this.setState({ 'currentPage': page });
  }

  render() {
    return (
      <div className="App">
      <Router>
        <div>
          <Navbar page={this.state.currentPage} />
          <AppContainer changePage={this.changePage}>
            <Switch>
              <Route path="/blog-write" component={BlogWriter} />
              <Route path="/blog-edit/:id" component={BlogEdit} />
              <Route path="/blog/:id" component={BlogPage} />
              <Route path="/blog-list" component={BlogList} />

              <Route path="/portfolio" component={Portfolio} />
              <Route path="/github" component={RepoList} />
              <Route path="/contact" component={Contact} />

              <Route exact path="/" component={Home} />
              <Route path="*" component={NoMatch} />
            </Switch>
          </AppContainer>
          <Footer />
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
