import Description from "../../../about/components/description/Description";
import Image from "../../../about/components/image/Image";

export default function AboutComponent() {
  return (
    <>
      <div className="w-full justify-center bg-colorDark mb-2 px-2">
        <div className="flex flex-row justify-center w-full py-6">
          <h1 className="text-xl md:text-3xl font-semibold text-colorWhite">
            <span className="custom-title">Qui sommes-nous ?</span>
          </h1>
        </div>

        <div className="flex flex-col-reverse md:flex md:flex-row justify-center items-center gap-4 my-4 px-4">

            <Description />
            <Image /> 

        </div>
      </div>
    </>
  )
}