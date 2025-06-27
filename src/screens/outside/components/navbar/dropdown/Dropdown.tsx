import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { NavLink } from "react-router-dom";


export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button className="flex flex-row items-center text-colorDark dark:text-colorWhite font-semibold hover:text-colorOrange transition" onClick={() => setIsOpen(!isOpen)}>
        Services

        {isOpen ? (
          <IoIosArrowUp className="ml-1" />
        ) : (
          <IoIosArrowDown className="ml-1" />
        )}
      </button>

      {isOpen && (
        <ul className="md:absolute sm:relative z-10 py-4 bg-colorWhite dark:bg-colorDark p-2 mx-1 rounded-md animate__animated animate__fadeIn">
          <li className="text-colorDark dark:text-colorWhite hover:text-colorOrange mt-5 transition">
            <NavLink to={'/service/web-development'}>
              Développement & Création web
            </NavLink>
          </li>

          <li className="text-colorDark dark:text-colorWhite  hover:text-colorOrange mt-5 transition">
            <NavLink to={'/service/mobile-development'}>
              Développement mobiles
            </NavLink>
          </li>

          <li className="text-colorDark dark:text-colorWhite  hover:text-colorOrange mt-5 transition">
            <NavLink to={'/service/marketing'}>
              Marketing Digital
            </NavLink>
          </li>

          <li className="text-colorDark dark:text-colorWhite hover:text-colorOrange mt-5 transition">
            <NavLink to={'/service/conception-graphique'}>
              Conception Graphique
            </NavLink>
          </li>

          <li className="text-colorDark dark:text-colorWhite  hover:text-colorOrange mt-5 transition">
            <NavLink to={'/ss'}>
              Gestion des réseaux sociaux
            </NavLink>
          </li>

          <li className="text-colorDark dark:text-colorWhite hover:text-colorOrange mt-5 transition">
            <NavLink to={'/az'}>
              Campagnes sponsorisées
            </NavLink>
          </li>

          <li className="text-colorDark dark:text-colorWhite hover:text-colorOrange mt-5 transition">
            <NavLink to={'/aze'}>
              Stratégies de contenu & Branding
            </NavLink>
          </li>

          <li className="text-colorDark dark:text-colorWhite hover:text-colorOrange mt-5 transition">
            <NavLink to={'/azert'}>
              SEO & Référencement naturel
            </NavLink>
          </li>
        </ul>
      )}

    </li>
  )
}