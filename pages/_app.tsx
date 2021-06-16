import type { AppComponent } from "next/dist/next-server/lib/router/router";
import GlobalStyle from "../styles/GlobalStyle";

const App: AppComponent = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default App;
