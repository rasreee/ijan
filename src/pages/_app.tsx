import firebase from "firebase";
import { AppProps } from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";

import { FirebaseContext } from "@contexts";
import { GlobalStyle, tokens } from "@theme";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <FirebaseContext.Provider value={{ firebase }}>
        <ThemeProvider theme={tokens}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </FirebaseContext.Provider>
    </React.StrictMode>
  );
}
