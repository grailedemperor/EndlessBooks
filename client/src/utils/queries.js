import { gql } from "@apollo/client";

export const AllBooksQuery = gql/* GraphQL */ `
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

// To show signed in user's books
export const GET_ME = gql`
  query me {
    me {
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

export const Books_TO_BE_READ = gql`
  query ToBeRead {
    toBeRead {
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
