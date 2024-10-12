import ActionButton from "../components/action-button/ActionButton";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";
import AboutComponent from "./components/about/AboutComponent";
import Hero from "./components/hero/Hero";
import ServicesComponent from "./components/services/ServicesComponent";
import Values from "./components/values/Values";
import "./style.css";
import "animate.css";


export default function Home(){
  return (
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