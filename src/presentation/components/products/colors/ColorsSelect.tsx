import { Check } from "lucide-react";
import { useState } from "react";


interface ColorSelectProps {
  colorName: string;
  colorHex: string;
}

const ColorsSelect = ({ colorName, colorHex }: ColorSelectProps) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  }


  return (
    <div style={{ backgroundColor: colorHex }} className={`${colorName == "white" && "border-2 border-gray-300"} w-[30px] h-[30px] rounded-full text-center flex justify-center items-center`} onClick={handleClick}>
      {
        (isActive) && ((colorName == "white") ? <Check color="black" size={18} /> : <Check color="white" size={18} />)
      }
    </div>
  )
}

export default ColorsSelect
