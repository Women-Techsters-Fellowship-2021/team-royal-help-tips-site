import "./style.scss";
import "./authstyle.scss";


import {
  withRouter, Link, 
} from "react-router-dom";
import React from "react";
import loginImg from "./login.svg"
import { firebaseApp } from "../../components/firebase";

export class Login extends React.Component {
  
  constructor(props) {
    super(props);


    this.state = { 
      email: '',
      password: '',
      error: {
        message: ''
      }
    };
  }
  
  onSubmit = event => {

    const { email, password } = this.state;

    firebaseApp.auth().signInWithEmailAndPassword(email, password).then(() => {
       const user= firebaseApp.auth().currentUser;
       localStorage.setItem("user",JSON.stringify({email: user.email, id: user.uid}));
       localStorage.setItem("isLoggedIn",true);
      this.setState({ 
        email: '',
        password: '',
        error: {
          message: ''
        } 
      });
      this.props.history.push("/notes");
    }).catch(error => {
      this.setState({ error });
    });
    
    event.preventDefault();
  }
  
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">
         <h1> Welcome Back!!!</h1>
          </div>
          <div className="login-body">
        <div className="content">
          <div className="image">
            <img alt="login" src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Email</label>
              <input type="text" name="email" onChange={e => this.setState({email:  e.target.value})} placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" onChange={e => this.setState({password:  e.target.value})} placeholder="password" />
            </div>
            <Link to ="/register" className="login-register-option"> You do not have an account? Register instead.</Link>
            <span style={{color: "red"}}>{this.state.error.message}</span>
          </div>
        </div>
        <div className="footer">
          <button onClick={this.onSubmit} type="button" className="login-btn">
            Login
          </button>
          <Link to="/"><button type="button" className="btn">
            Back to home
          </button>
          </Link>
        </div>
      </div>
      </div>
    );
  }
}
export default withRouter(Login);
