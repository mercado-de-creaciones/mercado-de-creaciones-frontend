import { useEffect, useState } from "react";

import IconSubCategorias from "/assets/icon-sub-categorias.svg";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/presentation/components/ui/accordion";
import Clothes from "./Clothes"
import Toys from "./Toys";
import Accessories from "./Accessories";
import { useMediaQuery } from "@/presentation/hooks/use-media-query";

interface SubCategoriesProp {
  isActiveCollapsible?: boolean;
  setIsActiveCollapsible: (value: boolean) => void;
}

const SubCategories = ({ isActiveCollapsible = true, setIsActiveCollapsible }: SubCategoriesProp) => {
  const [activeAccordionItem, setActiveAccordionItem] = useState("")
  const mobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    (isActiveCollapsible) && setActiveAccordionItem("");
  }, [isActiveCollapsible]);

  const handleClick = () => {
    (isActiveCollapsible) && setIsActiveCollapsible(!isActiveCollapsible);
  }


  return (
    <>
      <Accordion value={activeAccordionItem} type="single" collapsible className="w-full"
        onValueChange={setActiveAccordionItem} onClick={handleClick}
      >
        <AccordionItem value="item-1">
          <AccordionTrigger hiddenArrow={isActiveCollapsible}>
            <div className={`${isActiveCollapsible && (!mobile) ? "w-[38px] ml-[18px]" : ""} overflow-hidden
              flex duration-300`}>
              <img className="w-0 md:w-auto" src={IconSubCategorias} alt="icon sub categorías" />
              <h3 className={`${isActiveCollapsible && !mobile ? "w-0" : (!mobile) && "w-full ml-2"} overflow-hidden whitespace-nowrap
              text-lg font-medium text-gray-800 duration-300`}>Sub Categorías</h3>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <Clothes />
            <Toys />
            <Accessories />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  )
}

export default SubCategories
