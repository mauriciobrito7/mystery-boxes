import GoBack from "../../components/GoBack";
import {
	GiftsContainer,
	GiftsCollection,
	GiftsTitleContainer,
	GiftsTitle,
} from "./Gifts.styles";
import booterBox from "../../assets/pokemon-gifts/booter-box.svg";
import charizard from "../../assets/pokemon-gifts/charizard.svg";
import pikachu from "../../assets/pokemon-gifts/pikachu.svg";
import venusaur from "../../assets/pokemon-gifts/venusaur.svg";
import pokemonPackageBlack from "../../assets/pokemon-gifts/pokemon-package-black.svg";
import pokemonPackageRed from "../../assets/pokemon-gifts/pokemon-package-red.svg";
import Gift from "../../components/Gift";
import { Slug } from "../../constants";

const myGifts = [
	{
		name: "Team Up Booster Box",
		img: booterBox,
		label: "POKEMON",
		sellPrice: 1180,
	},
	{
		name: "Charizard-Holo 1999",
		img: charizard,
		label: "POKEMON",
		sellPrice: 80,
	},
	{
		name: "Pikachu-Holo 1999",
		img: pikachu,
		label: "POKEMON",
		sellPrice: 80,
	},
	{
		name: "Venusaur-Holo 1999",
		img: venusaur,
		label: "POKEMON",
		sellPrice: 80,
	},
	{
		name: "2018 Pokemon Sun and Moon Black",
		img: pokemonPackageBlack,
		label: "POKEMON",
		sellPrice: 1198.8,
	},
	{
		name: "2019 Pokemon Sun and Moon Red",
		img: pokemonPackageRed,
		label: "POKEMON",
		sellPrice: 1198.8,
	},
	{
		name: "Venusaur-Holo 1999",
		img: venusaur,
		label: "POKEMON",
		sellPrice: 80,
	},
	{
		name: "2018 Pokemon Sun and Moon Black",
		img: pokemonPackageBlack,
		label: "POKEMON",
		sellPrice: 1198.8,
	},
	{
		name: "2019 Pokemon Sun and Moon Red",
		img: pokemonPackageRed,
		label: "POKEMON",
		sellPrice: 1198.8,
	},
];

function Gifts() {
	return (
		<GiftsContainer>
			<GiftsTitleContainer>
				<GoBack url={Slug.Home} />
				<GiftsTitle>All your Gifts</GiftsTitle>
			</GiftsTitleContainer>
			<GiftsCollection>
				{myGifts.map((gift) => (
					<Gift key={gift.name} {...gift} />
				))}
			</GiftsCollection>
		</GiftsContainer>
	);
}

export default Gifts;
