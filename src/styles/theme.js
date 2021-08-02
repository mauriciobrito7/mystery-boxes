export const colors = {
  white: "#ffffff",
  red: "#F3111A",
  blue: "#53C0E5",
  woodsmoke: "#121617",
  jaffa: "#F38A38",
  bombay: "#AEAEAF",
  jungleGreen: "#2BBF6D",
  gallery: "#F0F0F0",
  oldBrick: "#8B2220",
  mariner: "#2A61CA",
  blackBackground: "#23282C",
  mainBackground: "#344046",
  grandient: "linear-gradient(to right, #fccf31, #f55555)",
};

export const fontConfig = {
  font: { body: "Roboto" },
  fontSize: {
    body1: {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "15px",
      lineHeight: "15px",
    },
    body2: {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "14px",
      lineHeight: "14px",
    },
    caption: {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "12px",
      lineHeight: "12px",
    },
    h1: {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "28px",
      lineHeight: "33px",
    },
    h2: {
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "24px",
      lineHeight: "28px",
    },
    button: {
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "16px",
    },
  },
};

export const breakpoints = {
  mobile: "375px",
  tablet: "768px",
  desktop: "1200px",
  large: "1400px",
};

export const device = {
  mobile: (styles) => {
    return `@media (min-width:${breakpoints.mobile}){
      ${styles}
    }`;
  },
  tablet: (styles) => {
    return `@media (min-width:${breakpoints.tablet}){
      ${styles}
    }`;
  },
  desktop: (styles) => {
    return `@media (min-width:${breakpoints.desktop}){
      ${styles}
    }`;
  },
  large: (styles) => {
    return `@media (min-width:${breakpoints.large}){
      ${styles}
    }`;
  },
  custom: (styles, width) => {
    return `@media (min-width:${width}){
      ${styles}
    }`;
  },
};
