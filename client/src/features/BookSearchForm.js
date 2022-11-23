import React, { useState } from "react";
import Input from "../components/Input";

const categories = ["Genre", "Author", "Title"];

export default function BookSearchForm({ onSubmit }) {
  const [category, setCategory] = useState("");
  const [term, setTerm] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ category, term });
  }

  return (
    <section className="input-bx">
      <form onSubmit={handleSubmit}>
        <div>
          <select
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Please select a category</option>
            {categories.map((category) => {
              return <option>{category}</option>;
            })}
          </select>
        </div>
        <div>
          <Input label="Search" value={term} onChange={setTerm} required />
        </div>
        <div>
          <button type="submit">Search</button>
        </div>
      </form>
    </section>
  );
}
