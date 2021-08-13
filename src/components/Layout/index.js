import { Container, MainContent } from "./Layout.style";
import Header from "../Header/";

function Layout({ children }) {
  return (
    <>
      <Container>
        <Header />
        <MainContent>{children}</MainContent>
      </Container>
    </>
  );
}

export default Layout;
