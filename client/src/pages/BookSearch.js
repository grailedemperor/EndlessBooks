import React, { useState } from "react";
import { Container, Stack } from "react-bootstrap";
import BookGrid from "../components/BookGrid";
import BookSearchForm from "../features/BookSearchForm";
import { searchGoogleBooks } from "../utils/API";

const transform = (/** @type {import("../../books").Item} */ bookItem) => {
  return /** @type {Book}*/ ({
    _id: null,
    bookId: bookItem.id,
    authors: bookItem.volumeInfo.authors || ["No author to display"],
    title: bookItem.volumeInfo.title,
    description: bookItem.volumeInfo.description,
    image: bookItem.volumeInfo.imageLinks?.thumbnail || "",
    link: bookItem.volumeInfo.infoLink,
    subject: bookItem.volumeInfo.description,
  });
};

/** @return {Book[]} */
const getFakeBooks = () =>
  Array(10)
    .fill(null)
    .map((item, index) => {
      const _id = index + 1;
      // @ts-ignore
      return /**@type {Book} */ ({
        _id,
        author: "some author" + _id,
        genre: "genre",
        name: `name_(${index + 1})`,
        read: Boolean(index % 2),
        year: 2022 + index,
        imageUrl: "https://via.placeholder.com/150",
      });
    });

export default function BookSearch() {
  const [searchResults, setSearchResults] = useState(
    /** @type {import("../../books").GBooksResult}*/ ({})
  );

  return (
    <section className="booksearch-bx">
      <Container>
        <Stack className="book-search" direction="horizontal">
          <BookSearchForm onResults={setSearchResults} />
          <BookGrid books={searchResults?.items?.map(transform)} />
        </Stack>
      </Container>
    </section>
  );
}
