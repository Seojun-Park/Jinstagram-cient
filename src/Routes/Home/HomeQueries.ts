import { gql } from "@apollo/client";

export const GET_FOLLOW_POST = gql`
  query GetFollowedPost($page: Int!) {
    GetFollowedPost(page: $page) {
      ok
      err
      post {
        id
        caption
        location
        user {
          id
          username
        }
        images {
          url
        }
        comments {
          id
          text
        }
        isLiked
        likes {
          user {
            id
            username
          }
        }
      }
    }
  }
`;
