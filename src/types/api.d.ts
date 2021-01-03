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
