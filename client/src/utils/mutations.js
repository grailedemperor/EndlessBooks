import { gql } from "@apollo/client";



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

export const READ_BOOK = gql`
  mutation readBook($bookId: ID!) {
    read(bookId: $bookId) {
      _id
      title
      authors
      subject
      image
      link
      read
    }
  }
`;

export const ADDBOOK_MUTATION = gql`
  mutation AddBook(
    $title: String!
    $subject: String!
    $image: String!
    $link: String!
    $bookId: String!
  ) {
    addBook(
      newBook: {
        title: $title
        subject: $subject
        image: $image
        link: $link
        bookId: $bookId
      }
    )
  }
`;
