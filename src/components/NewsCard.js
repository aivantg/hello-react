import React, { Component } from 'react';
import './NewsCard.css';

class NewsCard extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <h3>{this.props.title}</h3>
        <p>{this.props.text}</p>
      </div>
    )
  }
}

export default NewsCard;
