import React, { Component } from 'react';
import API from '../../../utils/API';
import moment from 'moment';
import './BlogPage.css';
import { Link } from "react-router-dom";

class BlogPage extends Component {

  state = {
      blog: {
          content: "Content",
          date: "Date",
          imageUrl: "URL",
          summary: "Summary",
          title: "Title"
      }
  }

  date = async () => {
    var tempState = this.state.blog;
    tempState.date = moment(this.state.blog.date, "YYYY-MM-DD").fromNow();
    await this.setState({ blog: tempState });
  }

    componentDidMount() {
      if (this.props.match.params.id) {
        API.getOneBlog(this.props.match.params.id)
            .then(response => {
              if (response.status !== 422) this.setBlogData(response.data);
              else window.location.assign("/");
            })
            .catch(error => {
              console.log(error);
              window.location.assign("/");
            });
      } else {
          window.location.assign("/");
      }
  }

  setBlogData = (data) => {
    this.setState({ blog: data });
    this.date();
  }

  render() {
    return (
      <div className="BlogPage">
        <h1>Blog Page</h1>
        <br/>
        <h3 className="BlogPage-Title">
            {this.state.blog.title}
        </h3>
        <p className="BlogPage-Date">
            {this.state.blog.date}
        </p>
          <img className="BlogPage-Image" alt="article" src={this.state.blog.imageUrl} />
        <p className="flow-text">{this.state.blog.summary}</p>
        <hr />
        <p className="flow-text">{this.state.blog.content}</p>
        <br />
        <br />
        <Link className="btn" to={"/blog-edit/" + this.props.match.params.id}>Edit</Link>
      </div>
    );
  }
}

export default BlogPage;