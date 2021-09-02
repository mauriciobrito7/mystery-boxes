import pcBox from "../../assets/pc-box.svg";
import iphoneBox from "../../assets/iphone-box.svg";
import playstationBox from "../../assets/playstation-box.svg";
import pokemonBox from "../../assets/pokemon-box.svg";
import * as types from "../types";

const INITIAL_STATE = {
  boxes: [
    {
      id: "0",
      name: "Pc Box",
      boxImg: pcBox,
      info: "Pc Budget",
      price: 49.99,
      label: "UNBOX",
      labelColor: "blue",
    },
    {
      id: "2",
      name: "iPhone Box",
      boxImg: iphoneBox,
      info: "Iphone 12",
      price: 2.99,
      label: "UNBOX",
      labelColor: "jungleGreen",
    },
    {
      id: "3",
      name: "Pokemon Box",
      boxImg: pokemonBox,
      info: "Pokemon Collection",
      price: 49.99,
      label: "UNBOX",
      labelColor: "blue",
    },
    {
      id: "4",
      name: "Playstation Box",
      boxImg: playstationBox,
      info: "PlayStation 5",
      price: 4.99,
      label: "UNBOX",
      labelColor: "jaffa",
    },
  ],
  boxSelected: null,
};
const boxesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_BOX_BY_FILTER:
      return {
        ...state,
        boxSelected: state.boxes.find((box) => box.id === action.payload.id),
      };

    default:
      return state;
  }
};

export default boxesReducer;
