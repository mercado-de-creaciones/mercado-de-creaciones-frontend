import { TypographyH1 } from "../../shared/TypographyH1"
import { TypographyH3 } from "../../shared/TypographyH3"
import { TypographyP } from "../../shared/TypographyP"
import { Button } from "../../ui/button"

export const SectionWelcome = () => {
  return (
    <section className="grid grid-cols-1 place-items-center md:grid-cols-2 w-full">
      <article className="lg:max-w-lg md:max-w-sm w-[90%] space-y-3">
        <TypographyH3 className="text-home-100 font-medium">
          Bienvenidos...
        </TypographyH3>
        <TypographyH1 className="font-semibold leading-snug text-title">
          Calidez y Comodidad Para{ " " }
          <span className="text-home-100 font-bold leading-snug">
            tus amigos peluditos
          </span>
        </TypographyH1>
        <TypographyP className="leading-tight text-title">
          Descubra la moda ideal para su mascota, asegurándose de que esté
          cómoda y feliz en cualquier temporada.
        </TypographyP>
        <Button variant={ "secondary" }>
          Ver Categorías
        </Button>
      </article>
      <figure className="w-96 lg:w-[30rem] md:py-10">
        <img className="w-full h-full object-cover" src="/home-image.png" alt="home" />
      </figure>
    </section>
  )
}
