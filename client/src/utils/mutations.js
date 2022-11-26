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
