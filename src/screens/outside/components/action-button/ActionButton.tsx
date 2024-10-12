import { Link } from "react-router-dom";

export default function ActionButton() {
  return (
    <>
      <div className="flex flex-col h-56 p-10 md:flex md:flex-row justify-between items-center my-6 bg-gray-950 md:h-52 px-5">
        <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
          <h1 className="text-xl text-colorWhite md:text-3xl font-bold">
            <span>Lancez votre projet !</span>
          </h1>
          <p className="text-center text-sm text-colorWhite md:text-xl">
            Votre seule limite est votre imagination. Ensemble transformons vos idées, en réalisations.
          </p>
        </div>

        <div className="">
          <Link className="bg-colorOrange text-colorWhite font-semibold py-3 px-6 md:py-5 md:px-8 hover:bg-colorWhite hover:text-colorOrange transition rounded-md" to={''}>
            Passez à l'action
          </Link>
        </div>
      </div>
    </>
  )
}