import { CustomButton } from "./Button.style";

function Button({ children, secondary }) {
  return <CustomButton secondary={secondary}>{children}</CustomButton>;
}

export default Button;
