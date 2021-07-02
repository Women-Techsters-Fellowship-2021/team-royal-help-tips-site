import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import './App.css';
import StateProvider from './components/StateProvider';
import ScrollToTop from './components/ScrollToTop';

// Style import
import './css/App.css';

import Layout from './layouts/layout';
import Landing from './pages/landing/Landing';
import Home from './pages/Home/index';
// Pages
import Notes from './pages/Notes';
import UserNote from './pages/UserNote';
//import Test from './pages/ExamplePage';

// Font awesome import
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

function App() {
	return (
		<StateProvider>
			<Router>
				<ScrollToTop />
				<Switch>
					<Route exact path="/landing">
						<Landing />
					</Route>
					<Layout>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/user/notes">
							<UserNote />
						</Route>
						<Route exact path="/notes">
							<Notes />
						</Route>
					</Layout>
				</Switch>
			</Router>
		</StateProvider>
	);
}

export default App;
