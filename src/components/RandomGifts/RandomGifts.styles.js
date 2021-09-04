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

export const GiftBand = styled.div`
  display: inline-flex;
  width: auto;
  height: 100%;
  /* border: 1px dashed red; */
  animation: ${(props) => GiftCardAnimation(props.numberOfElements)} 1s 0.5s
    infinite linear;
  animation-play-state: ${(props) =>
    props.stopAnimation ? "paused" : "running"};
`;

export const GiftCard = styled.div`
  background: ${colors.blackBackground};
  width: ${widthOfCard}px;
  height: 242px;
  border-radius: ${borderRadius};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-right: ${marginOfCard}px;
  &:last-of-type {
    margin-right: 0;
  }
`;

export const GiftImgWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  height: 148px;
`;

export const GiftImg = styled.img`
  margin-bottom: 1em;
`;

export const GiftTitle = styled.span`
  text-align: center;
  margin-bottom: 1em;
  margin-left: auto;
  margin-right: auto;
  width: 140px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const GiftLabel = styled.span`
  color: ${colors.jaffa};
`;

export const GiftSpinner = styled.div`
  position: absolute;
  width: 6.04px;
  height: 274px;
  left: calc(50% - (6.04px / 2));
  top: 0px;
  background: red;
`;
