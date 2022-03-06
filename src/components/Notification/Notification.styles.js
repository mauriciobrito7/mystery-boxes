import styled from "styled-components/macro";
import { colors } from "../../styles/theme";
import { fadeIn } from "../../styles/animation";

export const NotificationContainer = styled.div`
	background: ${colors.white};
	color: ${colors.textDark};
	height: 56px;
	border: 1px solid ${colors.borderRed};
	border-radius: 4px;
	width: 356px;
	display: flex;
	align-items: center;
	position: absolute;
	top: 102px;
	right: -2px;
	z-index: 999;
	filter: drop-shadow(0 0 0.75rem ${colors.blackBackground});
	${fadeIn}
`;

export const BoderLeft = styled.div`
	background: ${colors.jungleGreen};
	opacity: 0.4;
	height: 100%;
	width: 8px;
`;

export const MessageContainer = styled.div`
	margin-left: 8px;
	margin-right: 8px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	color: ${colors.textDark};
	width: 292px;
`;

export const Message = styled.p`
	margin-left: 8px;
	color: ${colors.textDark};
`;
