import React, { Component } from 'react';
import moment from 'moment';

import './Footer.css';

class Footer extends Component {

  render() {
    return (
      <div className="Footer">
        <hr />
        <p>Brendan Bormann {moment().format('YYYY')}</p>
      </div>
    );
  }
}

export default Footer;