import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function SingleRealisation() {
  const [modal, setModal] = useState(false);

  return (

    <>
      {/* modal realisation */}

      {
  modal && (
      <div className="modalRealisation">

        <div className="w-[95%] h-[95%] bg-gray-800 content-modal text-white overflow-y-scroll rounded-md" >
          <div className="flex flex-row w-full justify-end items-end p-4">
            <AiOutlineClose size={25} className="text-colorOrange font-bold cursor-pointer hover:scale-125 duration-200" onClick={() => setModal(false)} />
          </div>

          <div className="flex flex-col justify-center items-center w-full">
            <div className="md:w-[40%] px-6 md:px-0 hover:scale-105 duration-300">
              <img src="/assets/aboutComponent.jpg" className="" alt="" />
            </div>

            <h1 className="text-2xl font-semibold text-colorOrange mt-8">Réalisation 1</h1>

            <p className="md:w-[60%] text-justify px-6 md:px-0 my-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos modi ex velit pariatur incidunt rem aliquam delectus odio obcaecati repudiandae et earum cumque quam saepe sed atque, temporibus minima consequatur?
              Animi sequi, alias eligendi quas perspiciatis corrupti aut magni illo nesciunt nisi repudiandae explicabo adipisci accusantium nam tempora placeat illum ipsa iusto provident debitis accusamus voluptatibus deleniti! Suscipit, enim odio.
              Veritatis perferendis ipsa pariatur ut, rerum amet et, animi unde rem laudantium ipsum dignissimos eos esse dolores qui, architecto voluptatem? Quibusdam culpa fugit nihil numquam eaque minus illo aperiam minima?
              Fuga laudantium accusantium labore in beatae hic eius itaque necessitatibus nam! Necessitatibus culpa magnam impedit nihil facere repellat, nisi quidem. Architecto quo veniam saepe provident deserunt inventore ab eius officia!
              Eveniet iusto inventore voluptate deleniti totam expedita modi reiciendis quae minima iste, eligendi est quam laborum quas tempore ducimus voluptatibus soluta nihil non vitae accusamus. Saepe voluptate perferendis quaerat esse?
              At sunt vel, suscipit deserunt assumenda beatae delectus earum aliquid. In eum modi facere, beatae, voluptates veritatis quisquam architecto pariatur inventore at laboriosam provident, eos molestiae est odio sapiente error!
              Sapiente atque beatae iure voluptatem minus reiciendis accusamus? Assumenda quod natus soluta consectetur mollitia ea modi fugiat voluptates nobis ipsum, rerum numquam praesentium maiores debitis eaque itaque sed pariatur earum.
              Numquam, quae? Dolore, cumque tempore praesentium ad minima totam blanditiis! Libero facilis iusto reiciendis non quos. Quae cupiditate error cum aperiam tenetur eos fugit suscipit facilis pariatur! Aperiam, dolorum ex.
              Ducimus recusandae consequuntur velit deleniti minima, officiis perferendis repudiandae debitis asperiores ex eum vitae magnam amet placeat aspernatur pariatur! Itaque, delectus cum cupiditate totam libero quas inventore praesentium suscipit nulla.
              Quos, ducimus veniam. Officia odit totam harum vitae eius porro unde voluptas sed corrupti fuga. Iste consequatur consequuntur est reiciendis asperiores nostrum incidunt, voluptates quidem? Omnis, ratione? Accusamus, tempore consequuntur.
            </p>

            <button onClick={() => setModal(false)} className="flex flex-row justify-center items-center gap-3 border-[2px] border-colorOrange px-6 py-3 bg-transparent text-colorOrange my-6 rounded-md transition-all">
              <span className="font-semibold">Fermer</span>
              <AiOutlineClose className="text-2xl" />
            </button>

          </div>
        </div>


      </div>
  )
}

      <div className="flex flex-col justify-center items-center shadow-lg shadow-shadowColor hover:shadow-shadowColorActive rounded-md transition overflow-hidden">
        <img src="/assets/aboutComponent.jpg" className="hover:scale-105 duration-300" alt="" />

        <h1 className="text-xl font-semibold text-colorOrange my-6">
          Réalisation 1
        </h1>
        <p className="text-center text-colorWhite">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In possimus ipsam obcaecati nobis, reiciendis sit dignissimos earum voluptatum doloremque provident quis inventore aliquid placeat rerum cumque, ipsa, laboriosam sint temporibus!
        </p>

        <button className="border-[1px] border-colorOrange text-colorWhite px-4 py-2 my-6 hover:bg-colorOrange rounded-md transition-all" onClick={()=>setModal(true)}>
          En savoir plus
        </button>
      </div>


    </>



  )
}
