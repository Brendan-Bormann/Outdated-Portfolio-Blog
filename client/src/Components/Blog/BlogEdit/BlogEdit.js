import React, { Component } from 'react';
import './BlogEdit.css';
import API from "../../../utils/API";
import { Link } from "react-router-dom";

class BlogEdit extends Component {

  state = {
    blog: {
        title: "",
        imageUrl: "",
        summary: "",
        content: "",
    }
  }

  componentDidMount() {
    if (this.props.match.params.id) {
      API.getOneBlog(this.props.match.params.id)
          .then(response => {
            if (response.status !== 422) this.setBlogData(response.data);
            else window.location.assign("/");
          })
          .catch(error => console.log(error));
    } else {
        window.location.assign("/");
    }
 }

 setBlogData = (data) => {
    this.setState({ blog: data });
 }

  handleInputChange = event => {
    const { name, value } = event.target;
    let tempBlogState = this.state.blog;
    tempBlogState[name] = value;
    this.setState({ blog: tempBlogState });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.blog.title && this.state.blog.content && this.state.blog.summary && this.state.blog.imageUrl) {
      if (this.state.blog.summary.length < 150) {
        API.updateBlog(this.state.blog._id, {
          title: this.state.blog.title,
          content: this.state.blog.content,
          summary: this.state.blog.summary,
          imageUrl: this.state.blog.imageUrl
        })
          .then(res => {
            console.log(res);
            alert("Success!");
          })
          .catch(err => console.log(err));
      } else {
        alert(`Summary is ${this.state.summary.length - 150} characters over limit.`);
      }
    } else {
      alert("Please fill out all areas.");
    }
  };

  render() {
    return (
      <div className="BlogWriter">
        <h2 onClick={() => console.log(this.state.blog)}>
            Write a New Blog
        </h2>
        <Link to={"/blog-list"}>Back to blog List</Link>
        <br />
        <br />
        <form>
              <label htmlFor="title-input">Article Title. Keep under ~25 characters. Currently: [{this.state.blog.title.length}/25]</label>
              <input id="title-input"
                value={this.state.blog.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title"
              />

              <br />
              <br />
              <br />

              <label htmlFor="imageUrl">Article Image. Ideally banner shaped. Example 1920x500px</label>
              <input id="imageUrl"
                value={this.state.blog.imageUrl}
                onChange={this.handleInputChange}
                name="imageUrl"
                placeholder="Image URL"
              />

              <br />
              <br />
              <br />

              <label htmlFor="textarea1">Article Summary. Keep ~150 characters. Currently: [{this.state.blog.summary.length}/150]</label>
              <textarea id="textarea1" className="materialize-textarea"
                value={this.state.blog.summary}
                onChange={this.handleInputChange}
                name="summary"
                placeholder="Summary"
              />
              
              <br />
              <br />
              <br />

              <label htmlFor="textarea2">Blog Article</label>
              <textarea id="textarea2" className="materialize-textarea"
                value={this.state.blog.content}
                onChange={this.handleInputChange}
                name="content"
                placeholder="Content"
              />

              <br />
              <br />

              <button className="waves-effect waves-light btn" onClick={this.handleFormSubmit} >
                Update Blog
              </button>
            </form>
      </div>
    );
  }
}

export default BlogEdit;
