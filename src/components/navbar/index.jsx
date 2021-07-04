import { Link } from 'react-router-dom';
import './navstyle.css';
import logo from '../../images/logo.PNG';
import SearchNote from '../notes/searchNote';

function Navbar() {
	return (
		<nav>
			
			<img src={logo} alt="logo" id="logo"></img>

			<SearchNote />
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
				<li>
					<Link to="/notes">Notes</Link>
				</li>
				<li>
					<Link to="/user/notes">Add Notes</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
