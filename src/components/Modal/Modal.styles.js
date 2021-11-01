import styled from "styled-components/macro";
import { breakpoints, colors, device } from "../../styles/theme";
import { ReactComponent as CloseSvg } from "../../assets/close-icon.svg";

export const ModalContainer = styled.div`
  background: ${colors.mainBackground};
  max-width: ${breakpoints.desktop};
  height: 494px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto 1em;
  padding: 24px, 40px, 40px, 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  z-index: 2;
  ${device.desktop`
    margin: auto;
  `}
`;

export const CloseIcon = styled(CloseSvg)`
  position: absolute;
  top: 1.5em;
  left: 3em;
  cursor: pointer;
`;
