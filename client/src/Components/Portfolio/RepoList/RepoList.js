import React, { Component } from 'react';
import './RepoList.css';

import axios from 'axios';
import RepoLI from './RepoLI/RepoLI';

class RepoList extends Component {

  state = {
      repos: {
          data: []
      }
  }

  getGit = () => {
    const git_info = {
      method: 'GET',
      headers: {
        'Authorization': 'token 13c27ce6e3f80f9a7284e7c34e618df7cb11a0a3'
      },
      url: "https://api.github.com/user/repos?sort=created",
    };
    axios(git_info)
      .then(res => {
          console.log(res);
          this.setState({ "repos": res });
      });
  }

  componentDidMount() {
    this.getGit();
    let userURL = "https://api.github.com/user/:username";
  }

  loadRepos = () => {
      return this.state.repos.data.map(repo => {
          return <RepoLI repo={repo} key={repo.id}/>;
      });
  }

  render() {
    return (
      <div className="RepoList">
        <h1 className="app-page-title">My GitHub Projects</h1>
        <hr />
        {this.loadRepos()}
        <br />
      </div>
    );
  }
}

export default RepoList;