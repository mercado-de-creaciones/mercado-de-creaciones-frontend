import { Search } from "lucide-react"

interface SearchProductProp {
  isActiveCollapsible?: boolean;
}

const SearchProduct = ({isActiveCollapsible=false} : SearchProductProp) => {
  return (
    <div className={`${isActiveCollapsible ? "w-[38px] ml-[7.5px]" : "w-full gap-2"} overflow-hidden duration-700 border p-2 flex border-[#3F3D56] rounded-[8px]`}>
      <Search color="#3F3D56"/>
      <input className={`${ isActiveCollapsible ? "w-0" : "w-full" } overflow-hidden duration-700 outline-none`} type="text" placeholder="Buscar Productos"/> 
    </div>
  )
}

export default SearchProduct
