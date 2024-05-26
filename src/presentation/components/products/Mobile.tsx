import IconHamgurger from "/assets/icon-hamburger.svg";

import Cards from "@/presentation/components/products/Cards";

import SubCategories from "./SubCategories";
import Price from "./Price";
import Colors from "./Colors";
import Sizes from "./Sizes";
import SearchProduct from "./SearchProduct";

interface MobileProps {
  isActiveAcordeonFilters: boolean;
  setIsActiveAcordeonFilters: (value: boolean) => void;
}

const Mobile = ({isActiveAcordeonFilters, setIsActiveAcordeonFilters} : MobileProps) => {
  return (
    <div className="bg-[#FFF5E9] min-h-screen relative p-12 flex justify-center">

          <div className={`flex flex-col justify-center items-center w-[90%] fixed`}>
            
            <div className={`${isActiveAcordeonFilters ? "rounded-[6px]" : "rounded-t-[6px]"} flex justify-between w-full bg-white p-5` }>
              <h2 className="text-[18px] font-bold text-[#3F3D56]">Filtros</h2>
              <img className={`cursor-pointer`} onClick={() => setIsActiveAcordeonFilters(!isActiveAcordeonFilters)}
                src={IconHamgurger} alt="icon hamburger"/>
            </div>


            <div className={`${isActiveAcordeonFilters ? "h-0 overflow-hidden opacity-0" : "h-full opacity-100 p-5 rounded-b-[6px]"} w-full flex flex-col gap-3 duration-700 ease-in-out bg-white transition-height transition-opacity`}> 

                <SearchProduct />

                <hr className="mt-2 w-full" />

                <SubCategories/>
                <Price/>
                <Colors/>
                <Sizes/>
            </div>
          </div>

            <div className="py-[100px]">
              <Cards /> 
            </div>
        </div>
  )
}

export default Mobile
