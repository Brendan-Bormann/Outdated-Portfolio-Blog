import React, { Component } from 'react';
import moment from 'moment';
import './BlogLI.css';

import { Link } from 'react-router-dom';

import placeholderImg from '../../../images/img.svg';

class BlogLI extends Component {

  state = {
    date: "",
    imageUrl: placeholderImg
  }

  date = () => {
    this.setState({ date: moment(this.props.blog.date, "YYYY-MM-DD").fromNow() });
  }

  componentDidMount() {
      this.date();
      this.setState({
        "imageUrl": this.props.blog.imageUrl
      });
  }


  render() {
    return (
      <Link className="clear-style" to={'/blog/' + this.props.blog._id}>
        <div className="BlogLI animated fadeIn" key={this.props.blog._id}>
          <div className="BlogLI-Thumbnail">
            <img className="BlogLI-Thumb" alt="thumbnail" src={this.state.imageUrl} />
          </div>
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
              <p className="BlogLI-Summary">{this.props.blog.summary}</p>
          </div>
        </div>
      </Link>
    );
  }
}

export default BlogLI;