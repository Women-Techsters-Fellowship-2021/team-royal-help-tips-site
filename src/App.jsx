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
import Notes from './pages/Notes/Notes';
import UserNote from './pages/Notes/UserNote';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
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
					<Route exact path="/notyet">
						<Home />
					</Route>
					<Layout>
						<Route exact path="/">
							<Landing />
						</Route>
						<Route exact path="/user/notes">
							<UserNote />
						</Route>
						<Route path="/notes">
							<Notes />
						</Route>
						<Route exact path="/contact">
							<Contact />
						</Route>
						<Route exact path="/about">
							<About />
						</Route>
					</Layout>
				</Switch>
			</Router>
		</StateProvider>
	);
}

export default App;
