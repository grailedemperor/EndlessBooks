import React from "react";
import { Container, Row } from "react-bootstrap";
import { BooksToBeRead } from "../utils/queries";
import { useQuery } from "@apollo/client";
import BookGrid from "../components/BookGrid";

function TBR() {
  // get allbooks
  const { loading, data } = useQuery(BooksToBeRead);

  /** @type {{toBeRead:Book[]}} */
  const { toBeRead } = { toBeRead: [], ...data };
  console.log({ toBeRead });

  if (loading) {
    return <div>loading books</div>;
  }
  return (
    <Container className="p-4">
      <Row>
        <h2>To Be Read</h2>
      </Row>
      <Row>
        <BookGrid books={toBeRead} />
      </Row>
    </Container>
  );
}

export default TBR;
