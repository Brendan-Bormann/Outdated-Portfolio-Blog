import React, { Component } from 'react';
import './BlogList.css';
import API from "../../../utils/API";
import { Link } from "react-router-dom";

import BlogLI from '../BlogLI/BlogLI';

class Blog extends Component {

  state = {
    blogs: []
  }

  componentDidMount() {
    this.loadBlogs();
  }

  loadBlogs = () => {
    API.getAllBlogs()
      .then(res => {
        console.log(res);
        this.setState({ blogs: res.data});
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="BlogList">
        <h2 className="BlogList-Title">
            Blog List
        </h2>
        <Link className="btn" to={"/blog-write"}>Write a blog</Link>
        <br />
        <div className="BlogList-container">
          {this.state.blogs.map(blog => <BlogLI blog={blog} />)}
        </div>
      </div>
    );
  }
}

export default Blog;
