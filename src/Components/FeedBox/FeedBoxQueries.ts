import { gql } from "@apollo/client";

export const TOGGLE_LIKE = gql`
  mutation ToggleLike($postId: Int!) {
    ToggleLike(postId: $postId) {
      ok
      err
      ret
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation AddComment($text: String!, $postId: Int!) {
    AddComment(text: $text, postId: $postId) {
      ok
      err
    }
  }
`;

export const GET_POST = gql`
  query GetPost($postId: Int!) {
    GetPost(postId: $postId) {
      ok
      err
      post {
        id
        likes {
          id
          userId
        }
      }
    }
  }
`;

export const GET_LIKE = gql`
  query GetLike($postId: Int!) {
    GetLike(postId: $postId) {
      ok
      err
      likes {
        id
        userId
      }
    }
  }
`;
