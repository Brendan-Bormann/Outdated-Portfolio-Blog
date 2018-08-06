import React, { Component } from 'react';
import './RepoLI.css';

import moment from 'moment';


class RepoLI extends Component {

    formatName = (name) => {
        var adjusted = [];
    
        for (let i = 0; i < name.length; i++) {
            if (name[i] === "-") {
                adjusted.push(" ");
            }
            else if (i === 0) adjusted.push(name[i].toUpperCase());
            else if (name[i-1] === "-" || name[i-1] === " ") adjusted.push(name[i].toUpperCase());
            else adjusted.push(name[i]);
        }
        return adjusted.join("");
    }

  render() {

    return (
      <div className="RepoLI" onClick={() => window.location.href = this.props.repo.svn_url}>
        <h4>{this.formatName(this.props.repo.name)}</h4>
        <div className="RepoLI-Dates">
            <span className="RepoLI-Created">Created: {moment(this.props.repo.created_at, "YYYY-MM-DD").fromNow()}</span>
            <span className="RepoLI-Updated">Updated: {moment(this.props.repo.pushed_at, "YYYY-MM-DD").fromNow()}</span>
        </div>
        <hr />
        <p>{this.props.repo.description}</p>
      </div>
    );
  }
}

export default RepoLI;