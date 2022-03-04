import styled from "styled-components/macro";
import { colors, borderRadius } from "../../styles/theme";

const widthOfCard = 180;
const heightofCard = 242;

export const GiftCard = styled.div`
	background: ${colors.blackBackground};
	width: ${widthOfCard}px;
	height: ${heightofCard}px;
	border-radius: ${borderRadius};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

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
