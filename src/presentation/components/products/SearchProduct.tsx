import { Search } from "lucide-react"
import { useEffect, useRef } from "react";

interface SearchProductProp {
  isActiveCollapsible?: boolean;
  setIsActiveCollapsible: (value: boolean) => void;
}

const SearchProduct = ({isActiveCollapsible=false, setIsActiveCollapsible} : SearchProductProp) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    (isActiveCollapsible) && (setIsActiveCollapsible(!isActiveCollapsible));
  }
  
  useEffect(() => {
    (inputRef.current) && inputRef.current.focus();
  }, [isActiveCollapsible]);

  return (
    <div className={`${isActiveCollapsible ? "w-[38px] ml-[7.5px] cursor-pointer" : "w-full gap-2"} overflow-hidden duration-700 border p-2 flex border-[#3F3D56] rounded-[8px]`} onClick={handleClick}>
      <Search color="#3F3D56"/>
      <input ref={inputRef} className={`${ isActiveCollapsible ? "w-0" : "w-full" } overflow-hidden duration-700 outline-none`} type="text" placeholder="Buscar Productos"/> 
    </div>
  )
}

export default SearchProduct
