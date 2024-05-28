import IconFiltros from "/assets/icon-filtros.svg";
import IconArrow from "/assets/icon-arrow.svg";

import SubCategories from "./SubCategories";
import Price from "./Price";
import Colors from "./Colors";
import Sizes from "./Sizes";
import SearchProduct from "./SearchProduct";
import Test from "./Test";

interface MenuProps {
  isActiveCollapsible: boolean;
  setIsActiveCollapsible: (value: boolean) => void;
}

const MenuFilters = ({isActiveCollapsible=false, setIsActiveCollapsible} : MenuProps) => {
  return (

    <section className="flex items-center fixed">
      <div className={`${isActiveCollapsible ? "w-[94px]" : "w-[295px]"} overflow-hidden duration-700  p-[20px] rounded-[20px]  bg-white shadow-sm opacity-80`}>
        <div className={`duration-700 flex flex-col gap-3`}>

          <div className={`justify-between flex w-full mb-2 duration-700 `}>
            <h2 className="text-[18px] font-bold text-[#3F3D56]">Filtros</h2>
            <img className={`${isActiveCollapsible ? "w-0 overflow-hidden" : "w-[24px]"} duration-700 `} src={IconFiltros} alt="icon filter" />
          </div>

          <SearchProduct isActiveCollapsible={isActiveCollapsible}/>

          <hr className="mt-2 w-full" />

          <SubCategories isActiveCollapsible={isActiveCollapsible}/> 
          <Price isActiveCollapsible={isActiveCollapsible}/>
          <Colors isActiveCollapsible={isActiveCollapsible}/>
          <Sizes isActiveCollapsible={isActiveCollapsible}/>
          {/* <Test isActiveCollapsible={isActiveCollapsible}/> */}

        </div >

      </div>

      <div className="w-[11px]">
        <img src={IconArrow} alt="icon arrow" onClick={() => setIsActiveCollapsible(!isActiveCollapsible) }
          className={`${isActiveCollapsible ? "rotate-[180deg]" : "rotate-[360deg]"} transform duration-700 cursor-pointer h-[30px] w-[9px] m-3`}/>
      </div>

    </section>
  )
}

export default MenuFilters
