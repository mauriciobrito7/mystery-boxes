import { ListOfCardsContainer, Title } from "./ListOfCards.style";
import Card from "../Card";
import pcBox from "../../assets/pc-box.svg";
import iphoneBox from "../../assets/iphone-box.svg";
import playstationBox from "../../assets/playstation-box.svg";
import pokemonBox from "../../assets/pokemon-box.svg";
import { v4 as uuid } from "uuid";

const boxes = [
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
    boxImg: playstationBox,
    info: "Pokemon Collection",
    price: 49.99,
    label: "UNBOX",
    labelColor: "blue",
  },
  {
    id: uuid(),
    name: "Pokemon Box",
    boxImg: pokemonBox,
    info: "PlayStation 5",
    price: 4.99,
    label: "UNBOX",
    labelColor: "jaffa",
  },
];

function ListOfCards({ title, data }) {
  return (
    <ListOfCardsContainer>
      <Title>{title}</Title>
      {boxes &&
        boxes.map((box) => (
          <Card
            key={box.id}
            boxImg={box.boxImg}
            info={box.info}
            label={box.label}
            price={box.price}
            labelColor={box.labelColor}
          />
        ))}
    </ListOfCardsContainer>
  );
}

export default ListOfCards;
