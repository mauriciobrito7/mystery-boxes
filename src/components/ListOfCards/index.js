import { ListOfCardsContainer, Title } from "./ListOfCards.style";
import Card from "../Card";
import { ReactComponent as PcBox } from "../../assets/pc-box.svg";
import { ReactComponent as IphoneBox } from "../../assets/iphone-box.svg";
import { ReactComponent as PlaystationBox } from "../../assets/playstation-box.svg";
import { ReactComponent as PokemonBox } from "../../assets/pokemon-box.svg";
import { v4 as uuid } from "uuid";

const boxes = [
  {
    id: uuid(),
    name: "Pc Box",
    boxImg: <PcBox />,
    info: "Pc Budget",
    price: 49.99,
    label: "UNBOX",
    labelColor: "blue",
  },
  {
    id: uuid(),
    name: "iPhone Box",
    boxImg: <IphoneBox />,
    info: "Iphone 12",
    price: 2.99,
    label: "UNBOX",
    labelColor: "jungleGreen",
  },
  {
    id: uuid(),
    name: "Pokemon Box",
    boxImg: <PokemonBox />,
    info: "Pokemon Collection",
    price: 49.99,
    label: "UNBOX",
    labelColor: "blue",
  },
  {
    id: uuid(),
    name: "Pokemon Box",
    boxImg: <PlaystationBox />,
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
