import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import QRCode from 'qrcode-generator';




export default function DevisComponent() {
    const message  = 'Bonjour, j\'aimerais avoir plus d\'informations sur vos poduits et services s\il vous plaît!';
    const whatsappUrl = `https://wa.me/237656587406?text=${encodeURIComponent(message)}`;
    const qrRef = useRef<HTMLDivElement>(null);
    

    const [switchDiv, setSwitch] = useState(false);

    const handleSubmit = () => {
        alert('formulaire soumis avec succès !');
     }


    useEffect(() => { // GESTION DU QRCODE
        const qr = QRCode(0, 'L');
        qr.addData(whatsappUrl);
        qr.make();
        if (qrRef.current) { // Vérification pour éviter l'erreur
            qrRef.current.innerHTML = qr.createImgTag(2); // Taille
        } // Taille
    }, [whatsappUrl]);

    return (
        <>

            <div className="flex flex-col md:flex md:flex-row gap-4 bg-colorWhite dark:bg-colorDark py-20 px-4 animate__animated animate__fadeIn">
                <div className="block w-full md:flex flex-col shadow-lg shadow-shadowColor h-auro md:w-1/3 p-5">
                    <span className="text-3xl font-bold text-colorDark dark:text-colorWhite">Contactez-nous</span>
                    <p className="text-colorDark dark:text-colorWhite">Pour plus d'informations.</p>

                    <div className="flex flex-row gap-4 mt-8">
                        <div className="flex text-colorOrange">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                            </svg>
                        </div>
                        <div className="flex flex-col text-colorDark dark:text-colorWhite">
                            <span className="text-sm font-semibold">Localisation</span>
                            <span className="text-sm">Douala - Direction Générale Hysacam, Cameroun</span>
                        </div>
                    </div>

                    <div className="flex h-[1px] w-full bg-gray-500 mt-5"></div>


                    <div className="flex flex-row gap-4 mt-8">
                        <div className="flex text-colorOrange">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                            </svg>
                        </div>
                        <div className="flex flex-col text-colorDark dark:text-colorWhite">
                            <span className="text-sm font-semibold">Email</span>
                            <Link to={'mailto:'}>lakahonore1@gmail.com</Link>
                        </div>
                    </div>

                    <div className="flex h-[1px] w-full bg-gray-500 mt-5"></div>


                    <div className="flex flex-row gap-4 mt-8">
                        <div className="flex text-colorOrange">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-phone-fill" viewBox="0 0 16 16">
                                <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0" />
                            </svg>
                        </div>
                        <div className="flex flex-col text-colorDark dark:text-colorWhite">
                            <span className="text-sm font-semibold">Téléphones</span>
                            <div className="flex flex-row gap-2">
                                <Link to={'tel:687074679'}>687 074 679</Link>
                                <span>/</span>
                                <Link to={'mailto:656587406'}>656 587 406</Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex h-[1px] w-full bg-gray-500 mt-5"></div>


                    <div className="flex flex-row gap-4 mt-8">
                        <div className="flex text-colorOrange">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                            </svg>
                        </div>
                        <div className="flex flex-col text-colorDark dark:text-colorWhite">
                            <span className="text-sm font-semibold">Whatsapp</span>
                            <div className="flex flex-row gap-2 mb-2">
                                <Link to={'tel:687074679'}>687 074 679</Link>
                                <span>/</span>
                                <Link to={'mailto:656587406'}>656 587 406</Link>
                            </div>

                            <div ref={qrRef} />

                        </div>
                    </div>

                </div>

                <div className="block w-full md:flex flex-col shadow-lg shadow-shadowColor h-auto md:w-2/3 p-5">

                    <div className="flex flex-row justify-center items-center my-6">
                        <span className="text-colorDark dark:text-colorWhite font-bold italic">Vous êtes un(e) : </span>
                    </div>


                    <div className="flex flex-row w-full justify-center items-center gap-6 my-6">
                        <span className={`font-semibold ${!switchDiv && 'text-colorOrange'}`}>Entreprise</span>

                        <div className="flex h-8 w-16 bg-[#f1f1f1] dark:bg-gray-600 justify-start items-center rounded-full cursor-pointer" onClick={() => setSwitch(!switchDiv)}>
                            <div className={`flex h-6 w-6 bg-colorOrange rounded-full ${switchDiv ? 'translate-x-[40px] duration-300' : 'translate-x-0 duration-300'}`}>
                            </div>
                        </div>
                        <span className={`font-semibold ${switchDiv && 'text-colorOrange'}`}>Particulier</span>
                    </div>





                    <div className="">
                        <form className="POST" autoComplete="off" onSubmit={()=>handleSubmit}>
                            {
                                !switchDiv ? (

                                    <input type="text" name="name" id="name" placeholder="Raison sociale" className="w-full py-3 px-4 bg-[#f1f1f1] dark:bg-gray-600 outline-none rounded-md text-colorDark dark:text-colorWhite placeholder-colorDark dark:placeholder-colorWhite focus:border-[2px] focus:border-colorOrange transition-all" />
                                ) : (
                                    <input type="text" name="name" id="name" placeholder="Nom Complet" className="w-full py-3 px-4 bg-[#f1f1f1] dark:bg-gray-600 outline-none rounded-md text-colorDark dark:text-colorWhite placeholder-colorDark dark:placeholder-colorWhite focus:border-[2px] focus:border-colorOrange transition-all" />

                                )
                            }

                            <div className="flex flex-col md:grid grid-cols-2 gap-4 md:gap-6">
                                <input type="tel" name="tel" id="tel" placeholder="Numéro de téléphone" className="w-full py-3 px-4 bg-[#f1f1f1] dark:bg-gray-600 outline-none mt-6 rounded-md text-colorDark dark:text-colorWhite placeholder-colorDark dark:placeholder-colorWhite focus:border-[2px] focus:border-colorOrange transition-all" />

                                <input type="email" name="email" id="email" placeholder="Adresse e-mail" className="w-full py-3 px-4 bg-[#f1f1f1] dark:bg-gray-600 outline-none mt-6 rounded-md text-colorDark dark:text-colorWhite placeholder-colorDark dark:placeholder-colorWhite focus:border-[2px] focus:border-colorOrange transition-all" />
                            </div>


                            {
                                !switchDiv && (

                                    <input type="text" name="adresse" id="adresse" placeholder="Adresse" className="w-full py-3 px-4  bg-[#f1f1f1] dark:bg-gray-600 outline-none mt-6 rounded-md text-colorDark dark:text-colorWhite placeholder-colorDark dark:placeholder-colorWhite focus:border-[2px] focus:border-colorOrange transition-all" />
                                )
                            }

                            <input type="text" name="titre" id="titre" placeholder="Quel service sollicitez-vous ?" className="w-full py-3 px-4 mt-6 bg-[#f1f1f1] dark:bg-gray-600 outline-none rounded-md text-colorDark dark:text-colorWhite placeholder-colorDark dark:placeholder-colorWhite focus:border-[2px] focus:border-colorOrange transition-all" />

                            <textarea rows={5} name="" id="" className="w-full my-6 px-2 py-3 bg-[#f1f1f1] dark:bg-gray-600 placeholder-colorDark dark:placeholder-colorWhite text-colorDark dark:text-colorWhite rounded-md focus:border-[2px] focus:border-colorOrange transition-all" placeholder="Décrivez votre besoin en quelques lignes."></textarea>


                            <div className="flex flex-row justify-center items-center w-full">
                                <button type="submit" className="bg-colorOrange px-4 py-2 text-colorDark dark:text-colorWhite font-semibold rounded-md">
                                    Enregistrer
                                </button>

                            </div>
                        </form>
                    </div>
                </div>

            </div>

        </>
    )
}