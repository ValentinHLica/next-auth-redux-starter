import type { AppProps } from "next/app";

import AuthWrapper from "@components/HOC/AuthWrapper";

import { wrapper } from "@store/index";
import "../styles/main.scss";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthWrapper>
      <Component {...pageProps} />
    </AuthWrapper>
  );
};

export default wrapper.withRedux(MyApp);
