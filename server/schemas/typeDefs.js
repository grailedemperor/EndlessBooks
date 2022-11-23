const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    userName: String
    email: String
    password: String
    books: [Book]
  }

  type Book {
    _id: ID
    title: String
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
    addUser( userName: String!, email: String!, password: String! ): User
    updateUser( userName: String, email: String, password: String): User
    addBook(title: String!, author: String!, genre: String!, year: Int!, read: Boolean): Book
    readBook(bookId:ID!, read: Boolean) : Book
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
