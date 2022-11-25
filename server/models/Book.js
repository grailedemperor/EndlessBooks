const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  authors: [
    {
      type: String,
      required: true,
    },
  ],
  subject: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  link: {
    type: String,
    required: false,
  },
  read: {
    type: Boolean,
    required: true,
  },
});

const Book = model("Book", bookSchema);

module.exports = Book;
