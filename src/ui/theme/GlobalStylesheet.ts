import { createGlobalStyle } from "styled-components";
import theme from "./tokens";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    overflow: hidden;
    font-family: monospace;
  }

  body {
    position: relative;
    background-color: ${theme.colors.offWhite};
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
    overflow: auto;
    overscroll-behavior: none;
  }

  p { color: ${theme.colors.offBlack} }

  header {
    margin: 0;
    align-items: center;
    display: flex;
    padding: 24px 24px;
    justify-content: space-between;
    width: 100%;
  }


  button {
    color: ${theme.colors.lilac};
    border-style: solid;
      border-color: ${theme.colors.lilac};
    font-size: 20px;
    padding: 8px 24px;
    border-radius: 8px;
    background: transparent;
  }

  button.canvas-dialog-button {
    border-style: none;
    height: 32px;
    background-color: transparent;
    border-radius: 0;
    padding: 0;
    margin: 0;
    p {
      padding: 0;
      margin: 0;
      font-size: 18px;
    }
  }

  input {
    border-style: solid;
    border-radius: 4px;
    border-width: 1px;
    height: 48px;
    padding: 0 8px;
    margin-bottom: 24px;
  }

  a {
    &:visited {
      color: ${theme.colors.lilac};
    }
    text-decoration:none;
  }

  a.logo {
    align-items: center;
    display: flex;
    height: 48px; width: 48px;
  }
`;

export default GlobalStyle;
