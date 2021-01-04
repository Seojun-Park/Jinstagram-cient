import "react-facebook-login";
import * as React from "react";
import { ReactFacebookLoginProps } from "react-facebook-login";

declare module "react-facebook-login" {
  import { ReactFacebookLoginProps } from "react-facebook-login";

  export interface ReactFacebookLoginProps {
    render: React.FC<{ onClick: () => void }>;
  }
}
