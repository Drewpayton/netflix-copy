import "./Home.scss";
import Navbar from "../../navbar/Navbar";
import Featured from "../../navbar/featured/Featured";
import List from "../../list/List";

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
