import React, { Component } from 'react';
import './RepoList.css';

import axios from 'axios';
import RepoLI from './RepoLI/RepoLI';

class RepoList extends Component {

  state = {
      repos: {
          data: {
              body: []
          }
      }
  }

  componentDidMount() {
    // this.getGit();
    axios.get("/api/get/git/repos")
      .then(response => {
          if (response) this.setState({ "repos": response });
      })
      .catch(err => {
          console.log(err);
          alert("There was an error fetching GitHub data.");
    });
  }

  loadRepos = () => {
      return this.state.repos.data.body.map(repo => {
          return <RepoLI repo={repo} key={repo.id}/>;
      });
  }

  render() {
    return (
      <div className="RepoList">
        <h1 className="app-page-title">My GitHub Projects</h1>
        <hr />
        <div className="RepoList-Container">
            {this.loadRepos()}
        </div>
        <br />
      </div>
    );
  }
}

export default RepoList;