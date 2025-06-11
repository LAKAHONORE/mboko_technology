import { useEffect, useState } from "react";
import ActionButton from "../components/action-button/ActionButton";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";
import Hero from "../realisations/components/hero/Hero";
import RealisationsC from "./components/realisationsC/RealisationsC";
import Loader from "../../loder/Loader";

export default function Realisations() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //Simulation du chargement

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

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
            <RealisationsC />
            <ActionButton />
            <Footer />
          </>
        )
      }

    </>
  )
}
