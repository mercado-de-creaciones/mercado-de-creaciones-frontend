import { useMediaQuery } from "@/presentation/hooks/use-media-query";
import { Search } from "lucide-react"
import { useEffect, useRef } from "react";

interface SearchProductProp {
  isActiveCollapsible?: boolean;
  setIsActiveCollapsible: (value: boolean) => void;
}

const SearchProduct = ({ isActiveCollapsible = true, setIsActiveCollapsible }: SearchProductProp) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const mobile = useMediaQuery("(max-width: 768px)");

  const handleClick = () => {
    (isActiveCollapsible) && (setIsActiveCollapsible(!isActiveCollapsible));
  }

  useEffect(() => {
    (inputRef.current) && inputRef.current.focus();
  }, [isActiveCollapsible]);

  return (
    <div className={`${isActiveCollapsible && !mobile ? "w-[38px] cursor-pointer ml-[9px]" : !mobile && "w-full "} mt-6 p-2 flex overflow-hidden
      duration-300 border border-[#3F3D56] rounded-[8px]`} onClick={handleClick}>
      <Search color="#3F3D56" />
      <input ref={inputRef} className={`${isActiveCollapsible && !mobile ? "w-0" : "w-full ml-2"}
      overflow-hidden duration-300 outline-none`} type="text"
        placeholder="Buscar Productos" />
    </div>
  )
}

export default SearchProduct
