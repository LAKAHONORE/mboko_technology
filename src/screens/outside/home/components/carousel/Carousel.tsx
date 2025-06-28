// HeroSlider.tsx
import { useEffect, useState } from 'react';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
import { Link } from 'react-router-dom';

const images = [
  '/assets/slide-1.webp',
  '/assets/slide-2.webp',
  '/assets/slide-3.webp',
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[600px] md:h-[800px] overflow-hidden">
      {/* Images de fond */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-20' : 'opacity-0 z-10'
          }`}
        >
          <div
            className="w-full h-full bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url('${img}')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-colorDark to-transparent"></div>
          </div>
        </div>
      ))}

      {/* Contenu texte fixe */}
      <div className="absolute z-20 flex flex-row w-full px-6 mt-[88px]">
        <div className="flex flex-col w-full justify-center items-center md:justify-start md:items-start">
          <h4 className="text-2xl md:text-[50px] text-colorWhite font-bold mb-5 text-shadow-lg text-center md:text-start animate__animated animate__bounce merienda-font">
            MBOKO-TECHNOLOGY
          </h4>
          <h4 className="text-[12px] md:text-[17px] text-colorWhite font-semibold italic mb-14 text-shadow-lg text-center md:text-start animate__animated animate__bounce">
            Une solution sur mesure adaptée à vos besoins !
          </h4>
          <p
            className="text-colorWhite text-xl text-shadow-md text-center md:text-start w-full md:w-[50%] animate__animated animate__slideInLeft"
            dangerouslySetInnerHTML={{
              __html: `Nous sommes spécialisés dans les services informatiques, allant du <span class='text-colorOrange'>marketing digital</span> à la réalisation d’<span class='text-colorOrange'>applications et logiciels métiers</span>,
              de <span class='text-colorOrange'>sites internet</span>, sans oublier la <span class='text-colorOrange'>conception graphique</span> et <span class='text-colorOrange'>bien d’autres encore</span>.`,
            }}
          />
          <div className="mt-[80px] text-center md:text-start">
            <Link
              to="/about"
              className="bg-colorOrange border border-colorOrange py-3 px-6 md:py-5 md:px-8 font-semibold text-colorWhite rounded-md hover:bg-transparent hover:text-colorWhite transition"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </div>

      {/* Boutons de navigation */}
        <div onClick={prevImage} className="hidden md:flex absolute left-4 bottom-0 transform -translate-y-1/2 z-40 p-4 bg-colorOrange rounded-full cursor-pointer">
            <IoIosArrowDropleft className='text-2xl text-colorWhite' />
        </div>

        <div onClick={nextImage} className="hidden md:flex absolute right-4 bottom-0 transform -translate-y-1/2 z-40 p-4 bg-colorOrange rounded-full cursor-pointer">
            <IoIosArrowDropright className='text-2xl text-colorWhite' />
        </div>


      {/* Points (indicateurs de slide actif) */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3 z-40">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === current ? 'bg-colorOrange scale-125' : 'bg-white/50'
            }`}
            aria-label={`Aller au slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
