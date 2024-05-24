import { Card, CardContent, CardHeader, CardTitle } from "@/presentation/components/ui/card"
import { TypographyP } from "../../shared/typography/TypographyP"

export const CarouselCard = () => {
    return (
        <div>
            <Card className="-z-20 bg-home-75 aspect-[7/12] sm:max-w-5 md:max-w-full p-0 border-0 m-0 relative md:min-w-32" style={{
                backgroundImage: "url('./dog1.png')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
            }}>
                <div className="-z-10 absolute">
                    <img className="rounded-lg" src="./carousel-background.png" alt="" />
                </div>
                <CardHeader className="p-3">
                    <CardTitle className="text-center text-xl">Casual</CardTitle>
                </CardHeader>

                <CardContent className="absolute bottom-0">
                    <TypographyP className="leading-tight font-semibold">Estilos para tu compañero de pelo corto</TypographyP>
                    <TypographyP className="leading-tight">Descubre la moda canina para pelajes cortos y haz que tu compañero sobresalga.</TypographyP>
                </CardContent>
            </Card >
        </div>
    )
}