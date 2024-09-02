import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/presentation/components/ui/card";
import { TypographyP } from "../../shared/TypographyP";
import { cutParagraph } from "@/config/helpers/cutParagraph";

export const CarouselCard = () => {
  return (
    <Card
      className="-z-20 bg-home-75 aspect-7/12 relative"
      style={ {
        backgroundImage: "url('./dog1.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      } }
    >
      <div className="-z-10 absolute">
        <img className="rounded-lg" src="./carousel-background.png" alt="carousel" />
      </div>
      <CardHeader className="p-1">
        <CardTitle className="text-center text-xl text-title">Casual</CardTitle>
      </CardHeader>

      <CardContent className="absolute bottom-0 px-6">
        <TypographyP className="leading-tight font-semibold sm:text-xl md:text-base">
          Estilos para tu compañero de pelo corto
        </TypographyP>
        <TypographyP className="leading-tight sm:text-lg md:text-sm">
          {cutParagraph("Descubre la moda canina para pelajes cortos y haz que tu compañero sobresalga.")}
        </TypographyP>
      </CardContent>
    </Card>
  );
};
