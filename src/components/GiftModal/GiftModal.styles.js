import styled from "styled-components/macro";
import { colors } from "../../styles/theme";

export const GiftModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const GiftTitle = styled.h2`
  margin: 0 auto;
  margin-bottom: 1.5em;
`;

export const GiftPrice = styled.span`
  background: ${colors.gradient};
  font-weight: 400;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const GiftButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 311px;
  margin-top: 1.5em;
  & button:first-of-type {
    margin-right: 1em;
  }
`;
