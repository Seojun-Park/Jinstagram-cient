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
          profilePhoto
        }
        to {
          id
          username
          profilePhoto
        }
        messages {
          id
          text
          user {
            id
            username
          }
          createdAt
        }
      }
    }
  }
`;

export const MESSAGE_SUBSCRIPTION = gql`
  subscription MessageSubscription {
    MessageSubscription {
      id
      text
      user {
        id
      }
    }
  }
`;

export const SEND_MESSAGE = gql`
  mutation SendMessage($text: String!, $chatId: Int!) {
    SendMessage(text: $text, chatId: $chatId) {
      ok
      err
      message {
        id
        text
        createdAt
      }
    }
  }
`;
