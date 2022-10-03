import "./Home.scss";
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
