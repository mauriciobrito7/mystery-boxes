import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./pages/Home";
import BoxDetail from "./pages/Box-Detail";
import Gifts from "./pages/Gifts";
import { Slug } from "./constants";

function App() {
	return (
		<div className="App">
			<GlobalStyles />
			<Provider store={store}>
				<Router>
					<Layout>
						<Switch>
							<Route exact path={Slug.Home} component={Home} />
							<Route exact path={Slug.BoxDetail} component={BoxDetail} />
							<Route exact path={Slug.Gifts} component={Gifts} />
						</Switch>
					</Layout>
				</Router>
			</Provider>
		</div>
	);
}

export default App;
