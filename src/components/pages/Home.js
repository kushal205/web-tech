import { Button } from "@mui/material";
import Layout from "../ui/Layout";
import SportCard from "../ui/card";
import Navbar from "../ui/navbar";
import "./index.css";
import { useNavigate } from "react-router-dom";
import football from '../../assets/football.jpg'

const sports_details = [
  {
    title: "Cricket",
    details: "details about the game",
    img : "https://cdn.pixabay.com/photo/2015/04/15/21/06/cricket-724615_1280.jpg"
  },
  {
    title: "Badminton",
    details: "details about the game",
    img : football
  },
  {
    title: "Football",
    details: "details about the game",
    img : football
  },
  {
    title: "Swimming",
    details: "details about the game",
    img : football
  },
  {
    title: "Tennis",
    details: "details about the game",img : football
  },
  {
    title: "Boardgames",
    details: "details about the game",img : football
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
          return <SportCard title={item.title} details={item.details} image={item.img} />;
        })}
      </div>
    </Layout>
  );
}
