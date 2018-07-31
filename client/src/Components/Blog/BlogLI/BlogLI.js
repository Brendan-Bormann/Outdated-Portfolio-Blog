import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import moment from 'moment';
import './BlogLI.css';


class BlogLI extends Component {

  state = {
    date: ""
  }

  date = () => {
    this.setState({ date: moment(this.props.blog.date, "YYYY-MM-DD").fromNow() });
  }

  componentDidMount() {
      this.date();
  }

  render() {
    return (
      <div className="BlogLI" key={this.props.blog._id}>
        <img className="BlogLI-Thumbnail" alt="thumbnail" src={this.props.blog.imageUrl} />
        <div className="BlogLI-Content">
            <div className="BlogLI-TitleBox">
                <h3 className="BlogLI-Title">
                    {this.props.blog.title}
                </h3>
                <span className="BlogLI-date">
                    {this.state.date}
                </span>
                </div>
            <hr />
            <p>{this.props.blog.summary}</p>
            <Link className="waves-effect waves-light btn red BlogLI-Corner" to={"/blog/" + this.props.blog._id}>Read</Link>
        </div>
      </div>
    );
  }
}

export default BlogLI;