import { useState } from "react";
import Modal from "../Modal";
import {
	GiftModalContainer,
	GiftTitle,
	GiftPrice,
	GiftButtonsContainer,
} from "./GiftModal.styles";
import Button from "../Button";
import { formatterCurrency } from "../../utils";
import { currencies, locales } from "../../constants";
import Gift from "../Gift";
import { connect } from "react-redux";
import { addBalance, removeGift } from "../../redux/actions/user";

function GiftModal({
	isOpen,
	onClose,
	gift,
	addBalance,
	resetOpenedBox,
	openNotification,
	closeNotification,
	removeGift,
}) {
	const [wasGiftSold, setWasGiftSold] = useState(false);

	const sellGift = (sellPrice) => {
		addBalance(sellPrice);
		removeGift(gift);
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
					<Button
						handleOnClick={() => {
							closeNotification();
							tryAgain();
						}}
					>
						Try Again
					</Button>
					<Button
						handleOnClick={() => {
							sellGift(gift?.sellPrice);
							setWasGiftSold(true);
							openNotification();
						}}
						disabled={wasGiftSold}
						secondary
					>
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
	removeGift: (gift) => dispatch(removeGift(gift)),
});

export default connect(null, mapDispatchToProps)(GiftModal);
