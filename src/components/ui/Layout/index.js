import Navbar from "../navbar";
import "../../../App.css";

export default function Layout({ children }) {
  return (
    <div className="layout_container">
      <Navbar />
      {children}
    </div>
  );
}
