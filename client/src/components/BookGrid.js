import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function BookGrid(/**@type {{bookList:Book[]}} */ { bookList }) {
  return (
    <Container className="book-grid">
      <Row>
        <Col xs={"12"} md={4}>
          {bookList?.map((bookData) => {
            return <BookGridCard {...bookData} />;
          })}
        </Col>
      </Row>
    </Container>
  );
}

function BookGridCard(/**@type {Book}*/ { title, imageUrl }) {
  return (
    <div className="book-grid-card">
      <div>
        <img src={imageUrl} alt="book cover" />
      </div>

      <div>{title}</div>
    </div>
  );
}
