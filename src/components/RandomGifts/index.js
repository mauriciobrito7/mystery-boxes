import { useState, useEffect } from "react";
import {
  GiftsContainer,
  GiftCard,
  GiftBand,
  GiftImgWrapper,
  GiftImg,
  GiftTitle,
  GiftLabel,
  GiftSpinner,
} from "./RandomGifts.styles";

const MIN_NUM = 2;
const MAX_NUM = 3;
const NUM_OF_DECIMALS = 1;
const VELOCITY_PER_SECONDS = 1;

function RandomGifts({ gifts }) {
  const [stopAnimation, setStopAnimation] = useState(false);
  const [timeOfAnimation, setTimeOfAnimation] = useState(0);
  const [giftSelected, setGiftSelected] = useState(null);

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
    }
    console.log(randomTime);
    setTimeOfAnimation(randomTime);
  }, []);

  useEffect(() => {
    const handleAnimation = () =>
      setTimeout(() => setStopAnimation(true), timeOfAnimation);
    if (timeOfAnimation > 0) {
      handleAnimation();
    }

    return () => {
      clearTimeout(handleAnimation);
    };
  }, [stopAnimation, timeOfAnimation]);

  return (
    <>
      <GiftsContainer>
        <GiftBand
          stopAnimation={stopAnimation}
          numberOfElements={gifts ? gifts.length : null}
        >
          {gifts &&
            gifts.map((gift, index) => (
              <GiftCard key={gift.name}>
                <GiftImgWrapper>
                  <GiftImg src={gift.img} alt={gift.name} />
                </GiftImgWrapper>
                <GiftTitle>{gift.name}</GiftTitle>
                <GiftLabel>{gift.label}</GiftLabel>
              </GiftCard>
            ))}
          {gifts &&
            gifts.map((gift, index) => (
              <GiftCard key={gift.name}>
                <GiftImgWrapper>
                  <GiftImg src={gift.img} alt={gift.name} />
                </GiftImgWrapper>
                <GiftTitle>{gift.name}</GiftTitle>
                <GiftLabel>{gift.label}</GiftLabel>
              </GiftCard>
            ))}
        </GiftBand>
        <GiftSpinner />
      </GiftsContainer>
    </>
  );
}

export default RandomGifts;
