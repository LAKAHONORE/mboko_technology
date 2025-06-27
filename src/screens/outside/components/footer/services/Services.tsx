import { IoIosArrowDroprightCircle } from "react-icons/io";

export default function Services() {
  return (
    <>
      <div className="flex flex-col justify-center items-start">
        <h1 className="text-xl font-semibold mb-4 text-colorDark dark:text-colorWhite">
          <span className="custom-title">Nos services</span>
        </h1>

        <div className="flex flex-row gap-2 justify-center items-center my-2">
          <span>
            <IoIosArrowDroprightCircle className="text-colorOrange" />
          </span>
          <a className="text-colorDark dark:text-colorWhite hover:text-colorOrange transition" href="">Développement Web</a>
        </div>

        <div className="flex flex-row gap-2 justify-center items-center my-2">
          <span>
            <IoIosArrowDroprightCircle  className="text-colorOrange" />
          </span>
          <a className="text-colorDark dark:text-colorWhite hover:text-colorOrange transition" href="">Développement Mobile</a>
        </div>

        <div className="flex flex-row gap-2 justify-center items-center my-2">
          <span>
            <IoIosArrowDroprightCircle  className="text-colorOrange" />
          </span>
          <a className="text-colorDark dark:text-colorWhite hover:text-colorOrange transition" href="">Application métiers</a>
        </div>

        <div className="flex flex-row gap-2 justify-center items-center my-2">
          <span>
            <IoIosArrowDroprightCircle  className="text-colorOrange" />
          </span>
          <a className="text-colorDark dark:text-colorWhite hover:text-colorOrange transition" href="">Conceptions graphiques</a>
        </div>

        <div className="flex flex-row gap-2 justify-center items-center my-2">
          <span>
            <IoIosArrowDroprightCircle  className="text-colorOrange" />
          </span>
          <a className="text-colorDark dark:text-colorWhite hover:text-colorOrange transition" href="">Marketing Digital</a>
        </div>

      </div>
    </>
  )
}