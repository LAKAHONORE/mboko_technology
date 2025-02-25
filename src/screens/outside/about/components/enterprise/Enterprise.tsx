import { useState } from "react"
import './style.css';

export default function Enterprise() {
  const [activeMission, setActiveMission] = useState(true);
  const [activeValues, setActiveValues] = useState(false);
  const [activeStory, setActiveStory] = useState(false);

  
  const handleChangeActive = (key: number) => {
    if(key == 1){
      setActiveValues(false);
      setActiveStory(false);

      setActiveMission(true);
    }else if(key == 2){
      setActiveMission(false);
      setActiveStory(false);

      setActiveValues(true);
    }else{
      setActiveMission(false);
      setActiveValues(false);

      setActiveStory(true);
    }
    
  }


  return (
    <>
      <div className="w-full justify-center bg-colorDark mb-20 px-2">
        <div className="flex flex-row justify-center w-full py-6 mb-6">
          <h1 className="text-xl md:text-3xl font-semibold text-colorWhite">
            <span className="custom-title">Ce que vous devez savoir !</span>
          </h1>
        </div>


        <div className="flex flex-col md:flex md:flex-row gap-4 my-4 px-4">

          <div className="w-full md:w-2/5 img_translate">
            <img src="/assets/toKnow2.png" alt="" />
          </div>


          <div className="w-full flex flex-col md:w-3/5">
              <div className="flex flex-row gap-4 top-0">
                <div className="">
                  <h1 className={`text-sm md:text-xl font-bold cursor-pointer ${activeMission ? 'underline-animation text-colorOrange' : 'text-colorWhite'} transition-all`} onClick={()=>(handleChangeActive(1))}>Notre mission</h1>
                </div>

                <div className="">
                  <h1 className={`text-sm md:text-xl font-bold cursor-pointer ${activeValues ? 'underline-animation text-colorOrange' : 'text-colorWhite'} transition-all`} onClick={()=>(handleChangeActive(2))}>Nos valeurs</h1>
                </div>

                <div className="">
                  <h1 className={`text-sm md:text-xl font-bold cursor-pointer ${activeStory ? 'underline-animation text-colorOrange' : 'text-colorWhite'} transition-all`} onClick={()=>(handleChangeActive(3))}>Notre histoire</h1>
                </div>
              </div>



            <div className="row mt-8">
              {activeMission && (
                <p className="text-justify text-colorWhite ">
                   Chez <span className="merienda-font text-colorOrange">MBOKO-TECHNOLOGY</span>, nous avons pour mission de fournir des solutions informatiques innovantes et sur mesure,
                    adaptées aux besoins spécifiques de chaque client. Nous croyons fermement que la technologie peut transformer les entreprises et améliorer leur efficacité,
                     en leur permettant de relever les défis contemporains avec agilité et créativité.

                    Notre équipe d'experts passionnés s'engage à comprendre en profondeur les enjeux et les objectifs de chaque client.
                    Nous savons que chaque entreprise est unique, c'est pourquoi nous adoptons une approche personnalisée pour élaborer des solutions qui répondent
                    précisément aux attentes de nos partenaires. Que ce soit par le biais de développements logiciels sur mesure, de la mise en place de systèmes 
                    de gestion intégrés ou de l'optimisation des infrastructures IT, notre objectif est d'apporter une valeur ajoutée tangible à chaque projet.

                    Nous nous appuyons sur les technologies les plus récentes et sur des pratiques éprouvées pour garantir des résultats durables.
                    En collaborant étroitement avec nos clients, nous nous assurons que chaque solution est non seulement efficace, mais qu'elle s'intègre
                    parfaitement dans leur stratégie globale. Nous croyons également en l'importance de l'accompagnement et de la formation, car une solution,
                    aussi performante soit-elle, doit être comprise et adoptée par les utilisateurs pour être pleinement efficace.
                </p>
              )}

              {activeValues && (
                <p className="text-justify text-colorWhite ">
                  Chez <span className="merienda-font text-colorOrange">MBOKO-TECHNOLOGY</span>, nos valeurs fondamentales guident chacune de nos actions et décisions. Nous croyons en l'intégrité,
                  ce qui signifie que nous agissons toujours avec honnêteté et transparence dans nos relations avec nos clients, nos partenaires et nos employés. 
                  La collaboration est également au cœur de notre philosophie ; nous travaillons main dans la main avec nos clients pour co-créer des solutions qui
                  répondent véritablement à leurs besoins. L'innovation est une autre valeur essentielle : nous nous efforçons d'être à la pointe des nouvelles technologies
                  et des tendances du marché, afin d'apporter des idées novatrices et des améliorations continues à nos services. Enfin, nous valorisons la responsabilité
                  sociale : nous nous engageons à avoir un impact positif sur notre communauté et à adopter des pratiques durables qui protègent notre environnement.
                  En nous appuyant sur ces valeurs, nous nous efforçons de créer un environnement de travail dynamique et éthique, propice à la croissance et à
                  l'épanouissement de tous.
                </p>
              )}
             

              {activeStory && (
                <p className="text-justify text-colorWhite ">
                   Fondée en 2021, <span className="merienda-font text-colorOrange">MBOKO-TECHNOLOGY</span> a débuté avec une vision audacieuse : révolutionner le secteur des services
                  informatiques en offrant des solutions accessibles et adaptées aux besoins des entreprises de toutes tailles. Notre aventure a commencé 
                  dans un petit bureau, avec une équipe passionnée déterminée à faire une différence. Au fil des années, nous avons connu une croissance 
                  significative, élargissant notre expertise et notre gamme de services pour inclure le développement de logiciels, la gestion de 
                  l'infrastructure IT, et le conseil stratégique. Chaque étape de notre parcours a été marquée par des projets stimulants et des collaborations
                  enrichissantes avec nos clients, ce qui nous a permis de bâtir une réputation solide sur le marché. Aujourd'hui, nous sommes fiers de 
                  compter parmi nos clients des entreprises innovantes qui partagent notre passion pour la technologie. Notre histoire est celle d'une 
                  évolution continue, guidée par notre engagement envers l'excellence et notre désir d'apporter une valeur ajoutée tangible à nos partenaires.
                  Nous regardons vers l'avenir avec enthousiasme, prêts à relever de nouveaux défis et à explorer de nouvelles opportunités pour continuer à 
                  transformer le paysage technologique.
                </p>
              )}

            </div>

          </div>


        </div>

      </div>
    </>
  )
}