import Sidebar from "../../components/products/Sidebar"
import Cards from "@/presentation/components/products/Cards";
import { useState } from "react";
import { useMediaQuery } from "@/presentation/hooks/use-media-query";

export const Products = () => {
  const [isActiveCollapsible, setIsActiveCollapsible] = useState(true);
  const mobile = useMediaQuery("(max-width: 768px)");


  console.log(mobile, "ahh");
  // TODO: add skeleton
  // add react query
  // add variable global to boolean isActiveCollapsible


  return (
    <>
      <section className={`flex flex-col md:flex-row md:justify-between items-start p-4 font-inter mb-10 bg-[#FFF5E9] min-h-screen relative`}>
        <Sidebar isActiveCollapsible={isActiveCollapsible} setIsActiveCollapsible={setIsActiveCollapsible} />

        < article className={`${isActiveCollapsible && !mobile ? "w-[150px]" : !mobile && "w-[430px]"} hidden md:block overflow-hidden duration-300 p-[20px] rounded-[20px] opacity-0`}> <div>hidden</div>
        </article >

        < article className="w-full md:w-[90%] text-center" >
          <div className="hidden bg-white h-[68px] md:flex items-center justify-center rounded-[20px] shadow-sm">
            <h2 className="text-[30px] font-medium text-[#3F3D56] text-left w-full px-6">
              Mascotas/
            </h2>
          </div>

          <Cards />
        </article >
      </section >
    </>
  );
};
