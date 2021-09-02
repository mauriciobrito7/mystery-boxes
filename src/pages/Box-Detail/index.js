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
import { connect } from "react-redux";

function BoxDetail({ boxFromCache, setBoxByFilter }) {
  const { id } = useParams();
  const [boxSelected, setboxSelected] = useState(null);

  useEffect(() => {
    if (id) {
      setBoxByFilter(id);
    }
    if (boxFromCache) {
      setboxSelected(boxFromCache);
    }
  }, [boxFromCache, id]);

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
          <Button>
            Open For{" "}
            {formatterCurrency(locales["US"], currencies["USD"], 49.99)}{" "}
          </Button>
        </>
      )}
    </BoxDetailContainer>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setBoxByFilter: (id) => dispatch(setBoxByFilter(id)),
});

const mapStateToProps = (state) => ({
  boxFromCache: state.boxes.boxSelected,
});

export default connect(mapStateToProps, mapDispatchToProps)(BoxDetail);
