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

  searchArticles(keyword) {
    console.log(keyword);
    // this.setState({ keyword: keyword });
  };

  fetchArticles(keyword) {
    fetch(`${this.apiUrl}?q=${keyword}&apiKey=${this.apiKey}`)
      .then(res => res.json())
      .then(data => {
        const articles = data.articles.splice(0, 10);
        this.setState({ articles: articles });
      });
  };

  componentDidMount() {
    this.fetchArticles(this.state.keyword);
  };
  
  render() {
    return (
      <div className="App">
        <AppNavbar handleSearch={this.searchArticles}/>
        <MainPage currentSearch={this.state.keyword} articles={this.state.articles}/>
      </div>
    );
  }
};
