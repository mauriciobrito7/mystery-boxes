import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./pages/Home";
import BoxDetail from "./pages/Box-Detail";
import Notification from "./components/Notification";

function App() {
	return (
		<div className="App">
			<GlobalStyles />
			<Provider store={store}>
				<Layout>
					<Router>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/box-detail/:id" component={BoxDetail} />
						</Switch>
					</Router>
					<Notification />
				</Layout>
			</Provider>
		</div>
	);
}

export default App;
