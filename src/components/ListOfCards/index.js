import {
	ListOfCardsContainer,
	Title,
	BoxesCollection,
} from "./ListOfCards.style";
import Card from "../Card";
import { connect } from "react-redux";

function ListOfCards({ title, boxes }) {
	return (
		<ListOfCardsContainer>
			<Title>{title}</Title>
			<BoxesCollection>
				{boxes && boxes.map((box) => <Card key={box.id} {...box} />)}
			</BoxesCollection>
		</ListOfCardsContainer>
	);
}

const mapStateToProps = (state) => ({
	boxes: state.boxes.boxesDetails,
});

export default connect(mapStateToProps, null)(ListOfCards);
