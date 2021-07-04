import { Link } from 'react-router-dom';
import Gallery from '../Gallery/Gallery';
import './about.css';

export default function About() {
	return (
		<div className="about">
			<div className="about-container">
			<div className="overlay"></div>
			<div className="about-content">
			<h2> About This Project</h2>
			<p>
				Have you learnt something new you wish to share? You are at the
				right place. Quickly write what you have learnt here. SDSS is a
				survival pack for new software developers looking to get tips
				and share what they have learned so far.
			</p>
<<<<<<< HEAD
			
=======
			<p>
				This project is a Microsoft Womentechsters mini-project. Below is the images of our project contributors. You can fill the contact us form or reach out to us via email and we will get back to you as soon as we can.
			</p>
>>>>>>> f2d9080aec8ea51b1c87377783a50a7624a11ed9

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
<<<<<<< HEAD
=======

				<Gallery />
>>>>>>> f2d9080aec8ea51b1c87377783a50a7624a11ed9

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
