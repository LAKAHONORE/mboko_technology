import Enterprise from "./enterprise/Enterprise";
import Links from "./liens-utiles/Links";
import Services from "./services/Services";

export default function Footer() {
  return (
    <>
      <footer className=" border-t-[1px] border-t-colorDark dark:border-t-colorWhite bg-colorWhite dark:bg-colorDark">
        <div className="flex justify-center items-center ">
          <div className="block justify-center items-center md:flex flex-row md:justify-between w-[80%] md:items-center my-2">
            <Enterprise />
            <Links />
            <Services />
          </div>
        </div>

        <div className="flex flex-row justify-center items-center w-full bg-[#f1f1f1] dark:bg-gray-950 text-colorDark dark:text-colorWhite">
          <span className="text-[10px]">
            Designed by <a className="hover:text-colorOrange" href="#">© MBOKO-TECHNOLOGY</a>
          </span>
          <span className="text-[10px]">
            . All Rights Reserved
          </span>
        </div>
      </footer>

    </>
  )
}