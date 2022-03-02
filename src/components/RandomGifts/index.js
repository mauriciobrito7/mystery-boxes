import { useState, useEffect } from "react";
import { GiftsContainer, GiftsBand, GiftSpinner } from "./RandomGifts.styles";
import Gift from "../Gift";
import GiftModal from "../GiftModal";
import Notification from "../../components/Notification";
import { formatterCurrency } from "../../utils";
import { currencies, locales } from "../../constants";

const MIN_NUM = 2;
const MAX_NUM = 3;
const NUM_OF_DECIMALS = 1;
const VELOCITY_PER_SECONDS = 1;

function RandomGifts({ gifts, resetBox, resetOpenedBox }) {
	const [stopAnimation, setStopAnimation] = useState(false);
	const [timeOfAnimation, setTimeOfAnimation] = useState(0);
	const [giftSelected, setGiftSelected] = useState(null);
	const [openModal, setOpenModal] = useState(false);
	const [openNotification, setOpenNotification] = useState(false);
	const [message, setMessage] = useState("");

	const randomNumberWithDecimal = () => {
		const accuracy = Math.pow(10, NUM_OF_DECIMALS);
		const min = MIN_NUM * accuracy;
		const max = MAX_NUM * accuracy;
		return Math.floor(Math.random() * (max - min + 1) + min) / accuracy;
	};

	const getSecondsToMilliSeconds = (seconds) => seconds * 1000;

	useEffect(() => {
		const randomNumber = randomNumberWithDecimal();
		const randomTime = getSecondsToMilliSeconds(randomNumber);
		const turns = randomNumber / VELOCITY_PER_SECONDS;
		const percentage = (turns % 1).toFixed(1) * 100;
		if (gifts) {
			const indexOfWinner = Math.floor((gifts.length * percentage) / 100);
			const winner = gifts[indexOfWinner];
			setGiftSelected(winner);
			setMessage(
				`${formatterCurrency(
					locales["US"],
					currencies["USD"],
					winner.sellPrice
				)} added to your account`
			);
		}
		console.log(randomTime);
		setTimeOfAnimation(randomTime);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [gifts.length]);

	const handleAnimation = () =>
		setTimeout(() => {
			setStopAnimation(true);
			setTimeout(() => setOpenModal(true), 1000);
		}, timeOfAnimation);

	useEffect(() => {
		if (timeOfAnimation > 0) {
			handleAnimation();
		}

		return () => {
			clearTimeout(handleAnimation);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [stopAnimation, timeOfAnimation]);

	return (
		<>
			<GiftsContainer>
				<GiftsBand
					stopAnimation={stopAnimation}
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
					gift={giftSelected}
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

export default RandomGifts;
