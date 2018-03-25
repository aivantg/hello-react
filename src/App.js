import React, { Component } from 'react';
import NewsCard from './components/NewsCard';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className ="content">
          <NewsCard
            title="Donald Trump did Something Again!"
            text="Check the real site tbh: www.nytimes.com"
          />
        </div>
      </div>
    );
  }
}

export default App;
