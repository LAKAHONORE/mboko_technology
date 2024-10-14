import { Link } from "react-router-dom";
import Footer from "../outside/components/footer/Footer";
import NavBar from "../outside/components/navbar/NavBar";
import { AiFillHome } from "react-icons/ai";

export default function NotFound(){
  return(
    <>
      <NavBar />
      <div className="flex flex-col justify-center items-center p-5 bg-gray-950">
          
          <img className="md:h-[460px] w-auto animate-pulse" src="/assets/404_svg.png" alt="" />


         
            <p className="text-colorWhite text-sm md:text-xl text-center">Cette page n'est pas disponible pour le moment...</p>

            <Link className="bg-colorOrange mt-8 rounded-md" to={'/'}>
                <div className="flex flex-row items-center text-colorWhite py-2 px-5 font-bold gap-2">
                  <AiFillHome size={20}/>
                  Retourner à l'accueil
                </div>
              </Link>



      </div>
      <Footer />
    </>
  )
}