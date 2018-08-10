import React, { Component } from 'react';
import API from '../../../utils/API';
import moment from 'moment';
import './BlogPage.css';
import { Link } from "react-router-dom";

import placeholderImg from '../../../images/img.svg';

class BlogPage extends Component {

  state = {
      blog: {
          content: "Blog couldn't be loaded.",
          date: "Date",
          imageUrl: placeholderImg,
          summary: "Blog summary...",
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

  getAdmin = () => {
    API.isAdmin()
      .then(res => {
        return res.data;
      });
  }

  AddNewBtn = () => {
    return(
      <Link to={"/blog-edit/" + this.props.match.params.id} id="BlogPage-Edit" className="btn-floating btn-large waves-effect waves-light blue">
          <i className="material-icons">
            create
          </i>
        </Link>
    );
  }

  render() {
    return (
      <div className="BlogPage">
        <h2 className="PageTitle animated fadeIn">
            {this.state.blog.title}
        </h2>
        <hr />
        <p className="BlogPage-Date animated rotateIn">
            {this.state.blog.date}
        </p>
          <img className="BlogPage-Image animated fadeIn delay-1s" alt="article" src={this.state.blog.imageUrl} />
        <p className="flow-text animated fadeInUp">{this.state.blog.summary}</p>
        <hr />
        <p className="flow-text animated fadeIn delay-2s">{this.state.blog.content}</p>
        <br />
        <br />
        <div>
        {this.getAdmin() ? <this.AddNewBtn /> : <span></span>}
        </div>
      </div>
    );
  }
}

export default BlogPage;