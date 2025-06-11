
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <div className="flex justify-center items-center w-full h-[600px] md:h-[800px] overflow-hidden bg-no-repeat bg-cover bg-center animate__animated animate__fadeIn" style={{ backgroundImage: "url('/assets/hero.webp')" }}>
        <div className="absolute w-full h-[600px] md:h-[800px] mt-16 inset-0 bg-gradient-to-r from-colorDark to-transparent"></div>

        <div className="absolute flex flex-row w-full px-6">
          <div className="flex flex-col w-full justify-center items-center md:justify-start md:items-start">

            <h4 className="text-2xl text-center md:text-start text-colorWhite md:text-[50px] font-bold mb-5 text-shadow-lg animate__animated animate__bounce merienda-font">MBOKO-TECHNOLOGY</h4>

            <h4 className="text-[12px] text-center md:text-start text-colorWhite md:text-[17px] font-semibold italic mb-14 text-shadow-lg animate__animated animate__bounce">Une solution sur mesure adaptée à vos besoins !</h4>

            <p className="text-center md:text-start w-full md:w-[50%] text-colorWhite text-xl text-shadow-md animate__animated animate__slideInLeft">
              Nous sommes spécialisés dans les services informatiques, allant du <a className="text-colorOrange" href="">marketing digital</a> à la réalisation d’ <a className="text-colorOrange" href="">applications et logiciels métiers</a>,
              de <a className="text-colorOrange" href="">sites internet </a>, sans oublier la <a className="text-colorOrange" href="">conception graphique</a> et <a className="text-colorOrange" href="">bien d’autres encore</a>.
            </p>

            <div className="mt-[80px] text-center md:text-start">
              <Link className="bg-colorOrange border-[1px] border-colorOrange py-3 px-6 md:py-5 md:px-8 font-semibold text-colorWhite rounded-md hover:bg-transparent hover:text-colorWhite transition" to={'/about'}>
                En savoir plus
              </Link>
            </div>
          </div>

        </div>


      </div>
    </>
  )
}