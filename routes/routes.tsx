import { createBrowserRouter } from "react-router-dom";
import Home from "../src/screens/outside/home/Home";
import About from "../src/screens/outside/about/About";
import NotFound from "../src/screens/404/NotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element : <Home />,
  },
  {
    path: "/about",
    element: <About />
  },


  

  {
    path: "*",
    element: <NotFound />
  }
]);

export default routes;