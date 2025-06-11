import { Link } from "react-router-dom";
import QRCode from 'qrcode-generator';
import { useEffect, useRef, useState } from "react";
import { AiOutlineSend } from "react-icons/ai";

export default function ContactForm() {
  const message  = 'Bonjour, j\'aimerais avoir plus d\'informations sur vos poduits et services s\il vous plaît!';
  const whatsappUrl = `https://wa.me/237656587406?text=${encodeURIComponent(message)}`;
  const qrRef = useRef<HTMLDivElement>(null);


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [objet, setObjet] = useState('');
  const [msg, setMsg] = useState('');


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
      <div className="w-full justify-center bg-colorDark mb-20 px-2">
        <div className="flex flex-row justify-center w-full py-6 mb-6">
          <h1 className="text-xl md:text-3xl font-semibold text-colorWhite">
            <span className="custom-title">Nous contacter</span>
          </h1>
        </div>


        <div className="flex flex-col md:flex md:flex-row gap-4 my-4 px-4">


          <div className="block w-full md:flex flex-col shadow-lg shadow-shadowColor h-[600px] md:w-1/3 p-5">
            <span className="text-3xl font-bold text-colorWhite">Contactez-nous</span>
            <p className="text-colorWhite">Pour plus d'informations.</p>

            <div className="flex flex-row gap-4 mt-8">
              <div className="flex text-colorOrange">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                </svg>
              </div>
              <div className="flex flex-col text-colorWhite">
                <span className="text-sm font-semibold">Localisation</span>
                <span className="text-sm">Douala - Direction Générale Hysacam, Cameroun</span>
              </div>
            </div>

            <div className="flex h-[1px] w-full bg-gray-500 mt-5"></div>


            <div className="flex flex-row gap-4 mt-8">
              <div className="flex text-colorOrange">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
                </svg>
              </div>
              <div className="flex flex-col text-colorWhite">
                <span className="text-sm font-semibold">Email</span>
                <Link to={'mailto:'}>lakahonore1@gmail.com</Link>
              </div>
            </div>

            <div className="flex h-[1px] w-full bg-gray-500 mt-5"></div>


            <div className="flex flex-row gap-4 mt-8">
              <div className="flex text-colorOrange">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-phone-fill" viewBox="0 0 16 16">
                  <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0"/>
                </svg>
              </div>
              <div className="flex flex-col text-colorWhite">
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
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                </svg>
              </div>
              <div className="flex flex-col text-colorWhite">
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


          <div className="block w-full md:flex flex-col shadow-lg shadow-shadowColor h-[600px] md:w-2/3 p-5">
            <form action="">
              <div className="flex flex-col md:grid grid-cols-2 gap-4 md:gap-6">
                  <div className="flex flex-col">
                    <label className="text-colorWhite text-sm md:text-xl">Nom :</label>
                    <input 
                      className="p-2 md:p-4 outline-none shadow-lg shadow-shadowColor text-colorWhite placeholder:text-sm placeholder-gray-300 md:my-5 rounded-md focus:border-[2px] focus:border-colorOrange transition-all"
                      type="text"
                      value={name}
                      onChange={(e)=>setName(e.target.value)}
                      placeholder="John doe" 
                      required
                      />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-colorWhite text-sm md:text-xl">Adresse email :</label>
                    <input 
                      className="p-2 md:p-4 outline-none shadow-lg shadow-shadowColor text-colorWhite placeholder:text-sm placeholder-gray-300 md:my-5 rounded-md focus:border-[2px] focus:border-colorOrange transition-all"
                      type="text" 
                      value={email}
                      placeholder="johndoe@gmail.com" 
                      onChange={(e)=>setEmail(e.target.value)}
                      required
                    />
                  </div>
              </div>

              <div className="flex flex-col md:grid grid-cols-2 gap-4 md:gap-6 mt-6">
                  <div className="flex flex-col">
                    <label className="text-colorWhite text-sm md:text-xl">Numéro de téléphone :</label>
                    <input 
                      className="p-2 md:p-4 outline-none shadow-lg shadow-shadowColor text-colorWhite placeholder:text-sm placeholder-gray-300 md:my-5 rounded-md focus:border-[2px] focus:border-colorOrange transition-all"
                      type="text"
                      value={phone} 
                      placeholder="John doe" 
                      onChange={(e)=>setPhone(e.target.value)}
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-colorWhite text-sm md:text-xl">Objet :</label>
                    <input 
                      className="p-2 md:p-4 outline-none shadow-lg shadow-shadowColor text-colorWhite placeholder:text-sm placeholder-gray-300 md:my-5 rounded-md focus:border-[2px] focus:border-colorOrange transition-all"
                      type="text" value={objet}
                      placeholder="johndoe@gmail.com"
                      onChange={(e)=>setObjet(e.target.value)}
                      required
                    />
                  </div>
              </div>


              <div className="mt-4 flex flex-col md:grid grid-cols-1">
                  <div className="flex flex-col">
                    <label className="text-colorWhite text-sm md:text-xl">Message :</label>

                    <textarea 
                      className="p-4 outline-none shadow-lg shadow-shadowColor text-colorWhite placeholder-gray-300 md:md:my-5 rounded-md focus:border-[2px] focus:border-colorOrange transition-all"
                      value={msg}
                      rows={5}
                      onChange={(e)=>setMsg(e.target.value)}
                      />


                  </div>
              </div>


              <div className="flex flex-row justify-center items-center mt-5">
                  <button 
                    className="bg-colorOrange py-2 px-6 text-colorWhite hover:bg-colorWhite hover:text-colorOrange rounded-md transition-all"
                    onClick={()=>handleSubmit()}
                    >
                    <div className="flex flex-row items-center gap-2">
                      <span>Envoyer</span> 
                       <AiOutlineSend />
                    </div>
                  </button>
              </div>

            </form>


          </div>



        </div>

      </div>
    </>
  )
}
