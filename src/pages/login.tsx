import React from "react";

import Layout from "@components/Layout";
import WithOutAuth from "@components/HOC/withoutAuth";
import Login from "@components/Login";

const LoginPage: React.FC = () => {
  return (
    <Layout title="Login">
      <main>
        <Login />
      </main>
    </Layout>
  );
};

export default WithOutAuth(LoginPage);
