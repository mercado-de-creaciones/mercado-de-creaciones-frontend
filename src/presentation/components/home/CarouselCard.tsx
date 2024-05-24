import { Card, CardContent, CardHeader, CardTitle } from "@/presentation/components/ui/card"

export const CarouselCard = () => {
    return (
        <div>
<Card className="bg-home-75 aspect-[7/12] max-w-80 p-0 border-0 m-0" style={{ backgroundImage: "url('./carousel-background.png')",
    backgroundSize: "cover",           
    backgroundRepeat: "no-repeat",  
    backgroundPosition: "center"  }}>
        <CardHeader className="">
        <CardTitle>Create project</CardTitle>
      </CardHeader>
        
                        <CardContent className="">
                            <p>Card Content</p>
                        </CardContent>
                    </Card >
        </div>
    )
}