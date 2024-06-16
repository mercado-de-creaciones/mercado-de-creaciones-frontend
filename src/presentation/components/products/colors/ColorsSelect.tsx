import { Check } from "lucide-react";
import { useState } from "react";


interface ColorSelectProps {
  colorName: string;
  colorHex: string;
}

const ColorsSelect = ({colorName, colorHex}: ColorSelectProps) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  }
  

  return (
    <div style={{backgroundColor: colorHex}} className={`${colorName == "white" && "border-2 border-gray-300"} w-8 h-8 rounded-full text-center flex justify-center items-center`} onClick={handleClick}>
      {
        (isActive) && ((colorName == "white") ? <Check color="black"/> : <Check color="white"/>) 
      }
    </div>
  )
}

export default ColorsSelect
