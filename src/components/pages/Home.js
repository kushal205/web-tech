import { Button } from "@mui/material";
import Layout from "../ui/Layout";
import SportCard from "../ui/card";
import Navbar from "../ui/navbar";
import "./index.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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
  const router = useNavigate();
  const store = useContext(context);

  const getSports = async () => {
    try {
      const response = await server.get("/api/admin/sport");
      setSports(response.data.data);
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    getSports();
  }, [store.data.refreshSport]);
  return (
    <Layout>
      <div className="search_container">
        <input type="text" placeholder="Search..." className="search_input" />
        <Button
          className="edit_button create_button"
          onClick={() => router("createsport")}
        >
          create sport
        </Button>
      </div>
      <div className="home_grid">
        {sports.map((item) => {
          return <SportCard {...item} store={store} />;
        })}
      </div>
    </Layout>
  );
}
