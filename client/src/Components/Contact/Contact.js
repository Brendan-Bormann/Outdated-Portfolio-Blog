import React, { Component } from 'react';

import API from '../../utils/API';

import './Contact.css';

class Contact extends Component {

  state = {
    name: 'Bob',
    message: "Hi"
  }

  sendMail = (name, message) => {

    this.setState({
        'name': name,
        'message': message
    });

    API.sendMail(this.state)
    .then(res=> {
        alert(res.status);
    })
    .catch(err => console.log(err));
  }

  

  render() {
    return (
      <div className="Contact animated fadeIn">
        <p onClick={() => this.sendMail('Jimmy', 'What up pooks?')}>Contact Me!</p>
        <p>
          Assumenda doloremque doloremque et in et. Qui necessitatibus ut voluptas est repudiandae dolorem temporibus esse corporis. Quia dignissimos ullam quibusdam officiis laborum similique tempore consequatur et. Non amet rerum. Ut eveniet omnis officiis illum at.
 
          Quae saepe voluptatem provident ut in nemo aliquam nostrum. Iste pariatur vel facilis ex eum. Consequuntur ex exercitationem voluptatum omnis qui. Eum non nemo quisquam provident. Vel praesentium expedita molestiae rerum eos nobis ea dolorum nostrum.
          
          Voluptates sit labore. Eveniet fugit porro. Fugit est sunt. Perspiciatis voluptates aut qui tempore veniam officiis sit sint dicta. Maxime quibusdam assumenda id amet accusamus omnis inventore numquam iusto. Aliquid et quaerat et perspiciatis blanditiis nam aut suscipit accusantium.
        </p>
      </div>
    );
  }
}

export default Contact;