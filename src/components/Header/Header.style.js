import styled from "styled-components/macro";
import { colors, device, fontConfig } from "../../styles/theme";

export const headerHeight = "80px";

export const HeaderContainer = styled.header`
	width: 100%;
	height: ${headerHeight};
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
	background: transparent;
	font-size: ${fontConfig.fontSize.body2};
`;

export const Nav = styled.nav`
	width: 90%;
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
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 40px;
`;

export const Amount = styled.div`
	margin-left: 0.6em;
`;

export const UserContainer = styled.div`
	width: 112px;
	height: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  object-fit: cover;
  width: 40px;
  height: 40px;
  margin-left: 0.6em;
`;
