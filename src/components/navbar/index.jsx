import { Link } from 'react-router-dom';
import './navstyle.css';
import logo from '../../images/logo.PNG';

function Navbar() {
	return (
		<nav>
			
			<img src={logo} alt="logo" id="logo"></img>
			
			<ul>
				<li>
					<Link to="/">Search</Link>
				</li>
			</ul>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/">About</Link>
				</li>
				<li>
					<Link to="/">Contact</Link>
				</li>
				<li>
					<Link to="/">Signup</Link>
				</li>
				<li>
					<Link to="/">Login</Link>
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
