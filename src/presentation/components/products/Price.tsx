import IconPrice from "/assets/icon-price.svg";

import { useEffect, useState } from 'react';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/presentation/components/shared/accordion";

interface PriceProp {
  isActiveCollapsible?: boolean; 
}

const Price = ({isActiveCollapsible=false} :PriceProp) => {
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
              <img className={`overflow-hidden duration-700`} src={IconPrice} alt="icon Price" />
              <h3 className={`${isActiveCollapsible ? "w-0" : "w-full ml-2"} overflow-hidden whitespace-nowrap text-lg font-medium text-gray-800 duration-700 transition-all ease-in-out`}>Precio</h3>
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

export default Price
