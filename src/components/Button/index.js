import { CustomButton } from "./Button.style";

function Button({ children, secondary, handleOnClick }) {
  return (
    <CustomButton onClick={handleOnClick} secondary={secondary}>
      {children}
    </CustomButton>
  );
}

export default Button;
