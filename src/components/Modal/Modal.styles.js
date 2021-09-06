import styled from "styled-components/macro";
import { breakpoints, colors } from "../../styles/theme";

export const ModalContainer = styled.div`
  background: ${colors.mainBackground};
  width: ${breakpoints.desktop};
  height: 494px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  padding: 24px, 40px, 40px, 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  z-index: 2;
`;