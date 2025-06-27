import { Link } from "react-router-dom";

export default function ServicesComponent() {
  return (
    <>
      <div className="w-full justify-center bg-colorWhite dark:bg-colorDark pb-16 px-2">
        <div className="flex flex-row justify-center w-full py-6 mb-12 md:mb-20">
          <h1 className="text-xl md:text-3xl font-semibold text-colorDark dark:text-colorWhite">
            <span className="custom-title"> Nos services </span>
          </h1> 
        </div>

        <div className="flex flex-col md:flex md:flex-row justify-center items-center gap-4 my-4 px-4">
            <div className="flex flex-col md:grid md:grid-cols-3 md:gap-4">
              <div className="flex flex-col justify-center items-center h-96 md:h-80 shadow-lg shadow-shadowColor hover:shadow-shadowColorActive bg-[#f1f1f1] dark:bg-colorDark p-5 my-2 cursor-pointer transition rounded-md">
                  <h1 className="text-center text-xl font-bold text-colorOrange">
                    <span>Marketing Digital</span>                    
                  </h1>

                  <p className="text-center text-colorDark dark:text-colorWhite mt-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae deleniti ipsa minus maxime dolorem officia, laudantium incidunt! Tenetur, velit? Porro quasi sed sapiente maiores incidunt voluptatibus adipisci ipsa obcaecati voluptates!</p>

                  <Link className="mt-8 border-[1px] border-colorOrange py-2 px-5 rounded-md hover:bg-colorOrange hover:text-colorWhite transition text-colorDark dark:text-colorWhite" to="">
                    En savoir plus
                  </Link>
              </div>

              <div className="flex flex-col justify-center items-center h-96 md:h-80 shadow-lg shadow-shadowColor hover:shadow-shadowColorActive bg-[#f1f1f1] dark:bg-colorDark p-5 my-2 cursor-pointer transition rounded-md">
                  <h1 className="text-center text-xl font-bold text-colorOrange">
                    <span>Marketing Digital</span>                    
                  </h1>

                  <p className="text-center text-colorDark dark:text-colorWhite mt-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae deleniti ipsa minus maxime dolorem officia, laudantium incidunt! Tenetur, velit? Porro quasi sed sapiente maiores incidunt voluptatibus adipisci ipsa obcaecati voluptates!</p>

                  <Link className="mt-8 border-[1px] border-colorOrange py-2 px-5 rounded-md hover:bg-colorOrange hover:text-colorWhite transition text-colorDark dark:text-colorWhite" to="">
                    En savoir plus
                  </Link>
              </div>

              <div className="flex flex-col justify-center items-center h-96 md:h-80 shadow-lg shadow-shadowColor hover:shadow-shadowColorActive bg-[#f1f1f1] dark:bg-colorDark p-5 my-2 cursor-pointer transition rounded-md">
                  <h1 className="text-center text-xl font-bold text-colorOrange">
                    <span>Marketing Digital</span>                    
                  </h1>

                  <p className="text-center text-colorDark dark:text-colorWhite mt-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae deleniti ipsa minus maxime dolorem officia, laudantium incidunt! Tenetur, velit? Porro quasi sed sapiente maiores incidunt voluptatibus adipisci ipsa obcaecati voluptates!</p>

                  <Link className="mt-8 border-[1px] border-colorOrange py-2 px-5 rounded-md hover:bg-colorOrange hover:text-colorWhite transition text-colorDark dark:text-colorWhite" to="">
                    En savoir plus
                  </Link>
              </div>

              <div className="flex flex-col justify-center items-center h-96 md:h-80 shadow-lg shadow-shadowColor hover:shadow-shadowColorActive bg-[#f1f1f1] dark:bg-colorDark p-5 my-2 cursor-pointer transition rounded-md">
                  <h1 className="text-center text-xl font-bold text-colorOrange">
                    <span>Marketing Digital</span>                    
                  </h1>

                  <p className="text-center text-colorDark dark:text-colorWhite mt-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae deleniti ipsa minus maxime dolorem officia, laudantium incidunt! Tenetur, velit? Porro quasi sed sapiente maiores incidunt voluptatibus adipisci ipsa obcaecati voluptates!</p>

                  <Link className="mt-8 border-[1px] border-colorOrange py-2 px-5 rounded-md hover:bg-colorOrange hover:text-colorWhite transition text-colorDark dark:text-colorWhite" to="">
                    En savoir plus
                  </Link>
              </div>

              <div className="flex flex-col justify-center items-center h-96 md:h-80 shadow-lg shadow-shadowColor hover:shadow-shadowColorActive bg-[#f1f1f1] dark:bg-colorDark p-5 my-2 cursor-pointer transition rounded-md">
                  <h1 className="text-center text-xl font-bold text-colorOrange">
                    <span>Marketing Digital</span>                    
                  </h1>

                  <p className="text-center text-colorDark dark:text-colorWhite mt-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae deleniti ipsa minus maxime dolorem officia, laudantium incidunt! Tenetur, velit? Porro quasi sed sapiente maiores incidunt voluptatibus adipisci ipsa obcaecati voluptates!</p>

                  <Link className="mt-8 border-[1px] border-colorOrange py-2 px-5 rounded-md hover:bg-colorOrange hover:text-colorWhite transition text-colorDark dark:text-colorWhite" to="">
                    En savoir plus
                  </Link>
              </div>

              <div className="flex flex-col justify-center items-center h-96 md:h-80 shadow-lg shadow-shadowColor hover:shadow-shadowColorActive bg-[#f1f1f1] dark:bg-colorDark p-5 my-2 cursor-pointer transition rounded-md">
                  <h1 className="text-center text-xl font-bold text-colorOrange">
                    <span>Marketing Digital</span>                    
                  </h1>

                  <p className="text-center text-colorDark dark:text-colorWhite mt-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae deleniti ipsa minus maxime dolorem officia, laudantium incidunt! Tenetur, velit? Porro quasi sed sapiente maiores incidunt voluptatibus adipisci ipsa obcaecati voluptates!</p>

                  <Link className="mt-8 border-[1px] border-colorOrange py-2 px-5 rounded-md hover:bg-colorOrange hover:text-colorWhite transition text-colorDark dark:text-colorWhite" to="">
                    En savoir plus
                  </Link>
              </div>


            </div>
        </div>

      </div>



    </>
  )
}