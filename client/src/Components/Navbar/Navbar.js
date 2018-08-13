import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from '../../utils/API';
import './Navbar.css';


class Navbar extends Component {

  state = {
      animationClass: "animated fadeIn",
      currentPage: 'Welcome',
      title: 'Brendan Bormann',
      propPage: '',
      keys: ''
  }

  storeKeys = event => {
    var keys = this.state.keys
    keys += event.key;

    keys = keys.slice(-5);

    if (keys === 'login') {
        this.login();
    }

    this.setState({ 'keys' : keys });
  }

  login = async () => {
    alert("Admin Log-In.");

    var user = prompt("Username");
    var pass = prompt("Password");

    await this.setState({
        'user': user,
        'pass': pass
    });

    API.login(this.state)
    .then(res=> {
        if (res.data.login === 'Successful') {
            this.setState({ 'title' : 'Admin' });
            alert('Hello Admin.');
        } else {
            alert('Invalid Log-In.');
        }
    })
    .catch(err => console.log(err));

    this.props.setAdmin();
}

  componentWillReceiveProps() {
      if (this.props.admin === true)
      {
          this.setState({ 'title' : 'Admin' });
      }
  }

  changePage = async page => {

    this.setState({ 'propPage': this.props.page });

    await this.setState({
        'animationClass': 'animated fadeOutLeft'
    });

    setTimeout(() => {
        this.setState({
            'currentPage': page,
            'animationClass': 'animated fadeInRight'
        });
    }, 250);

  }

  pageFinder = page => {
    var pageAdjusted;

    switch(page) {
        case "blog-write":
            pageAdjusted = "Home";
            break;
        case "blog-edit":
            pageAdjusted = "Edit";
            break;
        case "blog":
            pageAdjusted = "";
            break;
        case "blog-list":
            pageAdjusted = "My Blogs";
            break;
        case "portfolio":
            pageAdjusted = "My Portfolio";
            break;
        case "github":
            pageAdjusted = "My GitHub";
            break;
        case "contact":
            pageAdjusted = "Contact Me";
            break;
        case "home":
            pageAdjusted = "Home";
            break;
        default:
            pageAdjusted = "Welcome";
            break;
    }
    if (this.props.page !== this.state.propPage)
    {
        this.changePage(pageAdjusted);
    }
    
  }

  render() {
    return (
      <div className="Navbar" onKeyDown={this.storeKeys}>
        <Link className="clear-style" to="/"><h1 key={this.state.title} className="Navbar-Title animated fadeIn">{this.state.title}</h1></Link>
        <div className="Navbar-Links">
            <Link className="waves-effect waves-light btn btn-flat white nav-links" to={"/"} >Home</Link>
            <Link className="waves-effect waves-light btn btn-flat white nav-links" to={"/portfolio"} >Portfolio</Link>
            <Link className="waves-effect waves-light btn btn-flat white nav-links" to={"/github"} >GitHub</Link>
            <Link className="waves-effect waves-light btn btn-flat white nav-links" to={"/blog-list"} state={this.state.title} >Blogs</Link>
            <Link className="waves-effect waves-light btn btn-flat white nav-links" to={"/contact"} >Contact</Link>
        </div>
        <hr />
        <div className="Navbar-PageTitle">
        <h2 key={this.pageFinder(this.props.page)} className={"PageTitle " + this.state.animationClass}>{this.state.currentPage}</h2>
        <hr />
        </div>
      </div>
    );
  }
}

export default Navbar;