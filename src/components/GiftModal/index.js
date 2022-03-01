import React from "react";
import Modal from "../Modal";
import {
  GiftModalContainer,
  GiftTitle,
  GiftPrice,
  GiftButtonsContainer,
} from "./GiftModal.styles";
import { formatterCurrency } from "../../utils/index";
import { currencies, locales } from "../../constants/index";
import Button from "../Button";
import Gift from "../Gift";
import { connect } from "react-redux";
import { addBalance } from "../../redux/actions/user";

function GiftModal({ isOpen, onClose, gift, addBalance, resetOpenedBox }) {
	const sellGift = (sellPrice) => {
		addBalance(sellPrice);
	};

	const tryAgain = () => {
		onClose();
		resetOpenedBox();
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<GiftModalContainer>
				<GiftTitle>
					{gift.name}{" "}
					<GiftPrice>
						{formatterCurrency(
							locales["US"],
							currencies["USD"],
							gift.sellPrice
						)}
					</GiftPrice>
				</GiftTitle>
				<Gift {...gift} />
				<GiftButtonsContainer>
					<Button handleOnClick={tryAgain}>Try Again</Button>
					<Button handleOnClick={() => sellGift(gift?.sellPrice)} secondary>
						Sell for{" "}
						{formatterCurrency(
							locales["US"],
							currencies["USD"],
							gift.sellPrice
						)}
					</Button>
				</GiftButtonsContainer>
			</GiftModalContainer>
		</Modal>
	);
}

const mapDispatchToProps = (dispatch) => ({
  addBalance: (amount) => dispatch(addBalance(amount)),
});

export default connect(null, mapDispatchToProps)(GiftModal);
