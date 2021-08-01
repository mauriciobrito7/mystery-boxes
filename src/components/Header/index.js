import {
  HeaderContainer,
  Nav,
  Balance,
  Amount,
  User,
  Avatar,
} from "./Header.style";
import { formatterCurrency } from "../../utils/index";
import { currencies, locales } from "../../constants/index";
import { ReactComponent as Coin } from "../../assets/coins.svg";

function Header() {
  return (
    <HeaderContainer>
      <Nav>
        <Balance>
          <Coin />
          <Amount>
            {formatterCurrency(locales["US"], currencies["USD"], 2000)}
          </Amount>
        </Balance>
        <User>
          Mauricio{" "}
          <Avatar
            src="https://avatars.githubusercontent.com/u/12994188?v=4"
            alt="avatar"
          />
        </User>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
