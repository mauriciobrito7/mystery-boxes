import pcBox from "../../assets/pc-box.svg";
import iphoneBox from "../../assets/iphone-box.svg";
import playstationBox from "../../assets/playstation-box.svg";
import pokemonBox from "../../assets/pokemon-box.svg";
import { v4 as uuid } from "uuid";

const INITIAL_STATE = [
  {
    id: uuid(),
    name: "Pc Box",
    boxImg: pcBox,
    info: "Pc Budget",
    price: 49.99,
    label: "UNBOX",
    labelColor: "blue",
  },
  {
    id: uuid(),
    name: "iPhone Box",
    boxImg: iphoneBox,
    info: "Iphone 12",
    price: 2.99,
    label: "UNBOX",
    labelColor: "jungleGreen",
  },
  {
    id: uuid(),
    name: "Pokemon Box",
    boxImg: pokemonBox,
    info: "Pokemon Collection",
    price: 49.99,
    label: "UNBOX",
    labelColor: "blue",
  },
  {
    id: uuid(),
    name: "Playstation Box",
    boxImg: playstationBox,

    info: "PlayStation 5",
    price: 4.99,
    label: "UNBOX",
    labelColor: "jaffa",
  },
];

const boxesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default boxesReducer;
