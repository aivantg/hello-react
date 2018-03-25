import React, { Component } from 'react';
import './ArticleCard.css';

class ArticleCard extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
      </div>
    )
  }
}

export default ArticleCard;
