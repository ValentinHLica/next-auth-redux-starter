import React from "react";

import Layout from "@components/Layout";
import WithAuth from "@components/HOC/withAuth";

const DashboardPage: React.FC = () => {
  return (
    <Layout title="Dashboard">
      <main>
        <h1>Dashboard Page</h1>
      </main>
    </Layout>
  );
};

export default WithAuth(DashboardPage);
