import "./register.scss";
import NetflixLogo from "../../../assets/Netflix_logo_PNG1.png";

const Register = () => {
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
        <div className="input">
          <input type="email" placeholder="email address" />
          <button className="registerButton">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
