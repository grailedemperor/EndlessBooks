//responsible for creating input and logic that surrounds it.
import React from "react";

export default function Input({ label, value, onChange, ...props }) {
  return (
    <div>
      <label>{label}: </label>
      <input
        onChange={(e) => onChange(e.target.value)}
        value={value}
        placeholder={label}
        {...props}
      />
    </div>
  );
}
