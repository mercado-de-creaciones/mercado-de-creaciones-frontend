import { TypographyH1 } from "@/presentation/components/shared/typography/TypographyH1"
import { TypographyH3 } from "@/presentation/components/shared/typography/TypographyH3"
import { TypographyH4 } from "@/presentation/components/shared/typography/TypographyH4"
import { TypographyP } from "@/presentation/components/shared/typography/TypographyP"
import home from '/home-image.png'
import paws from '/home-paws.png'
import { Button } from "@/presentation/components/ui/button"
import { HomeCarousel } from "@/presentation/components/home/HomeCarousel"

export const Home = () => {
    return (
        <div className="sm:h-fit bg-home-50 xl:pl-50 md:px-24 px-8 z-0">
            <div className="h-dvh w-full flex justify-evenly content-center items-center flex-wrap sm:flex-nowrap">
                <div className="lg:max-w-md md:max-w-sm max-w-72">
                    <div className="relative">
                    <TypographyH4 className="text-home-100 font-medium my-3" >Bienvenidos...</TypographyH4>
                    <TypographyH1 className="font-semibold my-3 leading-snug text-3xl">Calidez y Comodidad Para <span className="text-home-100 font-bold leading-snug">tus amigos peluditos</span></TypographyH1>
                    <div className="absolute md:-bottom-4 right-5 bottom-0 max-w-28 lg:max-w-full"><img src={paws}/></div>
                    </div>
                    <TypographyP className="leading-tight my-3" >Descubra la moda ideal para su mascota, asegurándose de que esté cómoda y feliz en cualquier temporada.</TypographyP>
                    <Button variant={"secondary"} className="my-3">Ver Categorías</Button>
                </div>
                <div className="md:min-w-80 md:max-w-full max-w-72">
                    <img src={home}/>
                </div>
            </div>
            <div className="h-dvh w-full flex justify-evenly content-center items-center flex-wrap sm:flex-nowrap">
                <div className="basis-1/4">
                    <TypographyH3 className="text-5xl font-bold leading-snug">Explora</TypographyH3>
                    <TypographyH3 className="text-4xl font-medium">el mundo de las mascotas y <span className="text-home-100 font-semibold">encuentra inspiración en nuestras categorias</span> </TypographyH3>
                </div>
                <div>
                    <HomeCarousel />
                </div>
            </div>
        </div>
    )
}