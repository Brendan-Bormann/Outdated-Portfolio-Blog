import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


class Navbar extends Component {

  state = {
      animationClass: "animated fadeInRight",
      currentPage: 'Welcome',
      propPage: 'h'
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

//   myCurrentPage = async () => {
//     var myPage = this.pageFinder(this.props.page);

//     await this.changePage(myPage);

//     return this.state.currentPage;
//   }

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
      <div className="Navbar">
        <Link className="clear-style" to="/"><h1 className="Navbar-Title">Brendan Bormann</h1></Link>
        <div className="Navbar-Links">
            <Link className="waves-effect waves-light btn btn-flat white nav-links" to={"/"} >Home</Link>
            <Link className="waves-effect waves-light btn btn-flat white nav-links" to={"/portfolio"} >Portfolio</Link>
            <Link className="waves-effect waves-light btn btn-flat white nav-links" to={"/github"} >GitHub</Link>
            <Link className="waves-effect waves-light btn btn-flat white nav-links" to={"/blog-list"} >Blogs</Link>
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