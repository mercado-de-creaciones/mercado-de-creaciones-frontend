import IconFiltros from "/assets/icon-filtros.svg";
import IconLoupe from "/assets/icon-loupe.svg";
import IconArrow from "/assets/icon-arrow.svg";
import IconSubCategorias from "/assets/icon-sub-categorias.svg";
import IconPrice from "/assets/icon-price.svg";
import IconColors from "/assets/icon-colors.svg";
import IconSizes from "/assets/icon-sizes.svg";

import { useState } from "react";
import AccordionTriggerCustom from "@/presentation/components/products/AccordionTriggerCustom";

export const Products = () => {
  
  const [isActiveAcordeonFilters, setIsActiveAcordeonFilters] = useState(false);

  return (
    <section className={`flex justify-between items-start bg-[#FFF5E9] min-h-screen p-3 font-inter`}>
      <div className="flex items-center">
        <article className={`${isActiveAcordeonFilters ? 'w-[100px]' : 'w-[295px]'}
         duration-700 transition-all ease-in-out p-[20px] rounded-[20px]  bg-white shadow-sm`}>

          <div className={`${isActiveAcordeonFilters && 'items-center'} duration-700 transition-all ease-in-out flex flex-col gap-4`}>

            {/* Filtros */}
            <div className={`flex justify-between w-full mb-2`}>
              <h2 className="text-[18px] font-bold text-[#3F3D56]">Filtros</h2>
              <img className={`${isActiveAcordeonFilters && 'overflow-hidden'} duration-700 transition-all ease-in-out`} src={IconFiltros} alt="icon filter" />
            </div>

            {/* lupa */}
            <div className={`${isActiveAcordeonFilters ? 'w-[38px]' : 'w-full' }  duration-700 transition-all ease-in-out border p-2 border-[#3F3D56] rounded-[8px] flex gap-2`}
            >
              <img src={IconLoupe} alt="icon lupa" />
              <input className={`${isActiveAcordeonFilters ? 'w-0 overflow-hidden' : 'w-full'} duration-700 transition-all ease-in-out outline-none`} type="text" placeholder='Buscar Productos'/>
            </div>


            <hr className="mt-2 w-full"/>

            {/* Sub categorias */}
 
            <AccordionTriggerCustom title="Sub Categorías" isActiveAccordion={isActiveAcordeonFilters} iconImg={IconSubCategorias} iconArrow={IconArrow}/>
            <hr className="mt-2 w-full"/>

            {/* Precio */}
            <AccordionTriggerCustom title="Precio" isActiveAccordion={isActiveAcordeonFilters} iconImg={IconPrice} iconArrow={IconArrow} />
            <hr className="mt-2 w-full"/>

            {/* colores */}
            <AccordionTriggerCustom title="Colores" isActiveAccordion={isActiveAcordeonFilters} iconImg={IconColors} iconArrow={IconArrow} />
            <hr className="mt-2 w-full"/>

            {/* tallas */}
            <AccordionTriggerCustom title="Tallas" isActiveAccordion={isActiveAcordeonFilters} iconImg={IconSizes} iconArrow={IconArrow} />
          </div>

        </article>
            
        {/* arrow */}
        <img src={IconArrow} alt="icon arrow" 
          onClick={() => setIsActiveAcordeonFilters(!isActiveAcordeonFilters)}
          className={`${isActiveAcordeonFilters ? 'rotate-[180deg]' : 'rotate-[360deg]'} transform duration-700 transition-all ease-in-out cursor-pointer h-[30px] w-[9px] m-3`}
        />
      </div>

      <article className="w-full text-center">

        <div className="bg-white h-[68px] flex items-center justify-center rounded-[20px] shadow-sm">
          <h2 className="text-[30px] font-medium text-[#3F3D56] text-left w-full px-6">Mascotas/</h2>
        </div>

        <div>cards</div>
      </article>

    </section>
  );
};
