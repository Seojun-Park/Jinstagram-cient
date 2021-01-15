/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: isLoggedIn
// ====================================================

export interface isLoggedIn {
  isLoggedIn: boolean;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ToggleLike
// ====================================================

export interface ToggleLike_ToggleLike {
  __typename: "ToggleLikeResponse";
  ok: boolean;
  err: string | null;
}

export interface ToggleLike {
  ToggleLike: ToggleLike_ToggleLike;
}

export interface ToggleLikeVariables {
  postId: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddComment
// ====================================================

export interface AddComment_AddComment {
  __typename: "AddCommentResponse";
  ok: boolean;
  err: string | null;
}

export interface AddComment {
  AddComment: AddComment_AddComment;
}

export interface AddCommentVariables {
  text: string;
  postId: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: EditUser
// ====================================================

export interface EditUser_EditUser {
  __typename: "EditUserResponse";
  ok: boolean;
  err: string | null;
}

export interface EditUser {
  EditUser: EditUser_EditUser;
}

export interface EditUserVariables {
  profilePhoto?: string | null;
  intro?: string | null;
  username?: string | null;
  firstName?: string | null;
  lastName?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: FacebookConnect
// ====================================================

export interface FacebookConnect_FacebookConnect {
  __typename: "FacebookConnectResponse";
  ok: boolean;
  err: string | null;
  token: string | null;
}

export interface FacebookConnect {
  FacebookConnect: FacebookConnect_FacebookConnect;
}

export interface FacebookConnectVariables {
  firstName: string;
  lastName: string;
  email: string;
  fbId: string;
  profilePhoto?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: GoogleConnect
// ====================================================

export interface GoogleConnect_GoogleConnect {
  __typename: "GoogleConnectResponse";
  ok: boolean;
  err: string | null;
  token: string | null;
}

export interface GoogleConnect {
  GoogleConnect: GoogleConnect_GoogleConnect;
}

export interface GoogleConnectVariables {
  googleId: string;
  firstName: string;
  lastName: string;
  email: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateAccount
// ====================================================

export interface CreateAccount_CreateAccount {
  __typename: "CreateAccountResponse";
  ok: boolean;
  err: string | null;
}

export interface CreateAccount {
  CreateAccount: CreateAccount_CreateAccount;
}

export interface CreateAccountVariables {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  intro: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RequestCode
// ====================================================

export interface RequestCode_RequestCode {
  __typename: "RequestCodeResponse";
  ok: boolean;
  err: string | null;
  code: string | null;
}

export interface RequestCode {
  RequestCode: RequestCode_RequestCode;
}

export interface RequestCodeVariables {
  email: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ConfirmSecret
// ====================================================

export interface ConfirmSecret_ConfirmSecret {
  __typename: "ConfirmSecretResponse";
  ok: boolean;
  err: string | null;
  token: string | null;
}

export interface ConfirmSecret {
  ConfirmSecret: ConfirmSecret_ConfirmSecret;
}

export interface ConfirmSecretVariables {
  email: string;
  code: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetChatRoom
// ====================================================

export interface GetChatRoom_GetChatRoom_chat_from {
  __typename: "User";
  id: number;
  username: string;
}

export interface GetChatRoom_GetChatRoom_chat_to {
  __typename: "User";
  id: number;
  username: string;
}

export interface GetChatRoom_GetChatRoom_chat_messages_user {
  __typename: "User";
  id: number;
  username: string;
}

export interface GetChatRoom_GetChatRoom_chat_messages {
  __typename: "Message";
  id: number;
  text: string;
  user: GetChatRoom_GetChatRoom_chat_messages_user;
  createdAt: string | null;
}

export interface GetChatRoom_GetChatRoom_chat {
  __typename: "Chat";
  id: number;
  from: GetChatRoom_GetChatRoom_chat_from | null;
  to: GetChatRoom_GetChatRoom_chat_to | null;
  messages: (GetChatRoom_GetChatRoom_chat_messages | null)[] | null;
}

export interface GetChatRoom_GetChatRoom {
  __typename: "GetChatRoomResponse";
  ok: boolean;
  err: string | null;
  chat: GetChatRoom_GetChatRoom_chat | null;
}

export interface GetChatRoom {
  GetChatRoom: GetChatRoom_GetChatRoom;
}

export interface GetChatRoomVariables {
  chatId: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: MessageSubscription
// ====================================================

export interface MessageSubscription_MessageSubscription_user {
  __typename: "User";
  id: number;
}

export interface MessageSubscription_MessageSubscription {
  __typename: "Message";
  id: number;
  text: string;
  user: MessageSubscription_MessageSubscription_user;
}

export interface MessageSubscription {
  MessageSubscription: MessageSubscription_MessageSubscription | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SendMessage
// ====================================================

export interface SendMessage_SendMessage_message {
  __typename: "Message";
  id: number;
  text: string;
  createdAt: string | null;
}

export interface SendMessage_SendMessage {
  __typename: "SendMessageResponse";
  ok: boolean;
  err: string | null;
  message: SendMessage_SendMessage_message | null;
}

export interface SendMessage {
  SendMessage: SendMessage_SendMessage;
}

export interface SendMessageVariables {
  text: string;
  chatId: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UploadPost
// ====================================================

export interface UploadPost_UploadPost {
  __typename: "UploadPostResponse";
  ok: boolean;
  err: string | null;
}

export interface UploadPost {
  UploadPost: UploadPost_UploadPost;
}

export interface UploadPostVariables {
  location?: string | null;
  caption?: string | null;
  images?: (string | null)[] | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetFullPost
// ====================================================

export interface GetFullPost_GetFullPost_post_user {
  __typename: "User";
  id: number;
  username: string;
  profilePhoto: string | null;
}

export interface GetFullPost_GetFullPost_post_images {
  __typename: "Image";
  id: number;
  url: string;
}

export interface GetFullPost_GetFullPost_post_comments_user {
  __typename: "User";
  id: number;
  username: string;
}

export interface GetFullPost_GetFullPost_post_comments {
  __typename: "Comment";
  id: number;
  text: string;
  user: GetFullPost_GetFullPost_post_comments_user;
  createdAt: string | null;
}

export interface GetFullPost_GetFullPost_post_likes {
  __typename: "Like";
  id: number;
  userId: number | null;
}

export interface GetFullPost_GetFullPost_post {
  __typename: "Post";
  id: number;
  caption: string | null;
  location: string | null;
  isLiked: boolean | null;
  user: GetFullPost_GetFullPost_post_user;
  images: (GetFullPost_GetFullPost_post_images | null)[] | null;
  comments: (GetFullPost_GetFullPost_post_comments | null)[] | null;
  likes: (GetFullPost_GetFullPost_post_likes | null)[] | null;
  createdAt: string | null;
}

export interface GetFullPost_GetFullPost {
  __typename: "GetFullPostResponse";
  ok: boolean;
  err: string | null;
  post: (GetFullPost_GetFullPost_post | null)[] | null;
}

export interface GetFullPost {
  GetFullPost: GetFullPost_GetFullPost;
}

export interface GetFullPostVariables {
  page: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ToggleFollowing
// ====================================================

export interface ToggleFollowing_ToggleFollowing {
  __typename: "ToggleFollowingResponse";
  ok: boolean;
  err: string | null;
}

export interface ToggleFollowing {
  ToggleFollowing: ToggleFollowing_ToggleFollowing;
}

export interface ToggleFollowingVariables {
  username: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateChat
// ====================================================

export interface CreateChat_CreateChat_chat {
  __typename: "Chat";
  id: number;
}

export interface CreateChat_CreateChat {
  __typename: "CreateChatResponse";
  ok: boolean;
  err: string | null;
  chat: CreateChat_CreateChat_chat | null;
}

export interface CreateChat {
  CreateChat: CreateChat_CreateChat;
}

export interface CreateChatVariables {
  toId: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Me
// ====================================================

export interface Me_Me_user_followings {
  __typename: "Following";
  id: number;
  userId: number | null;
}

export interface Me_Me_user_followers {
  __typename: "Follower";
  id: number;
  userId: number | null;
}

export interface Me_Me_user_posts {
  __typename: "Post";
  id: number;
}

export interface Me_Me_user {
  __typename: "User";
  id: number;
  email: string;
  profilePhoto: string | null;
  firstName: string;
  lastName: string;
  username: string;
  intro: string | null;
  followings: (Me_Me_user_followings | null)[] | null;
  followers: (Me_Me_user_followers | null)[] | null;
  posts: (Me_Me_user_posts | null)[] | null;
}

export interface Me_Me {
  __typename: "MeResponse";
  ok: boolean;
  err: string | null;
  user: Me_Me_user | null;
}

export interface Me {
  Me: Me_Me;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SeeUser
// ====================================================

export interface SeeUser_SeeUser_user_followings {
  __typename: "Following";
  id: number;
  userId: number | null;
}

export interface SeeUser_SeeUser_user_followers {
  __typename: "Follower";
  id: number;
  userId: number | null;
}

export interface SeeUser_SeeUser_user_posts_images {
  __typename: "Image";
  url: string;
}

export interface SeeUser_SeeUser_user_posts {
  __typename: "Post";
  id: number;
  caption: string | null;
  location: string | null;
  images: (SeeUser_SeeUser_user_posts_images | null)[] | null;
}

export interface SeeUser_SeeUser_user_comments {
  __typename: "Comment";
  id: number;
}

export interface SeeUser_SeeUser_user_likes {
  __typename: "Like";
  id: number;
}

export interface SeeUser_SeeUser_user {
  __typename: "User";
  id: number;
  email: string;
  profilePhoto: string | null;
  firstName: string;
  lastName: string;
  username: string;
  isFollowing: boolean | null;
  intro: string | null;
  followings: (SeeUser_SeeUser_user_followings | null)[] | null;
  followers: (SeeUser_SeeUser_user_followers | null)[] | null;
  posts: (SeeUser_SeeUser_user_posts | null)[] | null;
  comments: (SeeUser_SeeUser_user_comments | null)[] | null;
  likes: (SeeUser_SeeUser_user_likes | null)[] | null;
}

export interface SeeUser_SeeUser {
  __typename: "SeeUserResponse";
  ok: boolean;
  err: string | null;
  user: SeeUser_SeeUser_user | null;
}

export interface SeeUser {
  SeeUser: SeeUser_SeeUser;
}

export interface SeeUserVariables {
  username: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SearchUser
// ====================================================

export interface SearchUser_SearchUser_users {
  __typename: "User";
  id: number;
  username: string;
  profilePhoto: string | null;
}

export interface SearchUser_SearchUser {
  __typename: "SearchUserResponse";
  ok: boolean;
  err: string | null;
  users: (SearchUser_SearchUser_users | null)[] | null;
}

export interface SearchUser {
  SearchUser: SearchUser_SearchUser;
}

export interface SearchUserVariables {
  term: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetChat
// ====================================================

export interface GetChat_GetChat_chat_from {
  __typename: "User";
  id: number;
  profilePhoto: string | null;
  username: string;
}

export interface GetChat_GetChat_chat_to {
  __typename: "User";
  id: number;
  profilePhoto: string | null;
  username: string;
}

export interface GetChat_GetChat_chat_messages_user {
  __typename: "User";
  id: number;
  username: string;
}

export interface GetChat_GetChat_chat_messages {
  __typename: "Message";
  user: GetChat_GetChat_chat_messages_user;
  text: string;
  createdAt: string | null;
}

export interface GetChat_GetChat_chat {
  __typename: "Chat";
  id: number;
  from: GetChat_GetChat_chat_from | null;
  to: GetChat_GetChat_chat_to | null;
  messages: (GetChat_GetChat_chat_messages | null)[] | null;
}

export interface GetChat_GetChat {
  __typename: "GetChatResponse";
  ok: boolean;
  err: string | null;
  chat: (GetChat_GetChat_chat | null)[] | null;
}

export interface GetChat {
  GetChat: GetChat_GetChat;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
