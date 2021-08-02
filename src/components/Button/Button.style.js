import styled from "styled-components/macro";
import { colors } from "../../styles/theme";

export const CustomButton = styled.button`
  background: ${colors.grandient};
  color: ${colors.white};
  height: 40px;
  border: none;
  border-radius: 2.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
`;
