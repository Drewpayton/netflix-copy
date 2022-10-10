import "./Home.scss";
import Navbar from "../../navbar/Navbar";
import Featured from "../../navbar/featured/Featured";
import List from "../../list/List";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home({ type }) {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}&${
            genre ? "genre=" + genre : ""
          }`,
          {
            headers: {
              token: "Bearer ",
            },
          }
        );
        console.log(res);
        // setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list) => {
        <List list={list} />;
      })}
    </div>
  );
}
