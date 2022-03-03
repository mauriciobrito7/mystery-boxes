import {
	HeaderContainer,
	Nav,
	Balance,
	Amount,
	UserContainer,
	Avatar,
} from "./Header.style";
import { formatterCurrency } from "../../utils";
import { currencies, locales, Slug } from "../../constants";
import { ReactComponent as Coin } from "../../assets/coins.svg";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
				<Link to={Slug.Gifts}>
					<UserContainer>
						{userName}
						<Avatar
							src="https://avatars.githubusercontent.com/u/12994188?v=4"
							alt="avatar"
						/>
					</UserContainer>
				</Link>
			</Nav>
		</HeaderContainer>
	);
}

const mapStateToProps = (state) => ({
  userName: state.user.userDetails.name,
  balance: state.user.userDetails.balance,
});

export default connect(mapStateToProps, null)(Header);
