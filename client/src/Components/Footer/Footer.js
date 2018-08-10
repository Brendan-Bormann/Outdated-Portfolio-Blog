import React, { Component } from 'react';
import moment from 'moment';

import './Footer.css';

class Footer extends Component {

  render() {
    return (
      <div className="Footer">
        <span>Brendan Bormann {moment().format('YYYY')}</span>
      </div>
    );
  }
}

export default Footer;