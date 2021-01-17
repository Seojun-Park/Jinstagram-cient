import { gql } from "@apollo/client";

export const TOGGLE_FOLLOWING = gql`
  mutation ToggleFollowing($username: String!, $action: String!) {
    ToggleFollowing(username: $username, action: $action) {
      ok
      err
    }
  }
`;

export const CREATE_CHAT = gql`
  mutation CreateChat($toId: Int!) {
    CreateChat(toId: $toId) {
      ok
      err
      chat {
        id
      }
    }
  }
`;
