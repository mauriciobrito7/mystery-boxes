import booterBox from "../../assets/pokemon-gifts/booter-box.svg";
import charizard from "../../assets/pokemon-gifts/charizard.svg";
import pikachu from "../../assets/pokemon-gifts/pikachu.svg";
import venusaur from "../../assets/pokemon-gifts/venusaur.svg";
import pokemonPackageBlack from "../../assets/pokemon-gifts/pokemon-package-black.svg";
import pokemonPackageRed from "../../assets/pokemon-gifts/pokemon-package-red.svg";
import * as types from "../types";

const INITIAL_STATE = {
  giftsDetails: {
    3: [
      {
        name: "Team Up Booster Box",
        img: booterBox,
        label: "POKEMON",
      },
      {
        name: "Charizard-Holo 1999",
        img: charizard,
        label: "POKEMON",
      },
      {
        name: "Pikachu-Holo 1999",
        img: pikachu,
        label: "POKEMON",
      },
      {
        name: "Venusaur-Holo 1999",
        img: venusaur,
        label: "POKEMON",
      },
      {
        name: "2018 Pokemon Sun and Moon Black",
        img: pokemonPackageBlack,
        label: "POKEMON",
      },
      {
        name: "2019 Pokemon Sun and Moon Red",
        img: pokemonPackageRed,
        label: "POKEMON",
      },
    ],
  },
  giftsSelected: null,
};

const giftsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_GIFTS_BY_FILTER:
      return {
        ...state,
        giftsSelected: state.giftsDetails[action.payload],
      };
    default:
      return state;
  }
};

export default giftsReducer;
