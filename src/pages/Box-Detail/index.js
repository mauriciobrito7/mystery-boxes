import { useEffect, useState } from "react";
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
import GoBack from "../../components/GoBack";
import { useParams } from "react-router-dom";
import { setBoxByFilter } from "../../redux/actions";
import { discountBalance } from "../../redux/actions";
import { setGiftsByFilter } from "../../redux/actions";
import { connect } from "react-redux";

function BoxDetail({
  boxFromCache,
  giftsFromCache,
  setBoxByFilter,
  discountBalance,
  setGiftsByFilter,
}) {
  const { id } = useParams();
  const [boxSelected, setboxSelected] = useState(null);
  useEffect(() => {
    if (id) {
      setBoxByFilter(id);
      setGiftsByFilter(id);
    }
    if (boxFromCache) {
      setboxSelected(boxFromCache);
    }
  }, [boxFromCache]);

  const handleOpenBox = () => {
    discountBalance(boxSelected.price);
  };

  return (
    <BoxDetailContainer>
      {boxSelected && (
        <>
          <BoxDetailNav>
            <GoBack />
            <BoxDetailTitle>
              {boxSelected.info}{" "}
              <BoxDetailPrice>
                {formatterCurrency(
                  locales["US"],
                  currencies["USD"],
                  boxSelected.price
                )}
              </BoxDetailPrice>
            </BoxDetailTitle>
          </BoxDetailNav>
          <BoxDetailImg src={boxSelected.boxImg} />
          <Button handleOnClick={handleOpenBox}>
            Open For{" "}
            {formatterCurrency(
              locales["US"],
              currencies["USD"],
              boxSelected.price
            )}{" "}
          </Button>
        </>
      )}
    </BoxDetailContainer>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setBoxByFilter: (id) => dispatch(setBoxByFilter(id)),
  setGiftsByFilter: (id) => dispatch(setGiftsByFilter(id)),
  discountBalance: (amount) => dispatch(discountBalance(amount)),
});

const mapStateToProps = (state) => ({
  boxFromCache: state.boxes.boxSelected,
  giftsFromCache: state.gifts.giftsSelected,
});

export default connect(mapStateToProps, mapDispatchToProps)(BoxDetail);
