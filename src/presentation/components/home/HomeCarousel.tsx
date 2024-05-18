import { Card, CardContent } from "@/presentation/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/presentation/components/ui/carousel"
import carouselBg from '/carousel-background.png'


export const HomeCarousel = () => {
    return (
        <div>
        <Carousel>
            <CarouselContent>
                <CarouselItem className="xl:basis-1/2 md:basis-1/2">
                    <Card>
                        <CardContent>
                            <p>Card Content</p>
                        </CardContent>
                    </Card >
                </CarouselItem>
                <CarouselItem className="xl:basis-1/2 md:basis-1/2">
                    <Card>
                        <CardContent>
                            <p>Card Content</p>
                        </CardContent>
                    </Card >
                </CarouselItem>
                <CarouselItem className="xl:basis-1/2 md:basis-1/2">
                    <Card>
                        <CardContent>
                            <p>Card Content</p>
                        </CardContent>
                    </Card >
                </CarouselItem>
                <CarouselItem className="xl:basis-1/2 md:basis-1/2">
                    <Card>
                        <CardContent>
                            <p>Card Content</p>
                        </CardContent>
                    </Card >
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </div>
    )

}