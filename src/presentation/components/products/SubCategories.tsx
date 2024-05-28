import { useEffect, useState } from "react";

import IconSubCategorias from "/assets/icon-sub-categorias.svg";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/presentation/components/shared/accordion";
import Clothes from "./Clothes";
import Toys from "./Toys";
import Accessories from "./Accessories";

interface SubCategoriesProp {
  isActiveCollapsible?: boolean;
  setIsActiveCollapsible: (value: boolean) => void;
}

const SubCategories = ({isActiveCollapsible =false, setIsActiveCollapsible} : SubCategoriesProp) => {
  const [activeAccordionItem, setActiveAccordionItem] = useState("")

  useEffect(() => {
    (isActiveCollapsible) && setActiveAccordionItem("");
  }, [isActiveCollapsible]);

  const handleClick = () => {
    (isActiveCollapsible) && setIsActiveCollapsible(!isActiveCollapsible);
  }
  

  return (
    <>
      <Accordion value={activeAccordionItem} type="single" collapsible className="w-full" onValueChange={setActiveAccordionItem}
        onClick={handleClick}
      >
        <AccordionItem  value="item-1">
          <AccordionTrigger hiddenArrow={isActiveCollapsible}>
            <div className={`${isActiveCollapsible ? "w-[94px] justify-center" : "w-auto"} overflow-hidden flex duration-700`}>
              <img className={`${isActiveCollapsible ? "" : ""} overflow-hidden  duration-700`} src={IconSubCategorias} alt="icon sub categorías" />
              <h3 className={`${isActiveCollapsible ? "w-0" : "w-full ml-2"} overflow-hidden whitespace-nowrap text-lg font-medium text-gray-800 duration-700`}>Sub Categorías</h3>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <Clothes/>
            <Toys/>
            <Accessories/>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  )
}

export default SubCategories
