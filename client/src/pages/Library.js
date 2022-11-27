import React from "react";
import { Container, Row } from "react-bootstrap";
import { AllBooksQuery } from "../utils/queries";
import { useQuery } from "@apollo/client";
import BookGrid from "../components/BookGrid";

function Library() {
  // gt allbooks
  const { loading, data } = useQuery(AllBooksQuery);

  /** @type {{books:Book[]}} */
  const { books } = { books: [], ...data };
  console.log({ books });

  if (loading) {
    return <div>loading books</div>;
  }
  // show books in library
  // const { books = [] } = data;
  return (
    <Container className="p-4">
      <Row>
        <h2>My Library</h2>
      </Row>
      <Row>
        {/* <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Authors</th>
              <th>Read</th>
            </tr>
          </thead>

          <tbody>
            {books.map((item) => (
              <tr key={item._id}>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>{item.read ? "Read" : "Not read"}</td>
              </tr>
            ))}
          </tbody>
        </table> */}

        <BookGrid books={books} />
      </Row>
    </Container>
  );
}

export default Library;
