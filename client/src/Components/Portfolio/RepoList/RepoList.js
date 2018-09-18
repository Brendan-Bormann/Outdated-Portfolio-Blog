import React, { Component } from 'react';
import moment from 'moment';
import API from '../../../utils/API';
import './RepoList.css';

import axios from 'axios';
import RepoLI from './RepoLI/RepoLI';

import myPic from '../../../images/my-photo-cropped.jpg';

class RepoList extends Component {

  state = {
      repos: {
          data: {
              body: []
          }
      },
      me: {
          bio: 'An avid developer, coder, and deft programmer. Adept at critical thinking and a proficient problem solver.',
          followers: 10,
          following: 30,
          public_repos: 35,
          created_at: '',
          login: 'Brendan-Bormann'
      }
  }

  getMyGitProfile = () => {
    API.getGitUser()
    .then(response => {
        this.setState({ 'me': response.data.body });
    })
    .catch(error => console.log(error));
  }

  componentDidMount() {
    this.getMyGitProfile();
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

  // possible addition here to fix animations

  render() {
    return (
      <div className="RepoList animated fadeIn">
        <div className="Git-Info">
            <div className="Git-Profile">
                <div className="Git-Profile-Image">
                    <img className="Git-Profile-Pic" src={myPic} alt="my-pic" />
                </div>
                <div className="Git-Profile-Content">
                    <h3 className="Git-Profile-Title">{this.state.me.login}</h3>
                    <p className="Git-Profile-Date">Created: {moment(this.state.me.created_at, "YYYY-MM-DD").fromNow()}.</p>      
                    <p className="Git-Profile-Follows">Followers: {this.state.me.followers}</p>
                    <p className="Git-Profile-Follows">Following: {this.state.me.following}</p>
                    <p className="Git-Profile-RepoTotal">Total Repos: {this.state.me.public_repos}</p>
                </div>
                
            </div>
            <div className="Git-Profile-Bio">
                <span className="Git-Profile-Bio">{this.state.me.bio}</span>
            </div>
        </div>
        <br />
        <h2 className="PageTitle">My Repos</h2>
        <hr />
        <div className="RepoList-Container">
            {this.loadRepos()}
        </div>
        <hr />
        <h4 onClick={() => window.scrollTo(0,0)} className="BackToTop animated fadeIn delay-2s">Back to Top</h4>
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default RepoList;