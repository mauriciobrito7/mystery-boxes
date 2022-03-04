import styled from "styled-components/macro";
import { breakpoints, device } from "../../styles/theme";
import { headerHeight } from "../Header/Header.style";

const mainContentVariant = {
	default: `height: calc(100vh - ${headerHeight});`,
	full: `height: auto;
		margin-top: ${headerHeight};
		padding-bottom: ${headerHeight};
	`,
};

export const Container = styled.div`
	margin: 0 1em;
	max-width: ${breakpoints.desktop};
	position: relative;
	${device.desktop`
    margin-right: auto;
    margin-left: auto; 
  `}
`;

export const MainContent = styled.main`
	width: 100%;
	${(props) => mainContentVariant[props.variant]};
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
