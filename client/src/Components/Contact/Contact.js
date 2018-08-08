import React, { Component } from 'react';

import './Contact.css';

class Contact extends Component {

  state = {
    text: "hi"
  }

  

  render() {
    return (
      <div className="Contact">
        <p>Contact Me!</p>
      </div>
    );
  }
}

export default Contact;