import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

export default class ArticleCard extends Component {
  render() {
    return (
      <Card.Link href={this.props.article.url} target='_blank' className='card text-decoration-none shadow'>
        <Card.Img className='cardImage' variant="top" src={this.props.article.urlToImage} />
        <Card.Body className='cardBody'>
          <Card.Title>{this.props.article.title}</Card.Title>
          <Card.Text>{this.props.article.description}</Card.Text>
        </Card.Body>
      </Card.Link>
    )
  }
};
