import React, { Fragment, useEffect } from "react";

import { connect } from "react-redux";

import { loginUser, setLoading } from "@store/actions/authActions";
import fakeRequest from "@utils/fakeRequest";

type Props = {
  loginUser: () => void;
  setLoading: () => void;
};

const AuthWrapper: React.FC<Props> = ({ children, loginUser, setLoading }) => {
  const validateToken = async () => {
    const user = localStorage.getItem("user");

    if (!user) {
      setLoading();
      return;
    }

    try {
      await fakeRequest(1000);
      loginUser();
      setLoading();
    } catch (error) {
      setLoading();
    }
  };

  useEffect(() => {
    validateToken();
  }, []);

  return <Fragment>{children}</Fragment>;
};

const mapDispatchToProps = { loginUser, setLoading };

export default connect(null, mapDispatchToProps)(AuthWrapper);
