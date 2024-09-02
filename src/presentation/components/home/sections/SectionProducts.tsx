import { TypographyH2 } from "../../shared/TypographyH2";
import { TypographyH3 } from "../../shared/TypographyH3"
import { CoverflowCarousel } from "../coverflowCarousel/CoverflowCarousel"

export const SectionProducts = () => {
	return (
		<section className="w-full py-20 space-y-10">
			<header className="space-y-1">
				<TypographyH3 
					className="text-4xl lg:text-5xl 
					text-center text-title font-bold">
					Visita nuestros
				</TypographyH3>
				<TypographyH2 
					className="font-bold my-3 leading-snug text-3xl 
					lg:text-4xl text-center text-home-100">
					Productos destacados
				</TypographyH2>
			</header>

			<CoverflowCarousel />
		</section>
	)
}
