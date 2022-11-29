import { useMutation } from "@apollo/client";
import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { READ_BOOK } from "../utils/mutations";
import { BooksToBeRead } from "../utils/queries";

export default function TbrGrid(/**@type {{books:Book[]}} */ { books }) {
  const [bookRead, { error, isLoading }] = useMutation(READ_BOOK, {
    refetchQueries: [{ query: BooksToBeRead }],
  });

  const readThisBook = (/**@type {Book} */ bookId) => {
    //make call to send formatted item to backend
    console.log({ bookId });
    bookRead({ variables: { bookId } });
  };

  return (
    <Container className="book-grid">
      <Row>
        <Col className="book-grid-bx">
          {books?.map((item) => {
            return (
              <TbrGridCard
                {...item}
                handleClick={() => readThisBook(item._id)}
                key={item._id}
              />
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}

function TbrGridCard(
  /**@type {Book & {handleClick:(e:import("react").SyntheticEvent) =>void}}*/ {
    title,
    image,
    _id,
    handleClick,
  }
) {
  const showReadButton = (_id) => {
    if (_id?.length) {
      return (
        <Stack>
          <button onClick={handleClick}>I've Read This</button>
        </Stack>
      );
    }

    return <span></span>;
  };

  return (
    <Stack
      direction="vertical"
      className="book-grid-card d-inline-flex p-3  mt-5 col-sm-2 "
    >
      <div className="image-boxes">
        <img
          src={!image?.length ? "https://via.placeholder.com/150" : image}
          alt="book cover"
        />
      </div>

      <div>{title}</div>

      {showReadButton(_id)}
    </Stack>
  );
}
