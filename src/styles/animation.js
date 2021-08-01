import { keyframes, css } from "styled-components";

const fadeInKeyFrame = keyframes`
  from {
    opacity: 0;
  }

  to  {
    opacity: 1;
  }
`;

export const fadeIn = ({ time = "0.3s", type = "ease", delay = "0s" }) => {
  return css`
    animation: ${time} ${fadeInKeyFrame} ${type};
    will-change: opacity;
  `;
};
