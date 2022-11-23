import React, { useState } from "react";
import { Stack } from "react-bootstrap";
import BookGrid from "../components/BookGrid";
import BookSearchForm from "../features/BookSearchForm";

/** @return {Book[]} */
const getFakeBooks = () =>
  Array(10)
    .fill(null)
    .map((item, index) => {
      const _id = index + 1;
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
  const [searchResults, setSearchResults] = useState(/** @type {Book[]}*/ ([]));

  function handleSearch(data) {
    console.log(data);
    //pretend we data

    setSearchResults(getFakeBooks());
  }

  return (
    <Stack className="book-search p-5" direction="horizontal">
      <BookSearchForm onSubmit={handleSearch} />
      <BookGrid bookList={searchResults}/>
    </Stack>
  );
}
