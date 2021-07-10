import { Link } from 'react-router-dom';
import Contact from '../../components/contact/Contact';
import './App.css';

function Landing() {
	const isLoggedIn = localStorage.getItem('isLoggedIn');
	return (
		<main>
			<div className="bg-banner">
			<div className="overlay"></div>
				<div className="land-container">
				
					<h1 className="text-center land-intro">
						EASY LEARNING WITH OUR NOTES
					</h1>
					<p className="land-paragraph">
						{' '}
						You are welcome to Team Royal Note project. Please Login
						or register to get started
					</p>
					{!isLoggedIn && (
						<div className="btn-container">
							<Link
								to="/login"
								role="button"
								className="py-2 my-2 mr-4 btn-c"
							>
								Login
							</Link>
							<Link
								to="/register"
								role="button"
								className="btn-c btn-cf my-2 py-2"
							>
								Register
							</Link>
						</div>
					)}
				</div>
			</div>
			<Contact />
		</main>
	);
}
export default Landing;
