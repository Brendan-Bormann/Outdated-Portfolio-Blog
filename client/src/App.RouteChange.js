import React, { Component } from 'react';
import { withRouter } from 'react-router';

class App extends Component {

    componentWillMount() {
      this.unlisten = this.props.history.listen((location, action) => {
        var myLocation = window.location.href.split('/');

        if (!(myLocation[3])) {
            myLocation[3] = 'home';
        }

        this.props.changePage(myLocation[3]);
      });
    }
    componentWillUnmount() {
        this.unlisten();
    }
    render() {
       return (
           <div>{this.props.children}</div>
        );
    }
  }
  export default withRouter(App);