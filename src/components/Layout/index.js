import { MainContent } from "./Layout.style";
import Header from "../Header/";

function Layout({ children }) {
  return (
    <>
      <MainContent>
        <Header />
        {children}
      </MainContent>
    </>
  );
}

export default Layout;
