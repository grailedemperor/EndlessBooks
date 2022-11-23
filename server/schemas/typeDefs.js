const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    userName: String
    email: String
    books: [Book]
  }

  type Book {
    _id: ID
    name: String
    author: String
    genre: String
    year: String
    read: Boolean
    title: String
  }
`;

module.exports = typeDefs;
