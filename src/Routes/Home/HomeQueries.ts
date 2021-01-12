import { gql } from "@apollo/client";

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

export const GET_FULL_POST = gql`
  query GetFullPost($page: Int!) {
    GetFullPost(page: $page) {
      ok
      err
      post {
        id
        caption
        location
        isLiked
        user {
          id
          username
          profilePhoto
        }
        images {
          id
          url
        }
        comments {
          id
          text
          user {
            id
            username
          }
          createdAt
        }
        likes {
          id
          userId
        }
        createdAt
      }
    }
  }
`;
