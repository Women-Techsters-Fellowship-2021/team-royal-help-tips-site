import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';


import Layout from './layouts/layout';
import Landing from './pages/Landing';
import Home from './pages/Home/index';
//import Test from './pages/ExamplePage';

// Font awesome import
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/landing">
					<Landing />
				</Route>
				<Layout>
			    <Route path="/">
					<Home />
				</Route>
				</Layout>
			</Switch>
		</Router>
	);
}

export default App;
