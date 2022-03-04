import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./components/Layout";
import { Switch, Route, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./pages/Home";
import BoxDetail from "./pages/Box-Detail";
import Gifts from "./pages/Gifts";
import { Slug } from "./constants";
import { layoutMode } from "./utils";

function App() {
	const location = useLocation();
	const variant = layoutMode[location.pathname];

	return (
		<div className="App">
			<GlobalStyles />
			<Provider store={store}>
				<Layout variant={variant}>
					<Switch>
						<Route exact path={Slug.Home} component={Home} />
						<Route exact path={Slug.BoxDetail} component={BoxDetail} />
						<Route exact path={Slug.Gifts} component={Gifts} />
					</Switch>
				</Layout>
			</Provider>
		</div>
	);
}

export default App;
