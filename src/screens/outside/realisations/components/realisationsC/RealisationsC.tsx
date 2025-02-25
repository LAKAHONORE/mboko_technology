import SingleRealisation from "../hero/single-realisation/SingleRealisation";

export default function RealisationsC() {
  return (
    <>


      <div className="flex flex-row justify-center items-center my-16 px-6 md:px-52 ">
        <div className="flex flex-col md:grid grid-cols-3 gap-8">
          <SingleRealisation />
          <SingleRealisation />
          <SingleRealisation />
          <SingleRealisation />
          <SingleRealisation />
          <SingleRealisation />
        </div>
      </div>
    </>
  )
}
