import { ListOfCardsContainer, Title } from "./ListOfCards.style";
import Card from "../Card";
import { connect } from "react-redux";

function ListOfCards({ title, boxes }) {
  return (
    <ListOfCardsContainer>
      <Title>{title}</Title>
      {boxes && boxes.map((box) => <Card key={box.id} {...box} />)}
    </ListOfCardsContainer>
  );
}

const mapStateToProps = (state) => ({
  boxes: state.boxes,
});

export default connect(mapStateToProps, null)(ListOfCards);
