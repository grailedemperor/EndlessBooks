import { gql } from "@apollo/client";

export const AllBooksQuery = gql`
  query Books {
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
`;

export const BookByIDQuery = gql`
  query Books($bookId: ID!) {
    book(bookId: $bookId) {
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
