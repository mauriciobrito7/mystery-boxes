import styled from "styled-components/macro";
import { colors } from "../../styles/theme";

export const CustomButton = styled.button`
  background: ${colors.gradient};
  color: ${colors.white};
  min-width: 119px;
  height: 40px;
  padding: 12px 24px;
  border: none;
  border-radius: 2.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  ${($props) =>
    $props.secondary &&
    `
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
      font-weight: bold;
      &::before, &::after {
        position: absolute; 
        content: '';
        border-radius: inherit;
      }

      &::before {
        background: ${colors.mainBackground};
        top: 0px; 
        bottom: 0px;
        left: 0px; 
        right: 0px;
        z-index: -1;
      }
      &::after {
        top: -1px; 
        bottom: -1px;
        left: -1px; 
        right: -1px;
        background: ${colors.gradient};
        z-index: -2;
      }
    `}
`;
