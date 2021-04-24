import React from "react";
import Router from "next/router";

import { connect } from "react-redux";

import AuthLoading from "./authLoading";
import { RootState } from "@store/reducers/index";
import { setLoading, loginUser } from "@store/actions/authActions";

type Props = {
  WrappedComponent: React.FC;
  expectedAuth: boolean;
  location: string;
};

interface AuthInterface {
  [x: string]: any;
}

export const mapStateToProps = (state: RootState) => ({
  loading: state.auth.loading,
  isAuthenticated: state.auth.isAuthenticated,
});

export const mapDispatchToProps = {
  setLoading,
  loginUser,
};

const WithAuthRedirect = ({
  WrappedComponent,
  expectedAuth,
  location,
}: Props) => {
  const WithAuthRedirectWrapper = ({ ...props }) => {
    const { loading, isAuthenticated }: AuthInterface = {
      ...props,
    };

    if (loading) {
      return <AuthLoading />;
    }

    if (typeof window !== "undefined" && expectedAuth !== isAuthenticated) {
      Router.push(location);
      return <></>;
    }

    return <WrappedComponent {...props} />;
  };

  return WithAuthRedirectWrapper;
};

const AuthHoc = ({ WrappedComponent, expectedAuth, location }: Props) =>
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(WithAuthRedirect({ WrappedComponent, expectedAuth, location }));

export default AuthHoc;
