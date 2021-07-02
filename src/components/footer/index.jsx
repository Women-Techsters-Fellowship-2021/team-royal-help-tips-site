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
					<h2>Thank you for visiting our website</h2>

						 
					 <div className="footer-links">
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
				</div>
				
			</div>
			<div className="underline"></div>
			<div className="copyright">
				<h5>&copy; Women Techsters 2021 SWD Track Team Royal</h5>
			</div>
		</footer>
	);
};

export default Footer;
