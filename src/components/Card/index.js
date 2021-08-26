import { CardContainer, CardInfo, CardLabel, CardPrice } from "./Card.style";
import { formatterCurrency } from "../../utils/index";
import { currencies, locales } from "../../constants/index";
import { Link } from "react-router-dom";

const Card = ({ id, boxImg, info, label, labelColor, price }) => {
  return (
    <CardContainer>
      <Link to={`/box-detail/${id}`}>
        <img src={boxImg} />
        <CardInfo>{info}</CardInfo>
        <CardLabel labelColor={labelColor}>
          {label}
          <CardPrice>
            {formatterCurrency(locales["US"], currencies["USD"], price)}
          </CardPrice>
        </CardLabel>
      </Link>
    </CardContainer>
  );
};

export default Card;
