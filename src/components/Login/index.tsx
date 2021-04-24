import React from "react";

import Form from "./Form";

import styles from "@styles/Login/index.module.scss";

const Login: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Login Page</h1>

      <Form />
    </div>
  );
};

export default Login;
