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
        followings {
          id
          userId
        }
        followers {
          id
          userId
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
        followings {
          id
          user {
            username
            profilePhoto
          }
        }
        followers {
          id
          user {
            username
            profilePhoto
          }
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

export const GET_CHAT = gql`
  query GetChat {
    GetChat {
      ok
      err
      chat {
        id
        from {
          id
          profilePhoto
          username
        }
        to {
          id
          profilePhoto
          username
        }
        messages {
          user {
            id
            username
          }
          text
          createdAt
        }
      }
    }
  }
`;
