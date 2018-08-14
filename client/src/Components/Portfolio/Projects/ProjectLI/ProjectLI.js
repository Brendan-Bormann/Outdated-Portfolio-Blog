import React, { Component } from 'react';
import moment from 'moment';

import './ProjectLI.css';

class ProjectLI extends Component {

    state = {
        date: ""
    }

    componentDidMount() {
        this.date();
    }

    date = () => {
        this.setState({ "date": moment(this.props.project.date, "YYYY-MM-DD").fromNow() });
    }

  render() {
    return (
      <div className="ProjectLI animated fadeIn delay-1s" key={this.props.project.key} onClick={() => window.location.href = this.props.project.link}>
        <div className="ProjectLI-Thumbnail">
            <img alt="project-pic" src={this.props.project.imageUrl} />
        </div>
        <div className="ProjectLI-Info">
            <h3 className="ProjectLI-Title">{this.props.project.title}</h3>
            <p className="ProjectLI-Date">{this.state.date}</p>
            <p className="ProjectLI-Summary">{this.props.project.summary}</p>
        </div>
      </div>
    );
  }
}

export default ProjectLI;