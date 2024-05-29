import { useEffect, useState } from "react";

import IconSizes from "/assets/icon-sizes.svg";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/presentation/components/shared/accordion";
import Size from "./Size";


interface SizesProp {
  isActiveCollapsible?: boolean;
  setIsActiveCollapsible: (value: boolean) => void;
}

const sizes = ["XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large"];

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
          <AccordionTrigger hiddenArrow={isActiveCollapsible} className="pb-0">
            <div className={`${isActiveCollapsible ? "w-[94px] justify-center" : "w-auto"} overflow-hidden flex duration-700`}>
              <img className={`overflow-hidden duration-700`} src={IconSizes} alt="icon tallas" />
              <h3 className={`${isActiveCollapsible ? "w-0" : "w-full ml-2"} overflow-hidden whitespace-nowrap text-lg font-medium text-gray-800 duration-700 transition-all ease-in-out`}>Tallas</h3>
            </div>
          </AccordionTrigger>

          <AccordionContent className="p-0 pt-4 pl-[25px] gap-2 flex flex-wrap justify-start">
            {
              sizes.map(size => {
                return (
                  <Size key={size} size={size} />
                )
              })
            }
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default Sizes;
