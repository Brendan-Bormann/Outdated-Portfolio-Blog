import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {

  state = {
    text: "hi"
  }

  

  render() {
    return (
      <div className="Home animated fadeIn">
        <p className="animated fadeInLeft">
        Hello. My name is Brendan Bormann. I'm a web developer, a hobbyist game developer, and sprite artist.  I am very well versed in programming, including knowledge of many different languages, and frameworks. My main focus is full-stack development. I spend most of my time building websites from the ground up, maintaining existing sites, and using a wide range of technologies to ait this process.</p>

        <h4 className="Home-Topic animated fadeInLeft">Experience</h4>
        <hr />

        <p className="animated fadeInRight">
        I have experience working anywhere in the development stack. I really shine in CSS, Node, and JavaScript in general. I build out every aspect of my personal projects and have no trouble being both creative and artistic, or logical and efficient.</p>

        <p className="animated fadeInRight">
        Currently, I am an Assitant Teacher for an intro to web development course. I am looking to find a professional position working as a programmer for a company.</p>

        <h4 className="Home-Topic animated fadeInLeft">Hobbies</h4>
        <hr />
        <p className="animated fadeInRight">
        For fun, I build games using Unity3D's Engine. I am a self-taught C# programmer and have learned Unity individually. I also create my own artwork and animations for these projects. I also play the mandolin, ukulele, and guitar. One day I hope to create my own soundtracks for my games.</p>

        <h4 className="Home-Topic animated fadeInLeft">Further Info</h4>
        <hr />
        <p className="animated fadeInRight">
        Feel free to get in touch with me. I'd love to hear your input, feedback, recommendations, etc. Head over to contact to get my information, or check out my github projects! Feel free to check my blog to find out what I've been doing, and what I've been spending my time on!</p>

        <h4 className="Home-Topic animated fadeInLeft">See More</h4>
        <hr />
        <div className="Home-Buttons">
            <Link className="waves-effect waves-light btn btn-flat white Home-Btn" to={"/portfolio"} onClick={() => window.scrollTo(0,0)}>Portfolio</Link>
            <Link className="waves-effect waves-light btn btn-flat white Home-Btn" to={"/github"} onClick={() => window.scrollTo(0,0)}>GitHub</Link>
            <Link className="waves-effect waves-light btn btn-flat white Home-Btn" to={"/blog-list"} onClick={() => window.scrollTo(0,0)}>Blogs</Link>
            <Link className="waves-effect waves-light btn btn-flat white Home-Btn" to={"/contact"} onClick={() => window.scrollTo(0,0)}>Contact</Link>
        </div>
      </div>
    );
  }
}

export default Home;