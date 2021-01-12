import { gql } from "@apollo/client";

export const TOGGLE_FOLLOWING = gql`
  mutation ToggleFollowing($username: String!) {
    ToggleFollowing(username: $username) {
      ok
      err
    }
  }
`;
