import { useState, useEffect } from "react";
import { GiftsContainer, GiftsBand, GiftSpinner } from "./RandomGifts.styles";
import Gift from "../Gift";
import GiftModal from "../GiftModal";
import Notification from "../../components/Notification";
import { formatterCurrency } from "../../utils";
import { currencies, locales } from "../../constants";
import { connect } from "react-redux";
import { addGift } from "../../redux/actions";
import useSelectWinner from "../../hooks/useSelectWinner";

function RandomGifts({ gifts, resetBox, resetOpenedBox, addGift }) {
	const [openModal, setOpenModal] = useState(false);
	const [openNotification, setOpenNotification] = useState(false);
	const [message, setMessage] = useState("");
	const { winnerSelected, isSelectionStopped } = useSelectWinner(gifts, () =>
		setOpenModal(true)
	);

	useEffect(() => {
		if (winnerSelected) {
			addGift(winnerSelected);
			setMessage(
				`${formatterCurrency(
					locales["US"],
					currencies["USD"],
					winnerSelected.sellPrice
				)} added to your account`
			);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [winnerSelected]);

	return (
		<>
			<GiftsContainer>
				<GiftsBand
					stopAnimation={isSelectionStopped}
					numberOfElements={gifts ? gifts.length : null}
				>
					{gifts &&
						gifts.map((gift) => (
							<Gift key={`primary-band-${gift.name}`} {...gift} />
						))}
					{gifts &&
						gifts.map((gift) => (
							<Gift key={`secondary-band-${gift.name}`} {...gift} />
						))}
				</GiftsBand>
				<GiftSpinner />
			</GiftsContainer>

			{openModal && (
				<GiftModal
					onClose={() => {
						setOpenModal(false);
						resetBox();
					}}
					isOpen={openModal}
					gift={winnerSelected}
					resetOpenedBox={resetOpenedBox}
					openNotification={() => setOpenNotification(true)}
					closeNotification={() => setOpenNotification(false)}
				/>
			)}
			{openNotification && (
				<Notification
					isOpen={openNotification}
					onClose={() => {
						setOpenNotification(false);
					}}
					message={message}
				/>
			)}
		</>
	);
}

const mapDispatchToProps = (dispatch) => ({
	addGift: (gift) => dispatch(addGift(gift)),
});

export default connect(null, mapDispatchToProps)(RandomGifts);
