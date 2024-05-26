import { Search } from "lucide-react"

interface SearchProductProp {
  isActiveAcordeonFilters?: boolean;
}

const SearchProduct = ({isActiveAcordeonFilters=false} : SearchProductProp) => {
  return (
    <div className={`${isActiveAcordeonFilters ? "w-[38px]" : "w-full gap-2"} duration-700 transition-all ease-in-out border p-2 flex border-[#3F3D56] rounded-[8px]`}>
      <Search color="#3F3D56"/>
      <input className={`${ isActiveAcordeonFilters ? "w-0 overflow-hidden" : "w-full" } duration-700 transition-all ease-in-out outline-none`} type="text" placeholder="Buscar Productos"/> 
    </div>
  )
}

export default SearchProduct
