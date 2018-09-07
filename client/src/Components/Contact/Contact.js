import React, { Component } from 'react';

import API from '../../utils/API';

import './Contact.css';

class Contact extends Component {

  state = {
    name: '',
    email: '',
    message: ''
  }

  sendMail = event => {
    event.preventDefault();

    if (this.state.name !== "" && this.state.message !== "") {

        API.sendMail({ 'name': this.state.name, 'email': this.state.email, 'message': this.state.message })
        .then(res=> {
            if (res.status === 200) {
              alert('Message was successfully delivered.');
              this.setState({ 'name': '', 'email': '', 'message': '' });
            } else {
              alert('There was a problem. Please email me manually.');
            }
        })
        .catch(err => console.log(err));
    }
  }

  handle1Change = (event) => {
    this.setState({'name': event.target.value});
    console.log("running");
  }
  handle2Change = (event) => {
    this.setState({'email': event.target.value});
  }
  handle3Change = (event) => {
    this.setState({'message': event.target.value});
  }

  

  render() {
    return (
      <div className="Contact animated fadeInUp">
        <p>I am always looking to speak with and meet new people. If you have any reason to get in touch with me, then feel free to contact me! I accept calls mostly outside of office hours, and respond to emails quickly.</p>
        <div className="Contact-Info-Container">
          <p className="Contact-Info">My Email:<span>contact@brendanbormann.com</span></p>
          <p className="Contact-Info">Personal:<span>brendan.bormann@gmail.com</span></p>
          <p className="Contact-Info">My Phone:<span>(303)-906-8022</span></p>
        </div>
        <h4 className="Home-Topic">Send Me a Message</h4>
        <hr />
        <div className="Contact-Row row">
        <i class="material-icons col s1">person</i>
          <div class="input-field col s11">
            <input id="name" placeholder="Your Name" value={this.state.name} type="text" onChange={this.handle1Change}/>
          </div>
        </div>
        <div className="Contact-Row row">
        <i class="material-icons col s1">drafts</i>
          <div class="input-field col s11">
            <input id="email" placeholder="Your Email" value={this.state.email} type="email" onChange={this.handle2Change}/>
          </div>
        </div>
        <div class="row">
            <div class="Contact-Row row">
            <i class="material-icons col s1">message</i>
              <div class="input-field col s11">
                <textarea id="textarea1" placeholder="Your Message" value={this.state.message} class="materialize-textarea" onChange={this.handle3Change}></textarea>
              </div>
            </div>
        </div>
        <div className="contact-btn-holder">
        <button className="waves-effect waves-light btn white Contact-btn" onClick={this.sendMail}>Submit  <i class="material-icons">send</i></button>
        </div>
      </div>
    );
  }
}

export default Contact;