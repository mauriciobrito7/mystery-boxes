import GoBack from "../../components/GoBack";
import {
	GiftsContainer,
	GiftsCollection,
	GiftsTitleContainer,
	GiftsTitle,
} from "./Gifts.styles";
import Gift from "../../components/Gift";
import { Slug } from "../../constants";
import { connect } from "react-redux";

function Gifts({ user }) {
	const { gifts } = user.userDetails;
	return (
		<GiftsContainer>
			<GiftsTitleContainer>
				<GoBack url={Slug.Home} />
				<GiftsTitle>All your Gifts ({gifts.length})</GiftsTitle>
			</GiftsTitleContainer>
			<GiftsCollection>
				{gifts.map((gift) => (
					<Gift key={gift.name} {...gift} />
				))}
			</GiftsCollection>
		</GiftsContainer>
	);
}

const mapStateToProps = (state) => ({
	user: state.user,
});

export default connect(mapStateToProps, null)(Gifts);
