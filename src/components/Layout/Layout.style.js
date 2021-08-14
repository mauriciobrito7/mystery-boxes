import styled from "styled-components/macro";
import { breakpoints, device } from "../../styles/theme";

export const Container = styled.div`
  margin: 0 1em;
  max-width: ${breakpoints.desktop};
  ${device.desktop`
    margin-right: auto;
    margin-left: auto; 
  `}
`;

export const MainContent = styled.main`
  width: 100%;
  border: 1px dashed red;
  margin: 4em auto;
`;
