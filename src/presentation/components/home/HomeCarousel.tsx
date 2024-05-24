import { Card, CardContent } from "@/presentation/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/presentation/components/ui/carousel"
import carouselBg from '/carousel-background.png'
import { CarouselCard } from "./CarouselCard"


export const HomeCarousel = () => {
    return (
        <div>
        <Carousel>
            <CarouselContent>
                <CarouselItem className="xl:basis-1/2 md:basis-1/2">
                <CarouselCard />

                </CarouselItem>
                <CarouselItem className="xl:basis-1/2 md:basis-1/2">
                <CarouselCard />

                </CarouselItem>
                <CarouselItem className="xl:basis-1/2 md:basis-1/2">
                <CarouselCard />

                </CarouselItem>
                <CarouselItem className="xl:basis-1/2 md:basis-1/2">
                    <CarouselCard />
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </div>
    )

}