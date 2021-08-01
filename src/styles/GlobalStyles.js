import { createGlobalStyle } from "styled-components";
import { colors } from "./theme";

const GlobalStyles = createGlobalStyle`
  
  @font-face{
    font-family: 'Roboto';
    src : url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
  }

  * {
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
      height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100vh;
    font-size: 16px;
    background: ${colors.blackBackground};
    color:${colors.white};
  }

  a {
    text-decoration:none;
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: 'Roboto';
    color: ${colors.white}
  }

  h1 {
    font-size: 1em * 1.7;
  }

  h2 {
    font-size: 1em * 1.35;
    font-weight: bold;
  }

  button {
    font-size: 0.8em;
    font-weight: medium;
  }

  .caption {
    font-size: 12px;
    &.bold {
      font-weight: bold;
    }
  }


`;

export default GlobalStyles;
