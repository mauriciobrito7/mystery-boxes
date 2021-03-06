import { createGlobalStyle } from "styled-components";
import { colors, fontConfig } from "./theme";
import background from "../assets/background.svg";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
    font-family: ${fontConfig.font.body}, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    color:${colors.white};
  }

  body {
    height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100vh;
    font-size: ${fontConfig.fontSize.body1};
    background: ${colors.woodsmoke};
    background-image: url(${background});
    background-position-x: right;
    background-repeat: no-repeat;
  }

  a {
    text-decoration:none;
  }

  h1, h2 {
    color:${colors.white}
  }

  h1 {
    font-size: ${fontConfig.fontSize.h1};
  }

  h2 {
    font-size: ${fontConfig.fontSize.h2}
  }

  button {
    font-size: ${fontConfig.fontSize.button};
   
  }

  caption {
    font-size: ${fontConfig.fontSize.caption}
  }



`;

export default GlobalStyles;
