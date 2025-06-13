import { createBrowserRouter } from "react-router-dom";
import Home from "../src/screens/outside/home/Home";
import About from "../src/screens/outside/about/About";
import NotFound from "../src/screens/404/NotFound";
import Realisations from "../src/screens/outside/realisations/Realisations";
import Contact from "../src/screens/outside/contact/Contact";
import Devis from "../src/screens/outside/devis/Devis";
import Marketing from "../src/screens/outside/services/marketing/Marketing";
import WebDevelopment from "../src/screens/outside/services/web-development/WebDevelopment";

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
    path: "/realisations",
    element: <Realisations />
  },

  {
    path: "/contact",
    element: <Contact />
  },

  {
    path: "/lancer-un-projet",
    element: <Devis />
  },

  {
    path: "/service/marketing",
    element: <Marketing />
  },

  {
    path: "/service/web-development",
    element: <WebDevelopment />
  },

  {
    path: "*",
    element: <NotFound />
  }
]);

export default routes;