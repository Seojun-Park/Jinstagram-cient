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

export const UPLOAD_POST = gql`
  mutation UploadPost($location: String, $caption: String, $images: [String]) {
    UploadPost(location: $location, caption: $caption, images: $images) {
      ok
      err
    }
  }
`;
