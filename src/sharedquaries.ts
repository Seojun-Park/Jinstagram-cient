import { gql } from "@apollo/client";

export const ME = gql`
  query Me {
    Me {
      ok
      err
      user {
        id
        email
        profilePhoto
        firstName
        lastName
        username
        intro
        following {
          id
          email
          profilePhoto
          firstName
          lastName
          username
          intro
        }
        follower {
          id
          email
          profilePhoto
          firstName
          lastName
          username
          intro
        }
        posts {
          id
        }
      }
    }
  }
`;

export const SEE_USER = gql`
  query SeeUser($username: String!) {
    SeeUser(username: $username) {
      ok
      err
      user {
        id
        email
        profilePhoto
        firstName
        lastName
        username
        intro
        following {
          id
          email
          profilePhoto
          firstName
          lastName
          username
          intro
        }
        follower {
          id
          email
          profilePhoto
          firstName
          lastName
          username
          intro
        }
        posts {
          id
        }
        comments {
          id
        }
        likes {
          id
        }
      }
    }
  }
`;
