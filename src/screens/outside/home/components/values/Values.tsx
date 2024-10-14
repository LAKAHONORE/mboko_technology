import { IoIosQuote } from "react-icons/io";

export default function Values() {
  return (
    <>
      <div className="w-full justify-center bg-colorDark mb-20 px-2">
        <div className="flex flex-row justify-center w-full py-6 mb-6">
          <h1 className="text-xl md:text-3xl font-semibold text-colorWhite">
            <span className="custom-title">Pourquoi nous choisir ?</span>
          </h1>
        </div>

        <div className="block md:flex flex-row gap-2 ">

          <div className="p-5 animate__animated animate__slideInLeft">
            <h1>
              <div className="flex-row">
                <IoIosQuote className="text-colorOrange text-[30px]" />
                <span className="text-xl text-colorOrange ml-8 font-semibold">
                  Compétence Technique
                </span>
              </div>
              <p className="text-justify md:text-start ml-8 text-colorWhite">Nous disposons d'une équipe d'experts maîtrisant les dernières technologies et outils. Grâce à notre savoir-faire, nous vous proposons des solutions sur mesure qui répondent aux exigences les plus élevées.</p>
            </h1>
          </div>

          <div className="p-5 animate__animated animate__backInUp">
            <h1>
              <div className="flex-row">
                <IoIosQuote className="text-colorOrange text-[30px]" />
                <span className="text-xl text-colorOrange ml-8 font-semibold">
                  Réactivité et support client
                </span>
              </div>
              <p className="text-justify md:text-start ml-8 text-colorWhite">La capacité à répondre rapidement aux demandes et à fournir un support efficace est primordiale. Les clients apprécient un service qui comprend leurs besoins et qui peut résoudre les problèmes rapidement.</p>
            </h1>
          </div>

          <div className="p-5 animate__animated animate__slideInRight">
            <h1>
              <div className="flex-row">
                <IoIosQuote className="text-colorOrange text-[30px]" />
                <span className="text-xl text-colorOrange ml-8 font-semibold">
                  Adaptabilité et innovation 
                </span>
              </div>
              <p className="text-justify md:text-start ml-8 text-colorWhite">Le secteur informatique évolue rapidement. Une bonne entreprise doit être capable de s’adapter aux nouvelles technologies et d'innover pour offrir des solutions à la pointe, répondant ainsi aux besoins changeants de ses clients.</p>
            </h1>
          </div>

        </div>
      </div>
    </>
  )
}