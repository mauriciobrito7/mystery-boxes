import styled from "styled-components/macro";
import { colors } from "../../styles/theme";

export const BoxDetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const BoxDetailTitle = styled.h2`
  margin: 0 auto;
`;

export const BoxDetailNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 2em;
`;

export const BoxDetailPrice = styled.span`
  background: ${colors.gradient};
  font-weight: 400;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const BoxDetailImg = styled.img`
  margin-bottom: 2em;
`;
