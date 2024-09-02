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
		<Carousel 
			className="w-full max-w-xs min-[520px]:max-w-2xl 
			md:max-w-xs lg:max-w-md xl:max-w-4xl" 
			opts={{ loop: true }}
			autoplay={2000}
			>
			<CarouselContent>
				{
					Array.from({ length: 5 }).map((_, i) => {
						return (
							<CarouselItem className="basis-4/5 min-[520px]:basis-1/2 md:basis-4/5 
							lg:basis-3/5 xl:basis-2/5 h-full cursor-grab" key={i}>
								<CarouselCard />
							</CarouselItem>
						)
					} )
				}
			</CarouselContent>
			<CarouselPrevious 
				variant="ghost" 
				className="hidden lg:flex items-center justify-center" />
			<CarouselNext 
				variant="ghost" 
				className="hidden lg:flex items-center justify-center" />
		</Carousel>
	)

}