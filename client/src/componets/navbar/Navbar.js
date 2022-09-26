import "./navbar.scss";
import netflixLogo from "../../assets/Netflix_logo_PNG1.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <img className="netflix-logo" src={netflixLogo}></img>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Navbar;
