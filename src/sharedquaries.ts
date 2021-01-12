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
        isFollowing
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
          caption
          location
          images {
            url
          }
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

export const SEARCH_USER = gql`
  query SearchUser($term: String!) {
    SearchUser(term: $term) {
      ok
      err
      users {
        id
        username
        profilePhoto
      }
    }
  }
`;
