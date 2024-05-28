import { useEffect, useState } from "react";

import IconSizes from "/assets/icon-sizes.svg";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/presentation/components/shared/accordion";


interface SizesProp {
  isActiveCollapsible?: boolean;
}

const Sizes = ({isActiveCollapsible=false} : SizesProp) => {
const [activeAccordionItem, setActiveAccordionItem] = useState("")

  useEffect(() => {
    (isActiveCollapsible) && setActiveAccordionItem("");
  }, [isActiveCollapsible]);

  return (
    <>
      <Accordion value={activeAccordionItem} type="single" collapsible className="w-full mt-[-15px] mb-0" onValueChange={setActiveAccordionItem}>
        <AccordionItem  value="item-1" borderBotton={false}>
          <AccordionTrigger hiddenArrow={isActiveCollapsible}>
            <div className={`${isActiveCollapsible ? "w-[94px] justify-center" : "w-auto"} overflow-hidden flex relative duration-700`}>
              <img className={`overflow-hidden duration-700`} src={IconSizes} alt="icon tallas" />
              <h3 className={`${isActiveCollapsible ? "w-0" : "w-full ml-2"} overflow-hidden whitespace-nowrap text-lg font-medium text-gray-800 duration-700 transition-all ease-in-out`}>Tallas</h3>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            contenido..
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default Sizes;
