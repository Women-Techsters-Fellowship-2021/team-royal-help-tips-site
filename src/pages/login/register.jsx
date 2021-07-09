import './style.scss';

import { withRouter, Link } from 'react-router-dom';
import React, { Component } from 'react';
import loginImg from './login.svg';
import { firebaseApp } from '../../components/firebase';

export class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			email: '',
			password: '',
			error: {
				message: '',
			},
		};
	}

	onSubmit = event => {
		const { email, password } = this.state;

		firebaseApp
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(() => {
				this.setState({
					username: '',
					email: '',
					password: '',
					error: {
						message: '',
					},
				});
				this.props.history.push('/login');
			})
			.catch(error => {
				this.setState({ error });
			});

		event.preventDefault();
	};

	render() {
		return (
			<div className="base-container" ref={this.props.containerRef}>
				<div className="login-header">
          <h1>Hello, Welcome!</h1>
							<p>
              We are looking forward to learning from you and
								vise vesa.
								Please enter your details to start the journey.
								This is to make sure the site is secure and we
								keep everyone accountable. The details will only
								be used to login and track your posts.
							</p>
				</div>
				<div className="login-content">
					<div className="login-image">
						<img alt="login" src={loginImg} />
					</div>
					<div className="form">
						<div className="form-group">
							<label htmlFor="username">Username</label>
							<input
								type="text"
								name="username"
								onChange={e =>
									this.setState({ username: e.target.value })
								}
								placeholder="username"
							/>
						</div>
						<div className="form-group">
							<label htmlFor="email">Email</label>
							<input
								type="text"
								name="email"
								onChange={e =>
									this.setState({ email: e.target.value })
								}
								placeholder="email"
							/>
						</div>
						<div className="form-group">
							<label htmlFor="password">Password</label>
							<input
								type="password"
								name="password"
								onChange={e =>
									this.setState({ password: e.target.value })
								}
								placeholder="password"
							/>
						</div>
						<div className="form-group">
							<Link to="/login" className="login-register-option">
								{' '}
								You have an account? Login instead.
							</Link>
							<span style={{ color: 'red' }}>
								{this.state.error.message}
							</span>
						</div>
						<div className="footer">
							<button
								onClick={this.onSubmit}
								type="button"
								className="btn mr-2"
							>
								Register
							</button>
							<Link to="/">
								<button
									type="button"
									className="btn"
								>
									Back to home
								</button>
							</Link>
						</div>
					</div>

				</div>
			</div>
		);
	}
}
export default withRouter(Register);
