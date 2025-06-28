import { useEffect, useState } from "react";
import ActionButton from "../components/action-button/ActionButton";
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
            <Hero />
            <RealisationsC />
            <ActionButton />
          </>
        )
      }

    </>
  )
}
