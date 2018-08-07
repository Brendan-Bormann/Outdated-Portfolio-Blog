import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {

  state = {}

  render() {
    return (
      <div className="Navbar">
        <h1 className="Navbar-Title">Brendan Bormann</h1>
        <div className="Navbar-Links">
            <Link className="waves-effect waves-light btn btn-flat white nav-links" to={"/"}>Home</Link>
            <Link className="waves-effect waves-light btn btn-flat white nav-links" to={"/portfolio"}>Portfolio</Link>
            <Link className="waves-effect waves-light btn btn-flat white nav-links" to={"/github"}>My Work</Link>
            <Link className="waves-effect waves-light btn btn-flat white nav-links" to={"/blog-list"}>Blogs</Link>
        </div>
        <hr />
      </div>
    );
  }
}

export default Navbar;