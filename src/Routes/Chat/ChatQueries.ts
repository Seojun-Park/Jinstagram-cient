import { gql } from "@apollo/client";

export const GET_CHAT_ROOM = gql`
  query GetChatRoom($chatId: Int!) {
    GetChatRoom(chatId: $chatId) {
      ok
      err
      chat {
        id
        from {
          id
          username
        }
        to {
          id
          username
        }
        messages {
          id
          text
          user{
              id
              username
          }
          createdAt
        }
      }
    }
  }
`;
