import styled from "styled-components/macro";
import { colors, borderRadius, fontConfig } from "../../styles/theme";

export const CardContainer = styled.div`
  background: ${colors.mainBackground};
  color: ${colors.white};
  border-radius: ${borderRadius};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 23%;
  padding: 1em;

  &:last-of-type {
    margin-right: 0;
  }
`;

export const CardInfo = styled.p`
  font-size: ${fontConfig.fontSize.body1};
  width: 100%;
  margin: 1em auto;
  text-align: center;
`;

export const CardLabel = styled.div`
  width: 100%;
  background: ${colors.blue};
  padding: 0.5em;
  border-radius: ${borderRadius};
  color: ${colors.woodsmoke};
  font-size: ${fontConfig.fontSize.body2};
  font-weight: bold;
  text-transform: uppercase;
`;
