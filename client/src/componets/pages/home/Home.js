import "./Home.scss";
import Navbar from "../../navbar/Navbar";
import Featured from "../../navbar/featured/Featured";
import List from "../../list/List";

export default function Home({ type }) {
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
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
