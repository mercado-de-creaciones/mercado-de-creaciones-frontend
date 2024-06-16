import { useState } from "react"
interface SizeProp {
  size: string;
}

const Size = ({ size }: SizeProp) => {
  const [isSizeActive, setIsSizeActive] = useState(false);

  const handleClickActive = () => {
    setIsSizeActive(!isSizeActive)
  }


  return (
    <>
      <button className={`${isSizeActive ? "text-white bg-[#5D6679]" : "bg-[#F0F0F0]  text-[#00000099] "} 
        py-[7px] px-5 text-sm rounded-[62px] font-medium`} onClick={handleClickActive}
      >
        {size}
      </button>
    </>
  )
}

export default Size
