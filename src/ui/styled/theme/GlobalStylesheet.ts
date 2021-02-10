import { createGlobalStyle } from "styled-components";
import theme from "./tokens";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    overflow: hidden;
    font-family: Raleway;
  }

  body {
    position: relative;
    background-color: ${theme.colors.light};
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
    overflow: auto;
    overscroll-behavior: none;
  }


  header {
    margin: 0;
    align-items: center;
    display: flex;
    padding: 24px 24px;
    justify-content: space-between;
    width: 100%;
  }


  button {
    color: ${theme.colors.bluePrimary};
    border-style: solid;
      border-color: ${theme.colors.bluePrimary};
    font-size: 20px;
    padding: 8px 24px;
    border-radius: 8px;
    background: transparent;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
