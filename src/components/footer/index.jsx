import './footerstyle.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.PNG';

const Footer = () => {
	return (
		<footer>
			<div id="footer-grid">
				<div className="footer-links-container">
					<img src={logo} alt="logo" id="logo"></img>
				</div>
				<div className="footer-links-container">
					<h4>Quick Links</h4>
					<ul>
						<li>
							<Link>Home</Link>
						</li>
						<li>
							<Link>About</Link>
						</li>
						<li>
							<Link>Contact</Link>
						</li>
					</ul>
				</div>
				<div className="footer-links-container">
					<h4>Get Started</h4>
					<ul>
						<li>
							<Link>Login</Link>
						</li>
						<li>
							<Link>Signup</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="underline"></div>
			<div className="copyright">
				&copy; Women Techsters 2021 SWD Track Team Royal
			</div>
		</footer>
	);
};

export default Footer;
