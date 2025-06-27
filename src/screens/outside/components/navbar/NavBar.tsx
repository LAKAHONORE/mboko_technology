import { NavLink } from "react-router-dom";
import Dropdown from "./dropdown/Dropdown";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useContext, useState } from "react";
import './style.css';
import TopBar from "../top-bar/TopBar";
import { IoIosArrowDown, IoMdMoon, IoMdSunny } from "react-icons/io";
import { ThemeContext } from "../../../../context/ThemeContext";



export default function NavBar() {
  const [mobileNav, setMobileNav] = useState(false);
  const [isToogle, setIsToogle] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleThemeChange = (newTheme: string) => {
    toggleTheme(newTheme);
  }

  return (
    <>
      <TopBar />
      <nav className="flex flex-row w-full h-16 top-6 sticky bg-colorWhite dark:bg-colorDark justify-between items-center px-4 z-30">
        <NavLink className="flex flex-row gap-2 items-center text-colorWhite font-semibold animate__animated animate__fadeIn" to={'/'}>
          {
            theme === 'dark' ? (
              <img src="/assets/logo.webp" alt="logo" className="w-20 md:w-36" />
            ):(
              <img src="/assets/logo-white.webp" alt="logo" className="w-20 md:w-36" />
            )
          }
        </NavLink>

        <ul className="hidden md:flex justify-center items-center flex-row gap-4">
          <li className="text-colorDark dark:text-colorWhite hover:text-colorOrange font-semibold cursor-pointer">
            <NavLink to={'/'}>
              Accueil
            </NavLink>
          </li>

          <li className="text-colorDark dark:text-colorWhite font-semibold hover:text-colorOrange cursor-pointer transition">
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

          <li className="text-colorDark dark:text-colorWhite font-semibold hover:text-colorOrange cursor-pointer transition">
            <NavLink to={'/realisations'}>
              Réalisations
            </NavLink>
          </li>


          <li className="text-colorDark dark:text-colorWhite font-semibold hover:text-colorOrange cursor-pointer transition">
            <NavLink to={'/contact'}>
              Contact
            </NavLink>
          </li>

          <li className="text-colorDark dark:text-colorWhite font-semibold cursor-pointer transition">
            <NavLink to={'/lancer-un-projet'} className="border-[1px] border-colorOrange py-3 px-6 md:py-3 md:px-4 hover:border-colorOrange hover:bg-colorOrange hover:text-colorWhite rounded-md transition">
              Lancez votre projet
            </NavLink>
          </li>
        </ul>

        <div className="flex cursor-pointer">

          <ul>
            <li>
              <span className="flex flex-row items-center gap-x-1" onClick={() => setIsToogle(!isToogle)}>
                {
                  theme === "dark" ? (
                    <IoMdMoon className="text-2xl text-colorOrange animate__animated animate__fadeIn" />
                  ) : (

                    <IoMdSunny className="text-2xl text-colorOrange animate__animated animate__fadeIn" />
                  )
                }
                <span className="text-colorDark dark:text-colorWhite">Changer de thème</span>
                <IoIosArrowDown className={`ml-1 text-colorDark dark:text-colorWhite ${isToogle ? 'rotate-180' : ''} transition`} />
              </span>

              {
                isToogle && (
                  <ul className="absolute flex flex-col gap-y-3 py-3 bg-colorWhite dark:bg-colorDark animate__animated animate__fadeIn px-6" onClick={() => setIsToogle(!isToogle)}>
                    <li>
                      <button type="button" className="flex flex-row items-center gap-x-2" onClick={()=>handleThemeChange(`light`)}>
                        <IoMdSunny className="text-2xl dark:text-colorWhitetext-colorDark dark:text-colorWhite animate__animated animate__fadeIn" />
                        <span className="hover:text-colorOrange transition">Mode claire</span>
                      </button>
                    </li>


                    <li>
                      <button type="button" className="flex flex-row items-center gap-x-2" onClick={()=>handleThemeChange(`dark`)}>
                        <IoMdMoon className="text-2xl" />
                        <span className="hover:text-colorOrange transition">Mode sombre</span>
                      </button>
                    </li>
                  </ul>
                )
              }
            </li>
          </ul>


        </div>


        <div className="block md:hidden cursor-pointer transition" onClick={() => setMobileNav(!mobileNav)}>
          {mobileNav ?
            (
              <AiOutlineClose size={25} className="text-colorDark dark:text-colorWhite" />
            ) : (
              <AiOutlineMenu size={25} className="text-colorDark dark:text-colorWhite" />
            )
          }
        </div>

        <div className={`fixed md:hidden top-16 bg-colorWhite dark:bg-colorDark z-20 w-[100%] h-full animate__animated animate__slideInLeft duration-500 ${mobileNav ? "right-0 opacity-100" : "right-[100%] opacity-0"
          }`}>

          <ul className="flex flex-col gap-4 mx-4 my-4">


            <li className="text-colorOrange font-semibold">
              <NavLink to={'/'}>
                Accueil
              </NavLink>
            </li>

            <li className="text-colorDark dark:text-colorWhite font-semibold hover:text-colorOrange transition">
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

            <li className="text-colorDark dark:text-colorWhite font-semibold hover:text-colorOrange transition">
              <NavLink to={'/realisations'}>
                Réalisations
              </NavLink>
            </li>

            <li className="text-colorDark dark:text-colorWhite font-semibold hover:text-colorOrange transition">
              <NavLink to={'/contact'}>
                Contact
              </NavLink>
            </li>

            <li
              className="text-colorDark dark:text-colorWhite font-semibold border-[1px] border-colorDark dark:border-colorWhite py-3 px-6 md:py-5 md:px-8 hover:border-colorOrange hover:bg-colorOrange hover:text-colorWhite rounded-md cursor-pointer transition"
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