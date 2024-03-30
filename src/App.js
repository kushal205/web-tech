import Home from "./components/pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/pages/Login";
import SportEdit from "./components/pages/SportEdit";
import SportCreate from "./components/pages/SportsCreate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sportedit",
    element: <SportEdit />,
  },
  {
    path: "/createsport",
    element: <SportCreate />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
