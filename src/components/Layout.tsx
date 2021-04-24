import React, { Fragment } from "react";
import Head from "next/head";

import Header from "@components/Header";
import Footer from "@components/Footer";

type Props = {
  title?: string;
};

const Layout: React.FC<Props> = ({ title, children }) => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>

      <Header />

      {children}

      <Footer />
    </Fragment>
  );
};

export default Layout;
