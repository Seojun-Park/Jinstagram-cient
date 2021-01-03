import { gql } from "@apollo/client";

export const FACEBOOK_CONNECT = gql`
  mutation FacebookConnect(
    $firstName: String!
    $lastName: String!
    $email: String!
    $fbId: String!
    $profilePhoto: String
  ) {
    FacebookConnect(
      firstName: $firstName
      lastName: $lastName
      email: $email
      fbId: $fbId
      profilePhoto: $profilePhoto
    ) {
      ok
      err
      token
    }
  }
`;

export const GOOGLE_CONNECT = gql`
  mutation GoogleConnect(
    $googleId: String!
    $firstName: String!
    $lastName: String!
    $email: String!
  ) {
    GoogleConnect(
      googleId: $googleId
      firstName: $firstName
      lastName: $lastName
      email: $email
    ) {
      ok
      err
      token
    }
  }
`;
