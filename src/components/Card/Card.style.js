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
  height: 30px;
  border-radius: ${borderRadius};
  color: ${colors.woodsmoke};
  font-size: ${fontConfig.fontSize.body2};
  font-weight: bold;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.labelColor ? colors[props.labelColor] : colors.blue};
  position: relative;
`;

export const CardPrice = styled.span`
  width: 60px;
  height: 22px;
  border-radius: ${borderRadius};
  padding: 8px 4px;
  background: ${colors.white};
  color: ${colors.woodsmoke};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0.5em;
`;
