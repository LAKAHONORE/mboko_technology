
export default function Hero() {
  return (
    <>
      <div className="flex justify-center items-center w-full h-[200px] md:h-[400px] overflow-hidden bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url('/assets/hero_realisation.webp')" }}>
        <div className="absolute w-full h-[200px] md:h-[400px] mt-[88px] inset-0 bg-gradient-to-l from-colorDark to-transparent"></div>

        <div className="absolute flex flex-col md:items-start md:ml-24">

          <h4 className="text-2xl text-center text-colorWhite md:text-5xl font-semibold italic mb-14 shadow-2xl shadow-colorDark animate__animated animate__bounce">Nos Réalisations</h4>

        </div>

      </div>
    </>
  )
}