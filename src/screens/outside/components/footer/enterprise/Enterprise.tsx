import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter } from "react-icons/ai";

export default function Enterprise() {
  return (
    <>
      <div className="flex flex-col justify-center items-start my-4">
        <div className="flex">
          <img src="/assets/react-logo.png" alt="" />
        </div>
        <h1 className="text-xl font-semibold">
          <span className="text-colorWhite merienda-font">MBOKO-TECHNOLOGY</span>
        </h1>

        <div className="block md:flex flex-row gap-2 w-[100%] mt-3">
          <span className=" text-colorWhite">Hysacam DG</span>
          <span className=" text-colorWhite">Douala, Cameroun</span>
        </div>

        <div className="block md:flex flex-row text-colorWhite">
            Téléphone :
          <a className="text-colorWhite hover:text-colorOrange" href="tel:656587406"> 
            656 687 406 /

            687 074 679
          </a>
        </div>

        <div className="flex flex-row gap-2 mt-3">
          <a className="text-colorWhite hover:text-colorOrange transition" href="">
            <AiOutlineFacebook size={30} />
          </a>

          <a className="text-colorWhite hover:text-colorOrange transition" href="">
            <AiOutlineTwitter size={30} />
          </a>

          <a className="text-colorWhite hover:text-colorOrange transition" href="">
            <AiOutlineInstagram size={30} />
          </a>

          <a className="text-colorWhite hover:text-colorOrange transition" href="">
            <AiOutlineLinkedin size={30} />
          </a>
        </div>
      </div>
    </>
  )
}