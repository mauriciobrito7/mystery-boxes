import {
  GiftCard,
  GiftImgWrapper,
  GiftImg,
  GiftTitle,
  GiftLabel,
} from "./Gift.styles";

function Gift({ name, img, label }) {
  return (
    <GiftCard key={name}>
      <GiftImgWrapper>
        <GiftImg src={img} alt={name} />
      </GiftImgWrapper>
      <GiftTitle>{name}</GiftTitle>
      <GiftLabel>{label}</GiftLabel>
    </GiftCard>
  );
}

export default Gift;
