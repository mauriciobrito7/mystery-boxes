import styled from "styled-components/macro";
import { breakpoints, device } from "../../styles/theme";

export const MainContent = styled.main`
  margin: 0 1em;
  max-width: ${breakpoints.desktop};
  ${device.desktop`
    margin-right: auto;
    margin-left: auto; 
  `}
`;
