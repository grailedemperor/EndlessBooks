import { Container, Form, Stack } from "react-bootstrap";
import React, { useState } from "react";
import Input from "../components/Input";
import { searchGoogleBooks } from "../utils/API";
const categories = ["Genre", "Author", "Title"];

export default function BookSearchForm() {
  const [category, setCategory] = useState("");
  const [term, setTerm] = useState("");
  const [bookList, setbookList] = useState([]);

  // map bookList to BookGrid

  const handleInputChange = async (e) => {
    e.preventDefault();
    const v = e.currentTarget.value;
    setTerm(v);
  };

  const handleCategoryChange = async (e) => {
    e.preventDefault();
    const v = e.currentTarget.value;
    setCategory(v);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!term) {
      return false;
    }

    try {
      const response = await searchGoogleBooks(term, category);

      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      const { items } = await response.json();

      const bookData = items.map((book) => ({
        bookId: book.id,
        authors: book.volumeInfo.authors || ["No author to display"],
        title: book.volumeInfo.title,
        description: book.volumeInfo.description,
        image: book.volumeInfo.imageLinks?.thumbnail || "",
      }));

      setbookList(bookData);
      setTerm("");
      setCategory("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Stack direction={"vertical"} gap={2}>
        <Container className="input-group">
          <label htmlFor="">Category</label>
          <select required value={category} onChange={handleCategoryChange}>
            <option value="">Please select a category</option>
            {categories.map((category, index) => {
              return <option key={index}>{category}</option>;
            })}
          </select>
        </Container>
        <div className="input-group text">
          <Input
            label="Search"
            value={term}
            onChange={handleInputChange}
            required
            type="text"
          />
        </div>
        <div>
          <button type="submitF">Search</button>
        </div>
      </Stack>
    </Form>
  );
}
