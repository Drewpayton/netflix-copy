import "./register.scss";
import NetflixLogo from "../../../assets/Netflix_logo_PNG1.png";
import { useState, useRef } from "react"

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const emailRef = useRef()
    const passwordRef = useRef()


    const handleStart = () => {
        setEmail(emailRef.current.value)
    }
    const handleFinish = () => {
        setPassword(passwordRef.current.value)
    }

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src={NetflixLogo} />
          <button className="loginButton">Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere, anytime</h2>
        <p>
          Ready to watch? Enter your email to create or to reactivate your
          membership
        </p>
        {email ? (
          <div className="input">
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
