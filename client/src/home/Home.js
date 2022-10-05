import "./Home.scss";
import Navbar from "../componets/navbar/Navbar";
import Featured from "../componets/navbar/featured/Featured";
import List from "../componets/list/List";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <Featured />
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
}
