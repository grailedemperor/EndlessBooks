const { Schema, model } = require('mongoose');

const bookSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    author: {
      type: String,
      required: true
    },
    genre: {
      type: String,
      required: true
    },
    year: {
      type: Number,
      required: true
    },
    read: {
       type: Boolean,
       required: true 
    }
  }
);

const Book = model('Book', bookSchema);

module.exports = Book;