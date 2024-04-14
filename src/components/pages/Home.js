import { Button } from "@mui/material";
import Layout from "../ui/Layout";
import SportCard from "../ui/card";
import "./index.css";
import { useNavigate } from "react-router-dom";
import server from "../../utils/server";
import { useContext, useEffect, useState } from "react";
import { context } from "../../utils/context/Provider";

const sports_details = [
  {
    title: "Cricket",
    details: "details about the game",
  },
  {
    title: "Badminton",
    details: "details about the game",
  },
  {
    title: "Football",
    details: "details about the game",
  },
  {
    title: "Swimming",
    details: "details about the game",
  },
  {
    title: "Tennis",
    details: "details about the game",
  },
  {
    title: "Boardgames",
    details: "details about the game",
  },
];

export default function Home() {
  const [sports, setSports] = useState([]);
  const [filteredSports, setFilteredSports] = useState([]);
  const router = useNavigate();
  const store = useContext(context);

  const getSports = async () => {
    try {
      const response = await server.get("/api/admin/sport");
      setSports(response.data.data);
      setFilteredSports(response.data.data);
    } catch (err) {
      console.log("error", err);
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    //copy sports
    const filtered = sports.filter((item) =>
      item.name.toLowerCase().includes(value)
    );
    console.log(filtered);
    setFilteredSports(filtered);
  };

  useEffect(() => {
    getSports();
  }, [store.data.refreshSport]);
  return (
    <Layout>
      <div className="search_container">
        <input
          type="text"
          placeholder="Search..."
          className="search_input"
          onChange={handleSearch}
        />
        <Button
          className="edit_button create_button ani_button"
          onClick={() => router("createsport")}
        >
          create sport
        </Button>
      </div>
      <div className="home_grid">
        {filteredSports.map((item, index) => {
          return <SportCard {...item} store={store} key={`sport-${index}`} />;
        })}
      </div>
    </Layout>
  );
}
