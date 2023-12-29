// App.jsx
import './App.css';
import React, { Component } from 'react';
import AppNavbar from './components/Navbar';
import MainPage from './pages/MainPage';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.apiUrl = "https://newsapi.org/v2/everything";
    this.apiKey = 'd4727282328646e78f20a614cb5bd9d0';
    this.state = {
      keyword: 'keyword',
      articles: []
    };
  };

  fetchArticles(keyword) {
    fetch(`${this.apiUrl}?q=${keyword}&apiKey=${this.apiKey}`)
      .then(res => res.json())
      .then(data => {
        const articles = (data.articles || []).slice(0, 10);
        this.setState({ articles: articles });
      })
      .catch(error => {
        console.error('Error fetching articles', error);
      });
  };

  searchArticles(newKeyword) {
    this.setState({ keyword: newKeyword }, () => {
      this.fetchArticles(newKeyword);
    });
  };

  componentDidMount() {
    this.fetchArticles(this.state.keyword);
  };
  
  render() {
    return (
      <div className="App">
        <AppNavbar handleSearch={(newKeyword) => this.searchArticles(newKeyword)}/>
        <MainPage currentSearch={this.state.keyword} articles={this.state.articles}/>
      </div>
    );
  }
};
