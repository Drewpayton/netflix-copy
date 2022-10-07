import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import "./featured.scss";
import darkknight from "../../../assets/darkknightbackground.jpg";
import darkknighttitile from "../../../assets/darkknighttitle.png";

const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img src={darkknight}></img>
      <div className="info">
        <img src={darkknighttitile}></img>
        <span className="desc">
          Set within a year after the events of Batman Begins (2005), Batman,
          Lieutenant James Gordon, and new District Attorney Harvey Dent
          successfully begin to round up the criminals that plague Gotham City,
          until a mysterious and sadistic criminal mastermind known only as "The
          Joker" appears in Gotham
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrowIcon />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlinedIcon />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
