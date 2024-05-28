import IconSubCategorias from "/assets/icon-sub-categorias.svg";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/presentation/components/shared/accordion";
import Clothes from "./Clothes";
import { useEffect, useState } from "react";

interface SubCategoriesProp {
  isActiveCollapsible?: boolean;
}

const SubCategories = ({isActiveCollapsible =false} : SubCategoriesProp) => {
  const [activeAccordionItem, setActiveAccordionItem] = useState("")

  useEffect(() => {
    (isActiveCollapsible) && setActiveAccordionItem("");
  }, [isActiveCollapsible]);

  return (
    <>
      <Accordion value={activeAccordionItem} type="single" collapsible className="w-full mt-[-15px] border-b"
        onValueChange={setActiveAccordionItem}
      >
        <AccordionItem  value="item-1">
          <AccordionTrigger hiddenArrow={isActiveCollapsible}>
            <div className={`${isActiveCollapsible ? "w-[94px] justify-center" : "w-auto"} overflow-hidden flex relative duration-700`}>
              <img className={`overflow-hidden duration-700`} src={IconSubCategorias} alt="icon sub categorías" />
              <h3 className={`${isActiveCollapsible ? "w-0" : "w-full ml-2"} overflow-hidden whitespace-nowrap text-lg font-medium text-gray-800 duration-700 transition-all ease-in-out`}>Sub Categorías</h3>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <Clothes/>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  )
}

export default SubCategories
