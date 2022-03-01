import styled from "styled-components/macro";
import { breakpoints, device } from "../../styles/theme";
import { headerHeight } from "../Header/Header.style";

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
	height: calc(100vh - ${headerHeight});
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
