import './about.css';
import { Link } from 'react-router-dom';

export default function About() {
	return (
		<div className="about">
			<div className="about-container">
			<div className="overlay"></div>
			<div className="about-content">
			<h2> About This Project</h2>
			<p>
				Have you learned something new you wish to share? You are at the
				right place. Quickly write what you have learned here. SDSS is a
				survival pack for new software developers looking to get tips
				and share what they have learned so far.
			</p>
			

			{/* <div className="sub-about">
				<div className="sub">
					<h1>1505</h1>
					<p>Notes Written</p>
				</div>
				<div className="line"></div>
				<div className="sub">
					<h1>109</h1>
					<p>Projects Contributed</p>
				</div>
				<div className="line"></div>
				<div className="sub">
					<h1>87</h1>
					<p>Happy Subscribers</p>
				</div>
			</div> */}

			<div className="about-btn">
				<Link
					className="btn btn-lg btn-add-note"
					to="/user/notes"
					role="button"
				>
					Add Notes
				</Link>
				<Link
					className="btn btn-lg btn-add-note"
					to="/contact"
					role="button"
				>
					Contact Us
				</Link>
			</div>
			</div>
			</div>
			
		</div>
	);
}
