import { Container, Form, Stack } from "react-bootstrap";
import React, { useState } from "react";
import Input from "../components/Input";
import { searchGoogleBooks } from "../utils/API";
const categories = ["Genre", "Author", "Title"];

export default function BookSearchForm({ onResults }) {
  const [category, setCategory] = useState("");
  const [term, setTerm] = useState("");

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
      const results = await searchGoogleBooks(term, category);
      onResults(results);
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
            required={true}
            type="text"
          />
        </div>
        <div>
          <button type="submit">Search</button>
        </div>
      </Stack>
    </Form>
  );
}
