import { NavLink } from "react-router-dom";
import Dropdown from "./dropdown/Dropdown";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import './style.css';



export default function NavBar() {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <>
      <nav className="flex flex-row w-full h-16 top-0 sticky bg-colorDark justify-between items-center px-4 z-30">
        <NavLink className="flex flex-row gap-2 items-center text-colorWhite font-semibold" to={'/'}>
          <img src="/assets/logo.webp" alt="logo" className="w-36" />
        </NavLink>

        <ul className="hidden md:flex justify-center items-center flex-row gap-4">
          <li className="text-colorWhite hover:text-colorOrange font-semibold cursor-pointer">
            <NavLink to={'/'}>
              Accueil
            </NavLink>
          </li>

          <li className="text-colorWhite font-semibold hover:text-colorOrange cursor-pointer transition">
            <NavLink to={'/about'}>
              A Propos
            </NavLink>
          </li>

          <Dropdown />

          {/* <li className="text-colorWhite font-semibold hover:text-colorOrange cursor-pointer transition">
            <NavLink to={'/solutions'}>
              Solutions
            </NavLink>
          </li> */}

          <li className="text-colorWhite font-semibold hover:text-colorOrange cursor-pointer transition">
            <NavLink to={'/realisations'}>
              Réalisations
            </NavLink>
          </li>


          <li className="text-colorWhite font-semibold hover:text-colorOrange cursor-pointer transition">
            <NavLink to={'/contact'}>
              Contact
            </NavLink>
          </li>

          <li className="text-colorWhite font-semibold cursor-pointer transition">
              <NavLink to={'/lancer-un-projet'} className="border-[1px] border-colorOrange py-3 px-6 md:py-3 md:px-4 hover:border-colorOrange hover:bg-colorOrange hover:text-colorWhite rounded-md transition">
                Lancez votre projet
              </NavLink>
          </li>
        </ul>


        <div className="block md:hidden cursor-pointer transition" onClick={() => setMobileNav(!mobileNav)}>
          {mobileNav ?
            (
              <AiOutlineClose size={25} className="text-white" />
            ) : (
              <AiOutlineMenu size={25} className="text-white" />
            )
          }
        </div>

        <div className={`fixed md:hidden top-16 bg-colorDark z-20 w-[100%] h-full animate__animated animate__slideInLeft duration-500 ${mobileNav ? "right-0 opacity-100" : "right-[100%] opacity-0"
          }`}>

          <ul className="flex flex-col gap-4 mx-4 my-4">


            <li className="text-colorOrange font-semibold">
              <NavLink to={'/'}>
                Accueil
              </NavLink>
            </li>

            <li className="text-colorWhite font-semibold hover:text-colorOrange transition">
              <NavLink to={'/about'}>
                A Propos
              </NavLink>
            </li>

            <Dropdown />

            {/* <li className="text-colorWhite font-semibold hover:text-colorOrange transition">
              <NavLink to={'/solutions'}>
                Solutions
              </NavLink>
            </li> */}

            <li className="text-colorWhite font-semibold hover:text-colorOrange transition">
              <NavLink to={'/realisations'}>
                Réalisations
              </NavLink>
            </li>

            <li className="text-colorWhite font-semibold hover:text-colorOrange transition">
              <NavLink to={'/contact'}>
                Contact
              </NavLink>
            </li>

            <li
              className="text-colorWhite font-semibold border-[1px] border-colorWhite py-3 px-6 md:py-5 md:px-8 hover:border-colorOrange hover:bg-colorOrange hover:text-colorWhite rounded-md cursor-pointer transition"
              >
              <NavLink to={'/lancer-un-projet'}>
                Lancez votre projet
              </NavLink>
            </li>
          </ul>

        </div>

      </nav>

    </>
  )
}