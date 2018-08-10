import React, { Component } from 'react';
import './BlogEdit.css';
import API from "../../../utils/API";


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

    if (this.props.admin) {
      if (this.state.blog.title && this.state.blog.content && this.state.blog.summary && this.state.blog.imageUrl) {
        if (this.state.blog.summary.length < 150) {
          API.updateBlog(this.state.blog._id, {
            title: this.state.blog.title,
            content: this.state.blog.content,
            summary: this.state.blog.summary,
            imageUrl: this.state.blog.imageUrl
          })
            .then(res => {
              alert("Updated blog.");
              window.location.assign("/blog/" + this.state.blog._id);
            })
            .catch(err => console.log(err));
        } else {
          alert(`Summary is ${this.state.blog.summary.length - 150} characters over limit.`);
        }
      } else {
        alert("Please fill out all areas.");
      }
    } else {
      alert('Only the Admin can edit blogs.');
    }
  };

  deleteBlog = event => {
    event.preventDefault();

    if (this.props.admin) {
      if (window.confirm("Are you sure you want to delete this blog?")) {
        API.deleteBlog(this.state.blog._id)
        .then(response => {
          alert("Blog is now gone.");
          window.location.assign("/blog-list");
        })
        .catch(error => alert(error));
        
      }
      else alert("Blog has not been deleted.");
    } else {
      alert('Only the Admin can delete blogs.');
    }
  }

  render() {
    return (
      <div className="BlogWriter">
        <br />
        <form>
              <label htmlFor="title-input">Article Title. Currently: [{this.state.blog.title.length}/25]</label>
              <input id="title-input"
                value={this.state.blog.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title"
              />

              <label htmlFor="imageUrl">Article Image. Ideally banner shaped.</label>
              <input id="imageUrl"
                value={this.state.blog.imageUrl}
                onChange={this.handleInputChange}
                name="imageUrl"
                placeholder="Image URL"
              />

              <label htmlFor="textarea1">Article Summary. Currently: [{this.state.blog.summary.length}/150]</label>
              <textarea id="textarea1" className="materialize-textarea"
                value={this.state.blog.summary}
                onChange={this.handleInputChange}
                name="summary"
                placeholder="Summary"
              />

              <label htmlFor="textarea2">Blog Article</label>
              <textarea id="textarea2" className="materialize-textarea"
                value={this.state.blog.content}
                onChange={this.handleInputChange}
                name="content"
                placeholder="Content"
              />

              <div className="BlogEdit-Buttons">
                <button className="waves-effect waves-light btn" onClick={this.handleFormSubmit} >
                  Update Blog
                </button>
                <button className="waves-effect waves-light btn red" onClick={this.deleteBlog} >
                  Delete Blog
                </button>
              </div>
            </form>
      </div>
    );
  }
}

export default BlogEdit;
