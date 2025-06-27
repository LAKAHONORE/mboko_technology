import { IoIosLink } from "react-icons/io";
import { NavLink } from "react-router-dom";

export default function Links() {
  return (
    <>
      <div className="flex flex-col justify-center items-start">
        <h1 className="text-xl font-semibold mb-4 text-colorDark dark:text-colorWhite">
          <span className="custom-title">Liens utiles</span>
        </h1>

        <div className="flex flex-row gap-2 justify-center items-center my-2">
          <span>
            <IoIosLink className="text-colorOrange" />
          </span>
          <NavLink className="text-colorDark dark:text-colorWhite hover:text-colorOrange transition" to="">Accueil</NavLink>
        </div>

        <div className="flex flex-row gap-2 justify-center items-center my-2">
          <span>
            <IoIosLink  className="text-colorOrange" />
          </span>
          <NavLink className="text-colorDark dark:text-colorWhite hover:text-colorOrange transition" to="">A Propos</NavLink>
        </div>

        <div className="flex flex-row gap-2 justify-center items-center my-2">
          <span>
            <IoIosLink  className="text-colorOrange" />
          </span>
          <NavLink className="text-colorDark dark:text-colorWhite hover:text-colorOrange transition" to="">Solutions</NavLink>
        </div>

        <div className="flex flex-row gap-2 justify-center items-center my-2">
          <span>
            <IoIosLink  className="text-colorOrange" />
          </span>
          <NavLink className="text-colorDark dark:text-colorWhite hover:text-colorOrange transition" to="">Réalisations</NavLink>
        </div>

      </div>
    </>
  )
}