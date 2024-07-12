import { Card, CardHeader, CardTitle } from "@/presentation/components/ui/card"

export const CarouselCard = () => {
	return (
		<Card className="-z-20 bg-home-75 aspect-[7/12] relative md:min-w-32" style={ {
			backgroundImage: "url('./dog1.png')",
			backgroundSize: "contain",
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center"
		} }>
			<div className="-z-10 absolute">
				<img className="rounded-lg" src="./carousel-background.png" alt="" />
			</div>
			<CardHeader className="p-1 text-title">
				<CardTitle className="text-center text-xl">Casual</CardTitle>
			</CardHeader>

		</Card >
	)
}