import styled from "styled-components/macro";
import { colors, device } from "../../styles/theme";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 40px;
  margin-top: 2em;
  margin-bottom: 2em;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: transparent;
`;

export const Nav = styled.nav`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${device.custom(
    `
    width: 60%;
    `,
    "480px"
  )}
  ${device.tablet`
    width: 35%;
  `}
  ${device.desktop`
    width:30%;
  `}

  ${device.large`
    width:30%;
  `}
`;

export const Balance = styled.div`
  border: 1px solid ${colors.white};
  width: 112px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Amount = styled.div`
  margin-left: 0.5em;
`;

export const User = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  object-fit: cover;
  width: 40px;
  height: 40px;
  margin-left: 0.5em;
`;
