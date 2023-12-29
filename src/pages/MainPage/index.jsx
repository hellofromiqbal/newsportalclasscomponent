import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ArticleCard from '../../components/ArticleCard';

export default class MainPage extends Component {
  render() {
    return (
      <Container>
        <Row xs={1} md={3} className="py-3 g-3">
          {this.props.articles.map((article, idx) => (
            <Col key={idx}>
              <ArticleCard article={article}/>
            </Col>
          ))}
        </Row>
      </Container>
    )
  }
};
