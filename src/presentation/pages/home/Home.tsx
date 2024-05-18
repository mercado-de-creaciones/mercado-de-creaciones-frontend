import { TypographyH1 } from "@/presentation/components/shared/typography/typographyH1"
import { TypographyH2 } from "@/presentation/components/shared/typography/typographyH2"
import { TypographyH4 } from "@/presentation/components/shared/typography/typographyH4"
import { TypographyP } from "@/presentation/components/shared/typography/typographyP"

import { Button } from "@/presentation/components/ui/button"
import { Card, CardContent } from "@/presentation/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/presentation/components/ui/carousel"


export const Home = () => {
    return (
        <div className="h-dvh bg-home-50 xl:pl-80 md:px-24 px-8">
            <div className=" h-1/2 w-full py-36">
                <div className="max-w-md">
                    <TypographyH4 text="Bienvenidos..." className="text-home-100 font-medium my-3" />
                    <TypographyH1 text="Calidez y Comodidad Para " className="font-medium my-3 leading-snug"><span className="text-home-100 font-bold leading-snug">tus amigos peluditos</span></TypographyH1>
                    <TypographyP text="Descubra la moda ideal para su mascota, asegurándose de que esté cómoda y feliz en cualquier temporada." className="leading-tight my-3" />
                    <Button variant={"secondary"} className="my-3">Ver Categorías</Button>
                </div>
            </div>
            <div className="h-1/2 w-full py-36 flex gap-20 pl-5">
                <div className="basis-1/4">
                    <TypographyH2 text="Explora el mundo de las mascotas y "><span className="text-home-100 font-semibold">encuentra inspiración en nuestras categorias</span> </TypographyH2>
                </div>
            </div>
        </div>
    )
}