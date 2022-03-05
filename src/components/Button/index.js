import { CustomButton } from "./Button.style";
import { buttonVariant } from "../../constants";

function Button({
	children,
	variant = buttonVariant.default,
	handleOnClick,
	disabled = false,
}) {
	return (
		<CustomButton onClick={handleOnClick} variant={variant} disabled={disabled}>
			{children}
		</CustomButton>
	);
}

export default Button;
