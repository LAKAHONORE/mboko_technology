import { IoIosLink } from "react-icons/io";

export default function Links() {
  return (
    <>
      <div className="flex flex-col justify-center items-start">
        <h1 className="text-xl font-semibold mb-4 text-colorWhite">
          <span className="custom-title">Liens utiles</span>
        </h1>

        <div className="flex flex-row gap-2 justify-center items-center my-2">
          <span>
            <IoIosLink className="text-colorOrange" />
          </span>
          <a className="text-colorWhite hover:text-colorOrange transition" href="">Accueil</a>
        </div>

        <div className="flex flex-row gap-2 justify-center items-center my-2">
          <span>
            <IoIosLink  className="text-colorOrange" />
          </span>
          <a className="text-colorWhite hover:text-colorOrange transition" href="">A Propos</a>
        </div>

        <div className="flex flex-row gap-2 justify-center items-center my-2">
          <span>
            <IoIosLink  className="text-colorOrange" />
          </span>
          <a className="text-colorWhite hover:text-colorOrange transition" href="">Solutions</a>
        </div>

        <div className="flex flex-row gap-2 justify-center items-center my-2">
          <span>
            <IoIosLink  className="text-colorOrange" />
          </span>
          <a className="text-colorWhite hover:text-colorOrange transition" href="">Réalisations</a>
        </div>

      </div>
    </>
  )
}