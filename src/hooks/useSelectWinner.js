import { useState, useEffect } from "react";

const MIN_NUM = 2;
const MAX_NUM = 3;
const NUM_OF_DECIMALS = 1;
const VELOCITY_PER_SECONDS = 1;
const randomNumberWithDecimal = () => {
	const accuracy = Math.pow(10, NUM_OF_DECIMALS);
	const min = MIN_NUM * accuracy;
	const max = MAX_NUM * accuracy;
	return Math.floor(Math.random() * (max - min + 1) + min) / accuracy;
};

const getSecondsToMilliSeconds = (seconds) => seconds * 1000;

export default function useSelectWinner(options, finallyCallback) {
	const [isSelectionStopped, setIsSelectionStopped] = useState(false);
	const [winnerSelected, setWinnerSelected] = useState(null);

	useEffect(() => {
		let startAnimation;
		if (options) {
			const randomNumber = randomNumberWithDecimal();
			const randomTime = getSecondsToMilliSeconds(randomNumber);
			const turns = randomNumber / VELOCITY_PER_SECONDS;
			const percentage = (turns % 1).toFixed(1) * 100;
			const indexOfWinner = Math.floor((percentage / 100) * options.length);
			const winner = options[indexOfWinner];
			setWinnerSelected(winner);
			startAnimation = () =>
				setTimeout(() => {
					setIsSelectionStopped(true);
					setTimeout(() => {
						if (finallyCallback) finallyCallback();
					}, 1000);
				}, randomTime);
			startAnimation();
		}

		return () => {
			clearTimeout(startAnimation);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [options?.length]);

	return {
		winnerSelected,
		isSelectionStopped,
	};
}
