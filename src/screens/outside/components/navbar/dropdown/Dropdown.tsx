import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { NavLink } from "react-router-dom";


export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button className="flex flex-row items-center text-colorWhite font-semibold hover:text-colorOrange transition" onClick={() => setIsOpen(!isOpen)}>
        Services

        {isOpen ? (
          <IoIosArrowUp className="ml-1" />
        ) : (
          <IoIosArrowDown className="ml-1" />
        )}
      </button>

      {isOpen && (
        <ul className="md:absolute sm:relative z-10 py-4 bg-colorDark p-2 mx-1 rounded-md">
          <li className="text-colorWhite hover:text-colorOrange mt-5 transition">
            <NavLink to={'/service/developpemnt-web'}>
              Développement et création web
            </NavLink>
          </li>

          <li className="text-colorWhite  hover:text-colorOrange mt-5 transition">
            <NavLink to={'/servicedeveloppement-mobile'}>
              Développement mobiles
            </NavLink>
          </li>

          <li className="text-colorWhite  hover:text-colorOrange mt-5 transition">
            <NavLink to={'/service/marketing'}>
              Marketing Digital
            </NavLink>
          </li>

          <li className="text-colorWhite  hover:text-colorOrange mt-5 transition">
            <NavLink to={'/service/conception-graphique'}>
              Conception Graphique
            </NavLink>
          </li>
        </ul>
      )}

    </li>
  )
}