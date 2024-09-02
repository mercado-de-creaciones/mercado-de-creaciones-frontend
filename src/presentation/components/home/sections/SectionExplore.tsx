import { TypographyH2 } from "../../shared/TypographyH2"
import { TypographyH3 } from "../../shared/TypographyH3"
import { HomeCarousel } from "../simpleCarousel/HomeCarousel"

export const SectionExplore = () => {
	return (
		<section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[30rem_1fr] lg:px-14 place-items-center gap-4">
			<article className="xl:pr-8 flex flex-col justify-center gap-4 w-[90%] md:w-full">
				<TypographyH2 className="font-bold text-3xl md:text-5xl leading-snug text-title">
					Explora
				</TypographyH2>
				<TypographyH3 className="text-3xl md:text-4xl font-medium text-title">
					El mundo de las mascotas y{ " " }
					<span className="text-home-100 font-semibold">
						encuentra inspiración en nuestras categorias
					</span>{ " " }
				</TypographyH3>
			</article>

			<HomeCarousel />
		</section>

	)
}
