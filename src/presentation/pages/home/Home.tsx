import { TypographyH1 } from "@/presentation/components/shared/TypographyH1";
import { TypographyH3 } from "@/presentation/components/shared/TypographyH3";
import { TypographyH4 } from "@/presentation/components/shared/TypographyH4";
import { TypographyP } from "@/presentation/components/shared/TypographyP";
import { Button } from "@/presentation/components/ui/button";
import { HomeCarousel } from "@/presentation/components/home/simpleCarousel/HomeCarousel";
import { CoverflowCarousel } from "@/presentation/components/home/coverflowCarousel/CoverflowCarousel";

import home from "/home-image.png";
import paws from "/home-paws.png";

export const Home = () => {
  return (
    <div className="sm:h-fit bg-home-50 md:px-24 px-8 z-0">
      <div className="h-dvh w-full flex justify-around content-center items-center flex-wrap sm:flex-nowrap">
        <div className="lg:max-w-md md:max-w-sm max-w-72">
          <div className="relative">
            <TypographyH4 className="text-home-100 font-medium my-3">
              Bienvenidos...
            </TypographyH4>
            <TypographyH1 className="font-semibold my-3 leading-snug text-3xl">
              Calidez y Comodidad Para{" "}
              <span className="text-home-100 font-bold leading-snug">
                tus amigos peluditos
              </span>
            </TypographyH1>
            <div className="absolute md:-bottom-4 right-5 bottom-0 max-w-28 lg:max-w-full">
              <img src={paws} alt="" />
            </div>
          </div>
          <TypographyP className="leading-tight my-3">
            Descubra la moda ideal para su mascota, asegurándose de que esté
            cómoda y feliz en cualquier temporada.
          </TypographyP>
          <Button variant={"secondary"} className="my-3">
            Ver Categorías
          </Button>
        </div>
        <div className="md:min-w-80 md:max-w-full max-w-72">
          <img src={home} alt="" />
        </div>
      </div>
      <div className="h-dvh w-full flex justify-around content-center items-center flex-wrap sm:flex-nowrap gap-11">
        <div className="lg:basis-1/4 md:basis-1/2">
          <TypographyH3 className="text-3xl lg:text-5xl font-bold leading-snug">
            Explora
          </TypographyH3>
          <TypographyH3 className="text-3xl lg:text-4xl font-medium ">
            el mundo de las mascotas y{" "}
            <span className="text-home-100 font-semibold">
              encuentra inspiración en nuestras categorias
            </span>{" "}
          </TypographyH3>
        </div>
        <div className="xl:basis-1/3 md:basis-1/2 md:max-w-60 lg:max-w-full">
          <HomeCarousel />
        </div>
      </div>
      <div className="h-dvh w-full py-20">
        <TypographyH3 className="text-3xl lg:text-5xl font-medium text-center">
          {" "}
          <span className="font-bold">Visita</span> nuestros{" "}
        </TypographyH3>
        <TypographyH1 className="font-bold my-3 leading-snug text-3xl lg:text-5xl text-center text-home-100">
          Productos destacados
        </TypographyH1>
        <CoverflowCarousel />
      </div>
    </div>
  );
};
