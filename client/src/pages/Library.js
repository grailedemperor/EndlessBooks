import React from "react";
import { Container, Row } from "react-bootstrap";
import { AllBooksQuery } from "../utils/queries";
import { useQuery } from "@apollo/client";

function Library() {
  // gt allbooks
  const { loading, data } = useQuery(AllBooksQuery);

  // show books in library
  return (
    <Container>
      <Row>
        <h2>My Library</h2>
      </Row>
      <Row>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Authors</th>
              <th>Read</th>
            </tr>
          </thead>
        </table>
      </Row>
    </Container>
  );
}

export default Library;
