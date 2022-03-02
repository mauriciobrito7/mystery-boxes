import {
  HeaderContainer,
  Nav,
  Balance,
  Amount,
  User,
  Avatar,
} from "./Header.style";
import { formatterCurrency } from "../../utils";
import { currencies, locales } from "../../constants";
import { ReactComponent as Coin } from "../../assets/coins.svg";
import { connect } from "react-redux";

function Header({ userName, balance }) {
  return (
    <HeaderContainer>
      <Nav>
        <Balance>
          <Coin />
          <Amount>
            {formatterCurrency(locales["US"], currencies["USD"], balance)}
          </Amount>
        </Balance>
        <User>
          {userName}
          <Avatar
            src="https://avatars.githubusercontent.com/u/12994188?v=4"
            alt="avatar"
          />
        </User>
      </Nav>
    </HeaderContainer>
  );
}

const mapStateToProps = (state) => ({
  userName: state.user.userDetails.name,
  balance: state.user.userDetails.balance,
});

export default connect(mapStateToProps, null)(Header);
