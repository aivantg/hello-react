import React, { Component } from 'react';
import ArticleCard from './components/ArticleCard';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor() {
    super()
    this.state = {articles: []};
    this.fetchArticles = this.fetchArticles.bind(this);
  }

  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles() {
    axios.get('https://aivant-hello-rails.herokuapp.com/articles')
      .then(response => {
        this.setState({articles: response.data})
      });
  }

  deleteArticle(id) {
    console.log("Deleting article #" + id);
    axios.delete('https://aivant-hello-rails.herokuapp.com/articles/' + id);
  }

  _renderArticles() {
    const articles = this.state.articles.map((article) => (
      <ArticleCard title={article.title} description={article.description} id={article.id} onTripleClick = {this.deleteArticle} />
    ));

    return articles;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" onClick={this.fetchArticles} />
          <h1 className="App-title">{"Welcome to Aivant's React Playground"}</h1>
        </header>
        <div className ="App-content">
          { this._renderArticles() }
        </div>
      </div>
    );
  }
}

export default App;
