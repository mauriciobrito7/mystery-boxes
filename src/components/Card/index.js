import { CardContainer, CardInfo, CardLabel, CardPrice } from "./Card.style";
import { formatterCurrency } from "../../utils/index";
import { currencies, locales } from "../../constants/index";

const Card = ({ boxImg, info, label, labelColor, price }) => {
  return (
    <CardContainer>
      {boxImg}

      <CardInfo>{info}</CardInfo>
      <CardLabel labelColor={labelColor}>
        {label}
        <CardPrice>
          {formatterCurrency(locales["US"], currencies["USD"], price)}
        </CardPrice>
      </CardLabel>
    </CardContainer>
  );
};

export default Card;
