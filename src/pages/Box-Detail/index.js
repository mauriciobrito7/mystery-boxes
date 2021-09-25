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
import { useParams } from "react-router-dom";
import { setBoxByFilter } from "../../redux/actions";
import { discountBalance } from "../../redux/actions";
import { setGiftsByFilter } from "../../redux/actions";
import { connect } from "react-redux";
import GoBack from "../../components/GoBack";
import RandomGifts from "../../components/RandomGifts";

function BoxDetail({
  boxFromCache,
  giftsFromCache,
  setBoxByFilter,
  discountBalance,
  setGiftsByFilter,
}) {
  const { id } = useParams();
  const [boxSelected, setboxSelected] = useState(null);
  const [startRandomGift, setStartRandomGift] = useState(false);
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
    setStartRandomGift(true);
  };

  const resetBox = () => {
    setStartRandomGift(false);
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
          {!startRandomGift && (
            <>
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
          {startRandomGift && (
            <RandomGifts resetBox={resetBox} gifts={giftsFromCache} />
          )}
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
