import React, { Component } from 'react';

import API from '../../utils/API';

import './Contact.css';

class Contact extends Component {

  state = {
    name: 'Bob',
    email: 'sup@123.com',
    message: "Hi"
  }

  sendMail = (name, message) => {

    this.setState({
        'name': name,
        'message': message
    });

    API.sendMail({ 'name': this.state.name, 'email': this.state.email, 'message': this.state.message })
    .then(res=> {
        alert(res.status);
    })
    .catch(err => console.log(err));
  }

  

  render() {
    return (
      <div className="Contact animated fadeIn">
        <p onClick={() => this.sendMail('Jimmy', 'What up pooks?')}>Contact Me!</p>
        <h4 className="Home-Topic animated fadeInLeft">Send Me a Message</h4>
        <hr />
        <div className="Contact-Row row">
          <div class="input-field col s8">
            <input id="name" placeholder="Your Name" type="text"/>
          </div>
        </div>
        <div className="Contact-Row row">
          <div class="input-field col s12">
            <input id="email" placeholder="Your Email" type="email"/>
          </div>
        </div>
        <div class="row">
          <form class="col s12">
            <div class="Contact-Row row">
              <div class="input-field col s12">
                <textarea id="textarea1" placeholder="Your Message" class="materialize-textarea"></textarea>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;