import {
	CardContainer,
	CardInfo,
	CardLabel,
	CardPrice,
	CardImage,
} from "./Card.style";
import { formatterCurrency } from "../../utils";
import { currencies, locales } from "../../constants";
import { Link } from "react-router-dom";

const Card = ({ id, boxImg, info, label, labelColor, price }) => {
	return (
		<CardContainer>
			<Link to={`/box-detail/${id}`}>
				<CardImage src={boxImg} alt={label} />
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
