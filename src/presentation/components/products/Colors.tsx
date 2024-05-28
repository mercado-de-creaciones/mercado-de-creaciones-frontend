import IconColors from "/assets/icon-colors.svg";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/presentation/components/shared/accordion";
import { useEffect, useState } from "react";


interface ColorsProp {
  isActiveCollapsible?: boolean;
  setIsActiveCollapsible: (value: boolean) => void;
}

const Colors = ({isActiveCollapsible=false, setIsActiveCollapsible} :ColorsProp) => {
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
            <div className={`${isActiveCollapsible ? "w-[94px] justify-center" : "w-auto"} overflow-hidden flex relative duration-700`}>
              <img className={`overflow-hidden duration-700`} src={IconColors} alt="icon colors" />
              <h3 className={`${isActiveCollapsible ? "w-0" : "w-full ml-2"} overflow-hidden whitespace-nowrap text-lg font-medium text-gray-800 duration-700 transition-all ease-in-out`}>Colors</h3>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Contenido...
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  )
}

export default Colors
