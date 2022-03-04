import { Container, MainContent } from "./Layout.style";
import Header from "../Header/";

export const LayoutVariant = {
	default: "default",
	full: "full",
};

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
