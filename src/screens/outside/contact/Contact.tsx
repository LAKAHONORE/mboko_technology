import { useEffect, useState } from "react";
import ContactForm from "../about/components/contact-form/ContactForm";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";
import HeroContact from "./components/hero/HeroContact";
import Loader from "../../loder/Loader";

export default function Contact() {

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
                        <HeroContact />
                        <ContactForm />
                        <Footer />
                    </>
                )
            }

        </>
    )
}