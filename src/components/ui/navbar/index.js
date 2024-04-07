import { useNavigate } from "react-router-dom";
import "./index.css";

const navbar_header = [
  { name: "home", route: "/" },
  { name: "about" },
  { name: "contact us" },
];
export default function Navbar() {
  const router = useNavigate();
  return (
    <div className="navbar_container nav_flex">
      <div>logo</div>
      <div className="nav_details_flex">
        {navbar_header.map((item) => {
          return (
            <div
              className="pointer"
              onClick={() => {
                if (item.route) router(item.route);
              }}
            >
              {item.name}
            </div>
          );
        })}
      </div>
      <div className="pointer" onClick={() => router("/login")}>
        logout
      </div>
    </div>
  );
}
