import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/presentation/components/ui/carousel"
import { CarouselCard } from "./CarouselCard"


export const HomeCarousel = () => {
    return (
        <div>
            <Carousel>
                <CarouselContent>
                    <CarouselItem className="lg:basis-1/2 basis-full">
                        <CarouselCard />

                    </CarouselItem>
                    <CarouselItem className="lg:basis-1/2 basis-full">
                        <CarouselCard />

                    </CarouselItem>
                    <CarouselItem className="lg:basis-1/2 basis-full">
                        <CarouselCard />

                    </CarouselItem>
                    <CarouselItem className="lg:basis-1/2 basis-full">
                        <CarouselCard />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )

}