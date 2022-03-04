import { Container, MainContent } from "./Layout.style";
import Header from "../Header/";
import { LayoutVariant } from "../../constants/";

function Layout({ children, variant = LayoutVariant.default }) {
	return (
		<>
			<Container>
				<Header />
				<MainContent variant={variant}>{children}</MainContent>
			</Container>
		</>
	);
}

export default Layout;
