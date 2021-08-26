import { useParams } from "react-router-dom";
import {
  BoxDetailContainer,
  BoxDetailNav,
  BoxDetailTitle,
  BoxDetailPrice,
  BoxDetailImg,
} from "./Box-Detail.styles";
import Button from "../../components/Button/";
import { formatterCurrency } from "../../utils/index";
import { currencies, locales } from "../../constants/index";
import pcBox from "../../assets/pc-box.svg";
import GoBack from "../../components/GoBack";

function BoxDetail() {
  return (
    <BoxDetailContainer>
      <BoxDetailNav>
        <GoBack />
        <BoxDetailTitle>
          Pokemon Collection{" "}
          <BoxDetailPrice>
            {formatterCurrency(locales["US"], currencies["USD"], 49.99)}
          </BoxDetailPrice>
        </BoxDetailTitle>
      </BoxDetailNav>
      <BoxDetailImg src={pcBox} />
      <Button>
        Open For {formatterCurrency(locales["US"], currencies["USD"], 49.99)}{" "}
      </Button>
    </BoxDetailContainer>
  );
}

export default BoxDetail;
