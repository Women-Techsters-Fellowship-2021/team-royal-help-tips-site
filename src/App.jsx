import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StateProvider from './components/StateProvider';
import ScrollToTop from './components/ScrollToTop';

// Style import
import './css/App.css';

import Layout from './layouts/layout';
import Landing from './pages/landing/Landing';

// Pages
import Notes from './pages/Notes/Notes';
import UserNote from './pages/Notes/UserNote';
import ContactUs from './pages/Contact/Contact';
import About from './pages/About/About';

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
						<Route exact path="/">
							<Landing />
						</Route>
					<Layout>
						<Route exact path="/user/notes">
							<UserNote />
						</Route>
						<Route path="/notes">
							<Notes />
						</Route>
						<Route exact path="/contact">
							<ContactUs />
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
