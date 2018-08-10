import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {

  state = {
    text: "hi"
  }

  

  render() {
    return (
      <div className="Home">
        <p className="animated fadeIn">
        Hello. My name is Brendan Bormann. I'm a web developer, a hobbyist game developer, and sprite artist.  I am very well versed in programming, including knowledge of many different languages, and frameworks. My main focus is full-stack development. I spend most of my time building websites from the ground up, maintaining existing sites, and using a wide range of technologies to ait this process.
        <br />
        <br />
        <h4 className="Home-Topic animated fadeInRight">Experience</h4>
        <hr />
        I have experience working anywhere in the development stack. I really shine in CSS, Node, and JavaScript in general. I build out every aspect of my personal projects and have no trouble being both creative and artistic, or logical and efficient.
        <br />
        <br />
        Currently, I am an Assitant Teacher for an intro to web development course. I am looking to find a professional position working as a programmer for a company.
        <br />
        <br />
        <h4 className="Home-Topic animated fadeInRight">Hobbies</h4>
        <hr />
        For fun, I build games using Unity3D's Engine. I am a self-taught C# programmer and have learned Unity individually. I also create my own artwork and animations for these projects. I also play the mandolin, ukulele, and guitar. One day I hope to create my own soundtracks for my games.
        <br />
        <br />
        <h4 className="Home-Topic animated fadeInRight">Further Info</h4>
        <hr />
        Feel free to get in touch with me. I'd love to hear your input, feedback, recommendations, etc. Head over to contact to get my information, or check out my github projects! Feel free to check my blog to find out what I've been doing, and what I've been spending my time on!
        <br />
        <br />
        </p>
        <h4 className="Home-Topic animated fadeInRight">See More</h4>
        <hr />
        <div className="Home-Buttons">
            <Link className="waves-effect waves-light btn btn-flat white nav-links" to={"/portfolio"} >Portfolio</Link>
            <Link className="waves-effect waves-light btn btn-flat white nav-links" to={"/github"} >GitHub</Link>
            <Link className="waves-effect waves-light btn btn-flat white nav-links" to={"/blog-list"} >Blogs</Link>
            <Link className="waves-effect waves-light btn btn-flat white nav-links" to={"/contact"} >Contact</Link>
        </div>
      </div>
    );
  }
}

export default Home;