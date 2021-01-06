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
// GraphQL query operation: GetFollowedPost
// ====================================================

export interface GetFollowedPost_GetFollowedPost_post_user {
  __typename: "User";
  id: number;
  username: string;
}

export interface GetFollowedPost_GetFollowedPost_post_images {
  __typename: "Image";
  url: string;
}

export interface GetFollowedPost_GetFollowedPost_post_comments {
  __typename: "Comment";
  id: number;
  text: string;
}

export interface GetFollowedPost_GetFollowedPost_post_likes_user {
  __typename: "User";
  id: number;
  username: string;
}

export interface GetFollowedPost_GetFollowedPost_post_likes {
  __typename: "Like";
  user: GetFollowedPost_GetFollowedPost_post_likes_user;
}

export interface GetFollowedPost_GetFollowedPost_post {
  __typename: "Post";
  id: number;
  caption: string | null;
  location: string | null;
  user: GetFollowedPost_GetFollowedPost_post_user;
  images: (GetFollowedPost_GetFollowedPost_post_images | null)[] | null;
  comments: (GetFollowedPost_GetFollowedPost_post_comments | null)[] | null;
  isLiked: boolean | null;
  likes: (GetFollowedPost_GetFollowedPost_post_likes | null)[] | null;
}

export interface GetFollowedPost_GetFollowedPost {
  __typename: "GetFollowedPostResponse";
  ok: boolean;
  err: string | null;
  post: (GetFollowedPost_GetFollowedPost_post | null)[] | null;
}

export interface GetFollowedPost {
  GetFollowedPost: GetFollowedPost_GetFollowedPost;
}

export interface GetFollowedPostVariables {
  page: number;
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
// GraphQL query operation: Me
// ====================================================

export interface Me_Me_user_following {
  __typename: "User";
  id: number;
  email: string;
  profilePhoto: string | null;
  firstName: string;
  lastName: string;
  username: string;
  intro: string | null;
}

export interface Me_Me_user_follower {
  __typename: "User";
  id: number;
  email: string;
  profilePhoto: string | null;
  firstName: string;
  lastName: string;
  username: string;
  intro: string | null;
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
  following: (Me_Me_user_following | null)[] | null;
  follower: (Me_Me_user_follower | null)[] | null;
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

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
