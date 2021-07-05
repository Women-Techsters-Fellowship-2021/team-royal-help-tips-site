import { NavLink } from 'react-router-dom';
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
					<NavLink exact to="/" activeClassName="main-nav-active">Home</NavLink>
				</li>
				<li>
					<NavLink exact to="/about" activeClassName="main-nav-active">About</NavLink>
				</li>
				<li>
					<NavLink exact to="/contact" activeClassName="main-nav-active" >Contact</NavLink>
				</li>
				<li>
					<NavLink exact to="/notes" activeClassName="main-nav-active">Notes</NavLink>
				</li>
				<li>
					<NavLink exact to="/user/notes" activeClassName="main-nav-active">Add Notes</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
