import { gql } from "@apollo/client";

export const EDIT_USER = gql`
  mutation EditUser(
    $profilePhoto: String
    $intro: String
    $username: String
    $firstName: String
    $lastName: String
  ) {
    EditUser(
      profilePhoto: $profilePhoto
      intro: $intro
      username: $username
      firstName: $firstName
      lastName: $lastName
    ) {
      ok
      err
    }
  }
`;
