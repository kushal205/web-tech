import Layout from "../ui/Layout";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";
import { useEffect, useState } from "react";
import server from "../../utils/server";

export default function Booking() {
  const [bookedData, setBookedData] = useState([]);

  const getBookedList = async () => {
    try {
      const res = await server.get("api/admin/booking");
      console.log("res data of booked list", res.data.data);
      setBookedData(res.data.data);
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    getBookedList();
  }, []);
  return (
    <Layout>
      <h2 className="booking_title">Booking</h2>
      <div className="booking_list">
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {bookedData.map((data, index) => {
            return (
              <ListItem key={`list-booked-${index}`}>
                <ListItemAvatar>
                  <Avatar>
                    <img
                      src={data.sport.image}
                      alt={data.sport.name}
                      className="list_image"
                    />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={data.sport.name}
                  secondary={`At - ${new Date(data.datetime).toLocaleString()}`}
                />
              </ListItem>
            );
          })}
        </List>
      </div>
    </Layout>
  );
}
