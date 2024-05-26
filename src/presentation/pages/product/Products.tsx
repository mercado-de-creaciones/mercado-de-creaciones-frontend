import IconFiltros from "/assets/icon-filtros.svg";
import IconArrow from "/assets/icon-arrow.svg";
import IconSubCategorias from "/assets/icon-sub-categorias.svg";
import IconPrice from "/assets/icon-price.svg";
import IconColors from "/assets/icon-colors.svg";
import IconSizes from "/assets/icon-sizes.svg";
import IconHamgurger from "/assets/icon-hamburger.svg";

import { useState } from "react";
import AccordionTriggerCustom from "@/presentation/components/products/AccordionTriggerCustom";

import { Search } from "lucide-react";
import { useMediaQuery } from "@/presentation/hooks/use-media-query";
import Cards from "@/presentation/components/products/Cards";


export const Products = () => {
  const [isActiveAcordeonFilters, setIsActiveAcordeonFilters] = useState(false);

  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <>
      {isDesktop ? (
        <section className={`flex justify-between items-start p-4 font-inter mb-10 bg-[#FFF5E9] min-h-screen relative`}>
          <div className="fixed">
            <div className="flex items-center">
              <article className={`${isActiveAcordeonFilters ? "w-[100px]" : "w-[295px]"} duration-700 transition-all ease-in-out p-[20px] rounded-[20px]  bg-white shadow-sm `}>
                <div className={`${ isActiveAcordeonFilters && "items-center" } duration-700 transition-all ease-in-out flex flex-col gap-4`}>
                  {/* Filtros */}
                  <div className={`flex justify-between w-full mb-2`}>
                    <h2 className="text-[18px] font-bold text-[#3F3D56]">
                      Filtros
                    </h2>
                    <img
                      className={`${
                        isActiveAcordeonFilters ? "w-0 overflow-hidden" : "w-[24px]"
                      } duration-700 transition-all ease-in-out`}
                      src={IconFiltros}
                      alt="icon filter"
                    />
                  </div>

                  {/* lupa */}
                  <div
                    className={`${
                      isActiveAcordeonFilters ? "w-[38px]" : "w-full gap-2"
                    } duration-700 transition-all ease-in-out border p-2 flex border-[#3F3D56] rounded-[8px]`}
                  >
                    <Search color="#3F3D56" />
                    <input
                      className={`${
                        isActiveAcordeonFilters ? "w-0 overflow-hidden" : "w-full"
                      } duration-700 transition-all ease-in-out outline-none`}
                      type="text"
                      placeholder="Buscar Productos"
                    />
                  </div>

                  <hr className="mt-2 w-full" />

                  {/* Sub categorias */}

                  <AccordionTriggerCustom
                    title="Sub Categorías"
                    isActiveAccordion={isActiveAcordeonFilters}
                    iconImg={IconSubCategorias}
                    iconArrow={IconArrow}
                  />
                  <hr className="mt-2 w-full" />

                  {/* Precio */}
                  <AccordionTriggerCustom
                    title="Precio"
                    isActiveAccordion={isActiveAcordeonFilters}
                    iconImg={IconPrice}
                    iconArrow={IconArrow}
                  />
                  <hr className="mt-2 w-full" />

                  {/* colores */}
                  <AccordionTriggerCustom
                    title="Colores"
                    isActiveAccordion={isActiveAcordeonFilters}
                    iconImg={IconColors}
                    iconArrow={IconArrow}
                  />
                  {/* <Palette color="#3F3D56"/> */}
                  <hr className="mt-2 w-full" />

                  {/* tallas */}
                  <AccordionTriggerCustom
                    title="Tallas"
                    isActiveAccordion={isActiveAcordeonFilters}
                    iconArrow={IconArrow}
                    iconImg={IconSizes}
                  />
                </div>

              </article>
                <img
                src={IconArrow}
                alt="icon arrow"
                onClick={() =>
                  setIsActiveAcordeonFilters(!isActiveAcordeonFilters)
                }
                className={`${
                  isActiveAcordeonFilters ? "rotate-[180deg]" : "rotate-[360deg]"
                } transform duration-700 transition-all ease-in-out cursor-pointer h-[30px] w-[9px] m-3`}
              />

              {/* fixed top-4 */}


              {/* arrow */}
              {/* <img
                src={IconArrow}
                alt="icon arrow"
                onClick={() =>
                  setIsActiveAcordeonFilters(!isActiveAcordeonFilters)
                }
                className={`${
                  isActiveAcordeonFilters ? "rotate-[180deg]" : "rotate-[360deg]"
                } transform duration-700 transition-all ease-in-out cursor-pointer h-[30px] w-[9px] m-3`}
              /> */}
            </div>
            
          </div>
          <article className={`${isActiveAcordeonFilters ? "w-[100px]" : "w-[450px]"} duration-700 transition-all ease-in-out p-[20px] rounded-[20px]  bg-white shadow-sm opacity-0 mr-8`}>

          </article>

          <article className="w-full text-center">
            <div className="bg-white h-[68px] flex items-center justify-center rounded-[20px] shadow-sm">
              <h2 className="text-[30px] font-medium text-[#3F3D56] text-left w-full px-6">
                Mascotas/
              </h2>
            </div>

            <Cards />
          </article>
        </section>
      ) : (
        <div className="bg-[#FFF5E9] min-h-screen relative px-10 py-12">

          <div className={`flex flex-col justify-center items-center w-[85%] fixed`}>
            
            <div className={`${isActiveAcordeonFilters ? "rounded-[6px]" : "rounded-t-[6px]"} flex justify-between w-full bg-white p-5` }>
              <h2 className="text-[18px] font-bold text-[#3F3D56]">Filtros</h2>
              <img className={`cursor-pointer`} onClick={() => setIsActiveAcordeonFilters(!isActiveAcordeonFilters)}
                src={IconHamgurger} alt="icon hamburger"/>
            </div>


            <div className={`${isActiveAcordeonFilters ? "h-0 overflow-hidden opacity-0" : "h-full opacity-100 p-5 rounded-b-[6px]"} w-full flex flex-col gap-4 duration-700 ease-in-out bg-white transition-height transition-opacity`}> 

              <div className={`border p-2 flex border-[#3F3D56] rounded-[8px]`}>
                <Search color="#3F3D56" />
                <input className={`w-full outline-none pl-2`} type="text" placeholder="Buscar Productos"/>
              </div>

                <hr className="mt-2 w-full" />

                {/* Sub categorias */}

                <AccordionTriggerCustom
                  title="Sub Categorías"
                  iconImg={IconSubCategorias}
                  iconArrow={IconArrow}
                />
                <hr className="mt-2 w-full" />

                {/* Precio */}
                <AccordionTriggerCustom
                  title="Precio"
                  iconImg={IconPrice}
                  iconArrow={IconArrow}
                />
                <hr className="mt-2 w-full" />

                {/* colores */}
                <AccordionTriggerCustom
                  title="Colores"
                  iconImg={IconColors}
                  iconArrow={IconArrow}
                />
                {/* <Palette color="#3F3D56"/> */}
                <hr className="mt-2 w-full" />

                {/* tallas */}
                <AccordionTriggerCustom
                  title="Tallas"
                  iconArrow={IconArrow}
                  iconImg={IconSizes}
                />
            </div>
          </div>

            <div className="py-[100px]">
              <Cards /> 
            </div>
        </div>
      )}
    </>
  );
};
