import { useEffect, useState } from "react";
import ActionButton from "../components/action-button/ActionButton";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";
import Values from "../home/components/values/Values";
import ContactForm from "./components/contact-form/ContactForm";
import Enterprise from "./components/enterprise/Enterprise";
import Hero from "./components/hero/Hero";
import Loader from "../../loder/Loader";

export default function About() {

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
            <Values />
            <Enterprise />
            <ActionButton />
            <ContactForm />
            <Footer />
          </>
        )
      }

    </>
  )
}