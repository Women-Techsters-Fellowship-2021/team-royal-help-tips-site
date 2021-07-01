import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import Navbar from './components/navbar';
import Landing from './pages/Landing';
import 'App.css';
//import Test from './pages/ExamplePage';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Landing />
				</Route>
			    {/*<Route path="/test-page">
					<Test />
					</Route>*/}
			</Switch>
		</Router>
	);
}

export default App;
