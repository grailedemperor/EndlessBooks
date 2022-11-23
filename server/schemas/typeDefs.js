const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    books: [Book]
  }

  type Book {
    _id: ID
    name: String
    author: String
    genre: String
    year: Int
    read: Boolean
  }

  type Query {
    books: [Book]!
    book(bookId: ID!): Book
    user: User
  }

  type Mutation {
    addUser( firstName: String!, lastName: String!, email: String!, password: String! ): User
    updateUser( firstName: String, lastName: String, email: String, password: String): User
    addBook(name: String!, author: String!, genre: String!, year: Int!, read: Boolean): Book
    updateBook(bookId:ID!, read: Boolean) : Book
  }
`;

module.exports = typeDefs;
