import './contact.css';

export default function Contact() {
	return (
		<div className="row">
			<div className="contact-form">
				<h1 className="mt-4">Would you like to reach out to us instead? Leave A Message</h1>
				<form action="#" method="post">
					<div className="input-box">
						<input
							type="text"
							name="name"
							defaultValue=""
							placeholder="Name"
							required
						/>
					</div>
					<div className="input-box">
						<input
							type="text"
							name="email"
							defaultValue=""
							placeholder="Email"
							required
						/>
					</div>
					<div className="input-box">
						<textarea
							name="name"
							id=""
							cols="80"
							rows="10"
							placeholder="Please enter your message"
							required
						></textarea>
					</div>
					<div className="input-box">
						<input
							type="submit"
							className="btn"
							name="submit"
							value="Submit"
						/>
					</div>
				</form>
			</div>
		</div>
	);
}
