import { useMutation } from "@apollo/client";
import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { ADDBOOK_MUTATION } from "../utils/mutations";
import { AllBooksQuery, GET_ME } from "../utils/queries";
import Input from "./Input";

export default function BookGrid(/**@type {{books:Book[]}} */ { books }) {
  const [addBookToLibrary, { error, isLoading }] = useMutation(
    ADDBOOK_MUTATION,
    { refetchQueries: [{ query: AllBooksQuery }] }
  );

  const addToLibrary = (/**@type {Book} */ transformedItem) => {
    //make call to send formatted item to backend
    console.log({ transformedItem });
    addBookToLibrary({ variables: transformedItem });
  };

  return (
    <Container className="book-grid">
      <Row>
        <Col className="book-grid-bx">
          {books?.map((item) => {
            return (
              <BookGridCard {...item} handleClick={() => addToLibrary(item)} />
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}

function BookGridCard(
  /**@type {Book & {handleClick:(e:import("react").SyntheticEvent) =>void}}*/ {
    title,
    image,
    _id,
    handleClick,
  }
) {
  const showAddButton = (_id) => {
    if (!_id?.length) {
      return (
        <Stack>
          <button onClick={handleClick}>Add to Library</button>
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

      {showAddButton(_id)}
    </Stack>
  );
}
