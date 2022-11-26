import { gql } from "@apollo/client";
// server (computer, somewheree, facebook, apple, gmail, itunes)
// store, crud => create, read, update, delete
// creat, update,delete => graphql mutation
// read query

// client (desktop,laptop,mobile, browser)
export const LOGIN_MUTATION = gql`
  mutation Login($password: String, $email: String) {
    login(password: $password, email: $email) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($userName: String!, $email: String!, $password: String!) {
    addUser(userName: $userName, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_BOOK = gql`
  mutation addBook($newBook: InsertedBook!) {
    addBook(newBook: $newBook) {
      _id
      username
      email
      books {
        _id
        title
        authors
        subject
        image
        link
        read
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      books {
        _id
        title
        authors
        subject
        image
        link
        read
      }
    }
  }
`;
