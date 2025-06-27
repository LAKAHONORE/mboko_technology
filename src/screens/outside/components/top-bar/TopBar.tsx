import { useState } from "react";
import { IoIosArrowDown, IoIosGlobe } from "react-icons/io";
import { Link } from "react-router-dom";

export default function TopBar() {
    const [language, setLanguage] = useState(false);
    return (
        <div className="flex flex-row w-full h-6 top-0 sticky justify-between items-center bg-colorOrange z-50 px-6 py-2">
            <div className="flex flex-row gap-x-10">
                <Link to={'mailto:contact@mbokotechnology.com'} title="contact@mbokotechnology.com" className="flex flex-row items-center gap-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-envelope-fill text-white" viewBox="0 0 16 16">
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                    </svg>
                    <span className="text-white hidden md:flex">contact@mbokotechnology.com</span>
                </Link>

                <Link to={'tel:657715479'} title="657 715 479" className="flex flex-row items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-phone-fill text-white" viewBox="0 0 16 16">
                        <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0" />
                    </svg>
                    <span className="text-white hidden md:flex">657 715 479</span>
                </Link>
            </div>

            <div className="flex flex-row items-center gap-x-1 hover:cursor-pointer" onClick={() => setLanguage(!language)}>
                <IoIosGlobe className={`text-white ${language ? 'rotate-180' : ''} transition`} />
                <ul>
                    <li>
                        <span className="flex flex-row items-center ">
                            <span className="text-white text-sm">Langues</span>
                            <IoIosArrowDown className={`ml-1 text-white ${language ? 'rotate-180' : ''} transition`} />
                        </span>

                        {
                            language && (
                                <ul className="absolute flex flex-col gap-3 py-3 bg-colorWhite z-50 mt-2 animate__animated animate__fadeIn">
                                    <li>
                                        <Link to={'/'} className="text-colorDark hover:text-colorOrange mx-3 transition">
                                            Français
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'/'} className="text-colorDark hover:text-colorOrange mx-3 transition">
                                            Anglais
                                        </Link>
                                    </li>
                                </ul>
                            )
                        }

                    </li>
                </ul>
            </div>
        </div>
    )
}