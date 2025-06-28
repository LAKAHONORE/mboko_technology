import { useEffect, useState } from "react";
import DevisComponent from "./components/devis-component/DevisComponent";
import DevisHero from "./components/hero/DevisHero";
import Loader from "../../loder/Loader";

export default function Devis() {

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
            <DevisHero />
            <DevisComponent />
          </>
        )
      }

    </>
  )
}
