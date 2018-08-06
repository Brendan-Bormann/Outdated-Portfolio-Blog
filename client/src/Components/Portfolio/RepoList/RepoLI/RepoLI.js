import React, { Component } from 'react';
import './RepoLI.css';

import moment from 'moment';


class RepoLI extends Component {


  render() {

    return (
      <div className="RepoLI" onClick={() => window.location.href = this.props.repo.svn_url}>
        <h4>{this.props.repo.name}</h4>
        <p>Created: {moment(this.props.repo.created_at, "YYYY-MM-DD").fromNow()}</p>
        <p>Last Push: {moment(this.props.repo.pushed_at, "YYYY-MM-DD").fromNow()}</p>
        <p>Last Updated: {moment(this.props.repo.updated_at, "YYYY-MM-DD").fromNow()}</p>
        <hr />
        <p>{this.props.repo.description}</p>
        <p>Primary Language: {this.props.repo.language}</p>
      </div>
    );
  }
}

export default RepoLI;