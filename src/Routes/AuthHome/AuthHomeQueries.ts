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

export const CREATE_ACCOUNT = gql`
  mutation CreateAccount(
    $username: String!
    $email: String!
    $firstName: String!
    $lastName: String!
    $intro: String!
  ) {
    CreateAccount(
      username: $username
      email: $email
      firstName: $firstName
      lastName: $lastName
      intro: $intro
    ) {
      ok
      err
    }
  }
`;

export const REQUEST_CODE = gql`
  mutation RequestCode($email: String!) {
    RequestCode(email: $email) {
      ok
      err
      code
    }
  }
`;

export const CONFIRM_SECRET = gql`
  mutation ConfirmSecret($email: String!, $code: String!) {
    ConfirmSecret(email: $email, code: $code){
      ok
      err
      token
    }
  }
`;
