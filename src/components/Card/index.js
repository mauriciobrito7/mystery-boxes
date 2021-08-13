import { CardContainer, CardInfo, CardLabel } from "./Card.style";
import { ReactComponent as PcBox } from "../../assets/pc-box.svg";

function Card() {
  return (
    <CardContainer>
      <PcBox />

      <CardInfo>Pc Budget</CardInfo>
      <CardLabel> Unbox</CardLabel>
    </CardContainer>
  );
}

export default Card;
