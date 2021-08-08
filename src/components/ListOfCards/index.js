import { ListOfCardsContainer, Title } from "./ListOfCards.style";
import Card from "../Card";

function ListOfCards({ title, data }) {
  return (
    <ListOfCardsContainer>
      <Title>{title}</Title>
      {/* {data && data.map((product) => <></>)} */}
      <Card />
      <Card />
      <Card />
      <Card />
    </ListOfCardsContainer>
  );
}

export default ListOfCards;
