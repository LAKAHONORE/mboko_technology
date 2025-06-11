import { useEffect, useState } from "react";
import ActionButton from "../components/action-button/ActionButton";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";
import AboutComponent from "./components/about/AboutComponent";
import Hero from "./components/hero/Hero";
import ServicesComponent from "./components/services/ServicesComponent";
import Values from "./components/values/Values";
import "./style.css";
import "animate.css";
import Loader from "../../loder/Loader";


export default function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //Simulation du chargement

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    //Nettoyage de l'effet

    return () => clearTimeout(timer)
  }, [])


  return (
    <>
      {
        loading ? (
          <Loader />
        ) : (
          <>
            <NavBar />
            <Hero />
            <Values />
            <AboutComponent />
            <ServicesComponent />
            <ActionButton />
            <Footer />
          </>
        )
      }
    </>
  )
}