import { CustomButton } from "./Button.style";

function Button({ children, secondary, handleOnClick, disabled }) {
	return (
		<CustomButton
			onClick={handleOnClick}
			secondary={secondary}
			disabled={disabled}
		>
			{children}
		</CustomButton>
	);
}

export default Button;
