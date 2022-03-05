import styled from "styled-components/macro";
import { colors } from "../../styles/theme";
import { buttonVariant } from "../../constants";

const defaultStyle = `
  min-width: 119px;
	height: 40px;
	padding: 12px 24px;
	border: none;
	border-radius: 2.5em;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	user-select: none;
	text-transform: uppercase;
`;

const defaultVariantStyle = ` 
  background: ${colors.gradient};
	color: ${colors.white};
`;

const secondaryVariantStyle = (props) => `
  background: ${colors.gradient};
  position: relative;
  font-weight: bold;
  -webkit-background-clip: text;
  color: ${props.disabled ? colors.jaffa : "transparent"};

  &::before, &::after {
    position: absolute; 
    content: '';
    border-radius: inherit;
  }
  &::before {
    background: ${colors.mainBackground};
    width: 98%;
    heigth: 98%;
    top: 1%;
    bottom: 1%;
    left: 1%; 
    right: 1%;
    z-index: -1;
  }
  &::after {
    top: -1px; 
    bottom: -1px;
    left: -1px; 
    right: -1px;
    background: ${colors.gradient};
    z-index: -2;
  }
`;

const disabledStyle = `
  opacity: 0.5;
`;

const custtomButtonStyle = (props) => {
	const { variant } = props;
	switch (variant) {
		case buttonVariant.default:
			return defaultVariantStyle;
		case buttonVariant.secondary:
			return secondaryVariantStyle(props);

		default:
			return defaultStyle;
	}
};

export const CustomButton = styled.button`
	${defaultStyle}
	${(props) => props.variant && custtomButtonStyle(props)}
  ${(props) => props.disabled && disabledStyle}
`;
