import { Button } from "@mui/material";
import Layout from "../ui/Layout";
import SportCard from "../ui/card";
import Navbar from "../ui/navbar";
import "./index.css";
import { useNavigate } from "react-router-dom";

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
  const router = useNavigate();
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
        {sports_details.map((item) => {
          return <SportCard title={item.title} details={item.details} />;
        })}
      </div>
    </Layout>
  );
}
