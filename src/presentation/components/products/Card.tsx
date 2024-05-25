import { Circle, Star } from "lucide-react";
import ImgPet from "/assets/dog-flow.png";
import { Product } from "@/infrastructure/interfaces/products.response";
import IconStar from "/assets/star.svg"
import IconStarHalf from "/assets/star-half.svg"

interface CardProduct {
  product: Product;
}

const Card = ({product}: CardProduct) => {
  const {description, img, maxStar, price, sizes, starsNumber} = product;
  
  const starRanking = (cant: number) => {
    const starsArray = Array(Math.floor(cant)).fill(null);
    console.log(cant+0.5 );
    
    return (
      <>
        {
          starsArray.map((_, i) => {
            return (
              // <Star size="18.49px" key={i}/>
              <img key={i} src={IconStar} alt="icon" />
            )
          })
        }

        {/* {cant+0.5 == (Math.floor(cant )+ 1) && <Circle size="18.49px"/> } */}
        {cant+0.5 == (Math.floor(cant)+ 1) && <img src={IconStarHalf} alt="icon" /> }
      </>
    )
  }
  

  return (
    <div className="w-[238px] rounded-lg shadow-md">
      <div className="bg-red-100 flex justify-center h-[222px] rounded-t-lg">
        <img className="object-cover w-full rounded-t-lg" src={img} alt="img pet"/>      
      </div>

      <div className="p-3 bg-white rounded-b-lg flex flex-col justify-center items-stretch">

        <p className="flex gap-2 items-center justify-start font-normal text-sm">{starRanking(starsNumber)}
        <div className="flex">
          <p className="ml-3 text-[#366EFF]">{starsNumber}</p>
          <p className="text-black">/</p>
          <p className="text-[#00000099]">{maxStar}</p>
        </div>
        </p>

        <p className="my-3 text-[#51596A] first-letter:uppercase font-semibold text-[15px] w-[200px] text-center">{description}
        </p>

          {/* todo: shadow div custom */}
        <div className="flex gap-5 items-center justify-center w-full p-2 shadow-sm">
          {
            sizes.map((size, i) => {
              return (
                <p key={i} className="text-[11px] font-medium text-[#6E7A87]">{size}</p>
              )
            })
          }
        </div>
        {/* <div className="flex justify-between w-full p-2 shadow-sm">
          <p className="text-[11px] font-medium text-[#6E7A87]">X-S</p>
          <p className="text-[11px] font-medium text-[#6E7A87]">S</p>
          <p className="text-[11px] font-medium text-[#6E7A87]">M</p>
          <p className="text-[11px] font-medium text-[#6E7A87]">L</p>
          <p className="text-[11px] font-medium text-[#6E7A87]">X-L</p>
          <p className="text-[11px] font-medium text-[#6E7A87]">X-X-L</p>
        </div> */}

        <p className="font-bold text-[22px] text-[#FF5A5A] mt-3">$120</p>
      </div>

    </div>
  )
}

export default Card
