import { NavLink } from "react-router-dom";
import Dropdown from "./dropdown/Dropdown";
import { AiOutlineClose, AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import './style.css';



export default function NavBar() {
  const [mobileNav, setMobileNav] = useState(false);
  const [devisModal, setDevisModal] = useState(false);
  const [switchDiv, setSwitch] = useState(false);

  return (
    <>
      <nav className="flex flex-row w-full h-16 top-0 sticky bg-colorDark justify-between items-center px-4 z-30">
        <NavLink className="flex flex-row gap-2 items-center text-colorWhite font-semibold" to={'/'}>
          <img src="/assets/react-logo.png" alt="logo" className="w-10 md:w-14" />
          <span className="hidden md:block merienda-font">
            MBOKO-TECHNOLOGY
          </span>
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

          <li className="text-colorWhite font-semibold cursor-pointer transition">
            <button
              className="border-[1px] border-colorOrange py-3 px-6 md:py-3 md:px-4 hover:border-colorOrange hover:bg-colorOrange hover:text-colorWhite rounded-md transition"
              onClick={() => setDevisModal(true)}
            >
              Lancez votre projet
            </button>
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

            <li
              className="text-colorWhite font-semibold border-[1px] border-colorWhite py-3 px-6 md:py-5 md:px-8 hover:border-colorOrange hover:bg-colorOrange hover:text-colorWhite rounded-md cursor-pointer transition"
              onClick={() => setDevisModal(true)}
            >
              <button >
                Lancez votre projet
              </button>
            </li>
          </ul>

        </div>

      </nav>






      {/* lancer un priojet */}


      {
        devisModal && (

          <>
            <div className="fixed right-0 top-0 z-50 h-full w-full md:w-[50%] overflow-y-scroll bg-colorDark animate__animated animate__slideInRight">
              <div className="flex flex-col justify-end items-end py-8 mx-8">
                <AiOutlineCloseCircle className="text-3xl text-colorOrange cursor-pointer hover:animate-spin" onClick={() => setDevisModal(false)} />
              </div>

              <div className="flex flex-row justify-center items-center my-6">
                <span className="text-colorWhite font-bold italic">Vous êtes un(e) : </span>
              </div>


              <div className="flex flex-row justify-center items-center gap-6 ">
                <span className={`font-semibold ${!switchDiv && 'text-colorOrange'}`}>Entreprise</span>

                <div className="flex h-8 w-16 bg-gray-600 justify-start items-center rounded-full cursor-pointer" onClick={() => setSwitch(!switchDiv)}>
                  <div className={`flex h-6 w-6 bg-colorOrange rounded-full ${switchDiv ? 'translate-x-[40px] duration-300' : 'translate-x-0 duration-300'}`}>
                  </div>
                </div>
                <span className={`font-semibold ${switchDiv && 'text-colorOrange'}`}>Particulier</span>
              </div>





              <div className="">
                <form className="flex flex-col justify-center items-center my-16 px-6 md:px-24" autoComplete="off">
                  {
                    !switchDiv ? (

                      <input type="text" name="name" id="name" placeholder="Raison sociale" className="w-full py-3 px-4 bg-gray-600 outline-none rounded-md text-colorWhite placeholder-colorWhite" />
                    ) : (
                      <input type="text" name="name" id="name" placeholder="Nom Complet" className="w-full py-3 px-4 bg-gray-600 outline-none rounded-md text-colorWhite placeholder-colorWhite" />

                    )
                  }

                  <input type="tel" name="tel" id="tel" placeholder="Numéro de téléphone" className="w-full py-3 px-4 bg-gray-600 outline-none mt-6 rounded-md text-colorWhite placeholder-colorWhite" />

                  <input type="email" name="email" id="email" placeholder="Adresse e-mail" className="w-full py-3 px-4 bg-gray-600 outline-none mt-6 rounded-md text-colorWhite placeholder-colorWhite" />

                  {
                    !switchDiv && (

                      <input type="text" name="adresse" id="adresse" placeholder="Adresse" className="w-full py-3 px-4  bg-gray-600 outline-none mt-6 rounded-md text-colorWhite placeholder-colorWhite" />
                    )
                  }

                  <input type="text" name="titre" id="titre" placeholder="Quel service sollicitez-vous ?" className="w-full py-3 px-4 mt-6 bg-gray-600 outline-none rounded-md text-colorWhite placeholder-colorWhite" />

                  <textarea rows={5} name="" id="" className="w-full my-6 px-2 py-3 bg-gray-600 placeholder-colorWhite text-colorWhite rounded-md" placeholder="Décrivez votre besoin en quelques lignes."></textarea>


                  <div className="flex flex-row justify-center items-center w-full">
                    <button type="submit" className="bg-colorOrange px-4 py-2 text-colorWhite font-semibold rounded-md">
                      Enregistrer
                    </button>

                  </div>
                </form>
              </div>

            </div>

            <div className="md:fixed left-0 z-50 top-0 h-full w-[50%] bg-black opacity-50 animate__animated animate__slideInLeft"></div>


          </>

        )
      }



    </>
  )
}