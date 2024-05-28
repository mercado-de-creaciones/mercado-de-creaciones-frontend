import IconHamgurger from "/assets/icon-hamburger.svg";

import Cards from "@/presentation/components/products/Cards";

import SubCategories from "./SubCategories";
import Price from "./Price";
import Colors from "./Colors";
import Sizes from "./Sizes";
import SearchProduct from "./SearchProduct";

interface MobileProps {
  isActiveCollapsible: boolean;
  setIsActiveCollapsible: (value: boolean) => void;
}

const Mobile = ({isActiveCollapsible, setIsActiveCollapsible} : MobileProps) => {
  return (
    <section className="bg-[#FFF5E9] min-h-screen relative p-12 flex justify-center">

          <article className={`flex flex-col justify-center items-center w-[90%] fixed`}>
            
            <div className={`${isActiveCollapsible ? "rounded-[6px]" : "rounded-t-[6px]"} flex justify-between w-full bg-white p-5` }>
              <h2 className="text-[18px] font-bold text-[#3F3D56]">Filtros</h2>
              <img className={`cursor-pointer`} onClick={() => setIsActiveCollapsible(!isActiveCollapsible)}
                src={IconHamgurger} alt="icon hamburger"/>
            </div>


            <div className={`${isActiveCollapsible ? "h-0 overflow-hidden opacity-0" : "h-full opacity-100 p-5 rounded-b-[6px]"} w-full flex flex-col gap-3 duration-700 ease-in-out bg-white transition-height transition-opacity`}> 

                <SearchProduct />

                <hr className="mt-2 w-full" />

                <SubCategories/>
                <Price/>
                <Colors/>
                <Sizes/>
            </div>
          </article>

            <article className="py-[100px]">
              <Cards /> 
            </article>
        </section>
  )
}

export default Mobile
