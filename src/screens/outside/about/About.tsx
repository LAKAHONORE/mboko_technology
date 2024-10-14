import ActionButton from "../components/action-button/ActionButton";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";
import Values from "../home/components/values/Values";
import ContactForm from "./components/contact-form/ContactForm";
import Enterprise from "./components/enterprise/Enterprise";
import Hero from "./components/hero/Hero";

export default function About(){
  return(
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