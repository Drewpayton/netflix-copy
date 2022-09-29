import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Home.scss";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import Navbar from "../componets/navbar/Navbar";
import Featured from "../componets/navbar/featured/Featured";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <Featured />
    </div>
  );
}
