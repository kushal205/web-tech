import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import football from "../../../assets/football.jpg";
import { Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TransitionsModal from "../modal";

export default function SportCard({
  name,
  image,
  description,
  id,
  location,
  pitches,
  store,
}) {
  //use states
  const [modalOpen, setModalOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  //router
  const router = useNavigate();

  //functions
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    store?.action.setSelectedSport(`${id}`);
    setAnchorEl(null);
    setModalOpen(!modalOpen);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <IconButton
            aria-label="settings"
            onClick={handleClick}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            store?.action.setSelectedSport(`${id}`);
            router("/sportedit");
          }}
        >
          Edit
        </MenuItem>
        <MenuItem onClick={handleClose}>Delete</MenuItem>
      </Menu>
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt={`image-${id}`}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Description: {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Pitches: {pitches}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Location: {location}
        </Typography>
      </CardContent>
      <TransitionsModal open={modalOpen} setOpen={setModalOpen} />
    </Card>
  );
}
