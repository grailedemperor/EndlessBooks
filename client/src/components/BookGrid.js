import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function BookGrid(/**@type {{bookList:Book[]}} */ { bookList }) {
  return (
    <Container className="book-grid">
      <Row>
        <Col className="book-grid-bx">
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
    <div className="book-grid-card d-inline-flex p-3  mt-5 col-sm-2 ">
      <div className="image-boxes">
        <img src={imageUrl} alt="book cover" />
      </div>

      <div>{title}</div>
    </div>
  );
}
