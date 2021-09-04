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

function RandomGifts({ gifts }) {
  const [stopAnimation, setStopAnimation] = useState(false);

  useEffect(() => {
    const handleAnimation = () =>
      setTimeout(() => setStopAnimation(true), 2300);
    handleAnimation();

    return () => {
      clearTimeout(handleAnimation);
    };
  }, [stopAnimation]);

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
