import IconFilterMobile from "/assets/icon-hamburger.svg";
import IconFilter from "/assets/icon-filtros.svg";
import IconArrow from "/assets/icon-arrow.svg";

import SubCategories from "./sub-categories/SubCategories";
import Price from "./price/Price";
import Colors from "./colors/Colors";
import Sizes from "./sizes/Sizes"; import SearchProduct from "./SearchProduct";
import { useMediaQuery } from "@/presentation/hooks/use-media-query";

interface MenuProps {
  isActiveCollapsible: boolean;
  setIsActiveCollapsible: (value: boolean) => void;
}

const Sidebar = ({ isActiveCollapsible = true, setIsActiveCollapsible }: MenuProps) => {
  const mobile = useMediaQuery("(max-width: 768px)");

  return (

    <section className="fixed w-full left-0" >
      <div className="absolute top-10 md:top-0 md:flex items-center w-[90%] left-1/2 transform -translate-x-1/2 md:left-4 md:translate-x-0">
        <div className={`${(isActiveCollapsible && !mobile) ? "md:w-[96px]" : (!mobile) ? "md:w-[295px] max-h-[95vh] overflow-y-auto" : ""} overflow-hidden duration-300  p-[20px] rounded-[20px] bg-white shadow-md`}>
          <div className="flex flex-col w-full">

            <div className={`justify-between flex w-full duration-700 `}>
              <h2 className="text-[18px] font-bold text-[#3F3D56]">Filtros</h2>
              <img className={`${isActiveCollapsible && !mobile ? "w-0 " : !mobile && "w-[24px]"} overflow-hidden duration-300 ${isActiveCollapsible && mobile ? "cursor-pointer" : mobile && "cursor-pointer"}
`}
                src={mobile ? IconFilterMobile : IconFilter} alt="icon filter" onClick={() => mobile && setIsActiveCollapsible(!isActiveCollapsible)} />
            </div>

            <div className={`${!isActiveCollapsible && mobile ? "w-full max-h-[75vh] overflow-y-visible" :
              (mobile) ? "h-0" : ""} overflow-hidden duration-300`}>
              <SearchProduct isActiveCollapsible={isActiveCollapsible} setIsActiveCollapsible={setIsActiveCollapsible} />

              <hr className="mt-4 w-full" />

              <SubCategories isActiveCollapsible={isActiveCollapsible} setIsActiveCollapsible={setIsActiveCollapsible} />
              <Price isActiveCollapsible={isActiveCollapsible} setIsActiveCollapsible={setIsActiveCollapsible} />
              <Colors isActiveCollapsible={isActiveCollapsible} setIsActiveCollapsible={setIsActiveCollapsible} />
              <Sizes isActiveCollapsible={isActiveCollapsible} setIsActiveCollapsible={setIsActiveCollapsible} />
            </div>

          </div >

        </div>

        <div className="hidden md:block w-[11px]">
          <img src={IconArrow} alt="icon arrow" onClick={() => setIsActiveCollapsible(!isActiveCollapsible)}
            className={`${isActiveCollapsible ? "rotate-[180deg]" : "rotate-[360deg]"} transform duration-600 
          cursor-pointer h-[30px] w-[9px] m-3`} />
        </div>
      </div >

    </section >
  )
}

export default Sidebar
