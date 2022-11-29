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
    authors: [String]
    subject: String
    image: String
    link: String
    read: Boolean
    bookId: String
  }

  input InsertedBook {
    title: String
    authors: [String]
    subject: String
    image: String
    link: String
    bookId: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    books: [Book]
    book(bookId: ID!): Book
    user: User
    users: [User]
    toBeRead: [Book]
    me: User
  }

  type Mutation {
    login(email: String, password: String): Auth
    addUser(userName: String!, email: String!, password: String!): Auth
    updateUser(userName: String, email: String, password: String): User
    addBook(newBook: InsertedBook!): ID
    removeBook(bookId: ID!): User
    readBook(bookId: ID!, read: Boolean): Book
  }
`;

module.exports = typeDefs;
