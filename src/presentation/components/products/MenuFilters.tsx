import IconFiltros from "/assets/icon-filtros.svg";
import IconArrow from "/assets/icon-arrow.svg";

import SubCategories from "./SubCategories";
import Price from "./Price";
import Colors from "./Colors";
import Sizes from "./Sizes";
import SearchProduct from "./SearchProduct";

interface MenuProps {
  isActiveAcordeonFilters: boolean;
  setIsActiveAcordeonFilters: (value: boolean) => void;
}

const MenuFilters = ({isActiveAcordeonFilters=false, setIsActiveAcordeonFilters} : MenuProps) => {
  return (

    <section className="flex items-center">
      <div className={`${isActiveAcordeonFilters ? "w-[100px]" : "w-[295px]"} duration-700 transition-all ease-in-out p-[20px] rounded-[20px]  bg-white shadow-sm `}>
        <div className={`${ isActiveAcordeonFilters && "items-center" } duration-700 transition-all ease-in-out flex flex-col gap-3`}>

          <div className={`flex justify-between w-full mb-2`}>
            <h2 className="text-[18px] font-bold text-[#3F3D56]">Filtros</h2>
            <img className={`${isActiveAcordeonFilters ? "w-0 overflow-hidden" : "w-[24px]"} duration-700 transition-all ease-in-out`} src={IconFiltros} alt="icon filter" />
          </div>

          <SearchProduct isActiveAcordeonFilters={isActiveAcordeonFilters}/>

          <hr className="mt-2 w-full" />

          <SubCategories isActiveAcordeonFilters={isActiveAcordeonFilters}/> 
          <Price isActiveAcordeonFilters={isActiveAcordeonFilters}/>
          <Colors isActiveAcordeonFilters={isActiveAcordeonFilters}/>
          <Sizes isActiveAcordeonFilters={isActiveAcordeonFilters}/>
        </div>

      </div>

      <img src={IconArrow} alt="icon arrow" onClick={() => setIsActiveAcordeonFilters(!isActiveAcordeonFilters) }
      className={`${isActiveAcordeonFilters ? "rotate-[180deg]" : "rotate-[360deg]"} transform duration-700 transition-all ease-in-out cursor-pointer h-[30px] w-[9px] m-3`}
      />

    </section>
  )
}

export default MenuFilters
