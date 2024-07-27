import { Product } from "@/infrastructure/interfaces/products.response";
import { starRanking } from "@/presentation/hooks/starsRanking";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/presentation/components/ui/card"

interface CardProduct {
  product: Product;
}

const CardProduct = ({ product }: CardProduct) => {
  const { description, img, maxStar, price, sizes, starsNumber } = product;

  return (
    <Card className="w-[238px] rounded-lg shadow-md bg-white">
      <CardHeader className="p-0">
        <div className="bg-red-100 flex justify-center h-[222px] rounded-t-lg">
          <img className="object-cover w-full rounded-t-lg" src={img} alt="img pet" />
        </div>
      </CardHeader>

      <CardContent className="p-3 bg-white rounded-b-lg flex flex-col justify-center items-stretch">

        <div className="flex gap-2 items-center justify-start font-normal text-sm">{starRanking(starsNumber)}
          <div className="flex">
            <p className="ml-3 text-[#366EFF]">{starsNumber}</p>
            <p className="text-black">/</p>
            <p className="text-[#00000099]">{maxStar}</p>
          </div>
        </div>

        <CardDescription className="my-3 text-[#51596A] first-letter:uppercase font-semibold text-[15px] w-[200px] text-center">{description}
        </CardDescription>

        <div className="flex gap-5 items-center justify-center w-full p-2 shadow-sm">
          {
            sizes.map((size, i) => {
              return (
                <p key={i} className="text-[11px] font-medium text-[#6E7A87]">{size}</p>
              )
            })
          }
        </div>

      </CardContent>

      <CardFooter>
        <p className="font-bold text-[22px] text-center text-[#FF5A5A] mt-3 w-full">${price}</p>
      </CardFooter>

    </Card>
  )
}

export default CardProduct
