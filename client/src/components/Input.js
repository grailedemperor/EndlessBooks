import React from "react";

//responsible for creating input and logic that surrounds it.
export default function Input({ label, value, onChange, type }) {
  return (
    <div>
      <label>{label}: </label>
      <input
        onChange={onChange}
        value={value}
        placeholder={label}
        type={type}
      />
    </div>
  );
}
