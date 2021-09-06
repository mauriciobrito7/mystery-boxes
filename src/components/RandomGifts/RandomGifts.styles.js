import styled, { keyframes } from "styled-components/macro";
import { colors, borderRadius } from "../../styles/theme";

const widthOfCard = 180;
const heightofCard = 242;
const marginOfCard = 24;
const widthTotalToTranslate = widthOfCard + marginOfCard;

const GiftCardAnimation = (numOfElement = 6) => keyframes`
 	0% { transform: translateX(0); }
	100% { transform: translateX(calc(-${widthTotalToTranslate}px * ${numOfElement}))}
}
`;

export const GiftsContainer = styled.div`
  width: 100%;
  height: 274px;
  background: ${colors.mainBackground};
  border-radius: 8px;
  margin-bottom: 2em;
  padding: 1em;
  overflow: hidden;
  position: relative;

  &::before,
  &::after {
    background: linear-gradient(
      to right,
      ${colors.blackBackground},
      transparent
    );
    content: "";
    height: ${heightofCard}px;
    position: absolute;
    width: 100px;
    z-index: 2;
    opacity: 0.5;
    top: calc(50% - (${heightofCard}px / 2));
  }
  &::after {
    right: 0;
    transform: rotateZ(180deg);
  }

  &::before {
    left: 0;
  }
`;

export const GiftsBand = styled.div`
  display: inline-flex;
  width: auto;
  height: 100%;
  /* border: 1px dashed red; */
  animation: ${(props) => GiftCardAnimation(props.numberOfElements)} 1s 0.5s
    infinite linear;
  animation-play-state: ${(props) =>
    props.stopAnimation ? "paused" : "running"};
`;

export const GiftSpinner = styled.div`
  position: absolute;
  width: 6.04px;
  height: 274px;
  left: calc(50% - (6.04px / 2));
  top: 0px;
  background: red;
`;
