import { AppProps } from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";

import { FirebaseProvider } from "@contexts/firebase-context";
import { GlobalStyle, tokens } from "ui/styled/theme";
import initFirebase from "configs/client";

const client = initFirebase();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <FirebaseProvider client={client}>
        <ThemeProvider theme={tokens}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </FirebaseProvider>
    </React.StrictMode>
  );
}
