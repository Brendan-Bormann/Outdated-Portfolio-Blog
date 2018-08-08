import React, { Component } from 'react';
import './BlogWriter.css';
import API from "../../../utils/API";

class BlogWriter extends Component {

  state = {
    title: "",
    summary: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.content && this.state.summary && this.state.imageUrl) {
      if (this.state.summary.length < 150) {
        API.saveBlog({
          title: this.state.title,
          content: this.state.content,
          summary: this.state.summary,
          imageUrl: this.state.imageUrl
        })
          .then(res => {
            alert("Success!");
            window.location.assign("/blog-list/")
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
        <form>
              <label htmlFor="title-input">Article Title. Keep under ~25 characters. Currently: [{this.state.title.length}/25]</label>
              <input id="title-input"
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title"
              />

              <br />
              <br />
              <br />

              <label htmlFor="imageUrl">Article Image. Ideally banner shaped. Example 1920x500px</label>
              <input id="imageUrl"
                value={this.state.imageUrl}
                onChange={this.handleInputChange}
                name="imageUrl"
                placeholder="Image URL"
              />

              <br />
              <br />
              <br />

              <label htmlFor="textarea1">Article Summary. Keep ~150 characters. Currently: [{this.state.summary.length}/150]</label>
              <textarea id="textarea1" class="materialize-textarea"
                value={this.state.summary}
                onChange={this.handleInputChange}
                name="summary"
                placeholder="Summary"
              />
              
              <br />
              <br />
              <br />

              <label htmlFor="textarea2">Blog Article</label>
              <textarea id="textarea2" class="materialize-textarea"
                value={this.state.content}
                onChange={this.handleInputChange}
                name="content"
                placeholder="Content"
              />

              <br />
              <br />

              <button className="waves-effect waves-light btn" onClick={this.handleFormSubmit} >
                Submit Blog
              </button>
            </form>
      </div>
    );
  }
}

export default BlogWriter;
