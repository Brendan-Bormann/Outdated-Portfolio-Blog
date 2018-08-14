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
      <div className="RepoLI animated fadeInUp delay-1s">
        <div className="RepoLI-Header">
            <p className="RepoLI-Title">
                {this.formatName(this.props.repo.name)}
            </p>
            <a className="waves-effect waves-light btn white btn-flat" id="RepoLI-LinkBtn" onClick={() => window.location.href = this.props.repo.svn_url}>
                <span className="RepoLI-Link-Text">View</span> 
                <i className="material-icons RepoLI-Icon">
                chevron_right
                </i>
            </a>
        </div>
        <hr />
        <div className="RepoLI-Dates">
            <span className="RepoLI-Created">
                <i className="material-icons RepoLI-Dates-Icons">
                    add_circle_outline
                </i>
                <span className="RepoLI-Time">{moment(this.props.repo.created_at, "YYYY-MM-DD").fromNow()}</span>
            </span>
            <span className="RepoLI-Updated">
                <span className="RepoLI-Time">{moment(this.props.repo.pushed_at, "YYYY-MM-DD").fromNow()}</span>
                <i className="material-icons RepoLI-Dates-Icons">
                    update
                </i>
            </span>
        </div>
        <hr />
        <p className="RepoLI-Summary">{this.props.repo.description}</p>
      </div>
    );
  }
}

export default RepoLI;