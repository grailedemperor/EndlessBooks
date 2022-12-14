const { Schema, model } = require("mongoose");
const User = require("./User");

const bookSchema = new Schema({
  title: {
    type: String,
    required: false,
    trim: true,
  },
  authors: [
    {
      type: String,
      required: false,
    },
  ],
  subject: {
    type: String,
    required: false,
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
    required: false,
  },
  bookId: {
    type: String,
    required: false,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Book = model("Book", bookSchema);

module.exports = Book;
