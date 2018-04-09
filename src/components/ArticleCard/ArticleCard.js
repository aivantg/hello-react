import React, { Component } from 'react';
import './ArticleCard.css';

class ArticleCard extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.onClick = this.onClick.bind(this);
  }

  onClick(e){
    if (e.detail === 3) {
      this.props.onTripleClick(this.props.id);
    }
  }
  
  render() {
    return (
      <div className="container" onClick={this.onClick}>
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
      </div>
    )
  }
}

export default ArticleCard;
