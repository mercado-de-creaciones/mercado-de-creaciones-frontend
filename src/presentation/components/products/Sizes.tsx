import { useEffect, useState } from "react";

import IconSizes from "/assets/icon-sizes.svg";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/presentation/components/shared/accordion";


interface SizesProp {
  isActiveCollapsible?: boolean;
  setIsActiveCollapsible: (value: boolean) => void;
}

const Sizes = ({isActiveCollapsible=false, setIsActiveCollapsible} : SizesProp) => {
const [activeAccordionItem, setActiveAccordionItem] = useState("")

  useEffect(() => {
    (isActiveCollapsible) && setActiveAccordionItem("");
  }, [isActiveCollapsible]);

  const handleClick = () => {
    (isActiveCollapsible) && setIsActiveCollapsible(!isActiveCollapsible);
  }

  return (
    <>
      <Accordion value={activeAccordionItem} type="single" collapsible className="w-full mb-0" 
        onValueChange={setActiveAccordionItem} onClick={handleClick}
      >
        <AccordionItem  value="item-1" borderBotton={false}>
          <AccordionTrigger hiddenArrow={isActiveCollapsible}>
            <div className={`${isActiveCollapsible ? "w-[94px] justify-center" : "w-auto"} overflow-hidden flex duration-700`}>
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
