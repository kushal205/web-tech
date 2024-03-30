import { Button, TextField } from "@mui/material";
import Layout from "../ui/Layout";

export default function SportEdit() {
  return (
    <Layout>
      <div className="form_container">
        <div className="form_header">Update Sport Details</div>
        <form className="form_flex">
          <TextField
            id="outlined-number"
            label="Name"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="outlined-number"
            label="Details"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="outlined-number"
            label="Total Players"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button className="edit_button">Update</Button>
        </form>
      </div>
    </Layout>
  );
}
