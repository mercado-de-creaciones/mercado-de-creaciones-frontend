import { useEffect, useState } from "react";

import IconSizes from "/assets/icon-sizes.svg";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/presentation/components/ui/accordion";
import Size from "./Size";
import { useMediaQuery } from "@/presentation/hooks/use-media-query";


interface SizesProp {
  isActiveCollapsible?: boolean;
  setIsActiveCollapsible: (value: boolean) => void;
}

// const sizeMapping = {
//   "XX-Small": "XX-S",
//   "X-Small": "XS",
//   "Small": "S",
//   "Medium": "M",
//   "Large": "L",
//   "X-Large": "X-L",
//   "XX-Large": "X-X-L",
//   "3X-Large": "3X-L",
//   "4X-Large": "4X-L"
// }
const sizes = ["XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large"];

const Sizes = ({ isActiveCollapsible = false, setIsActiveCollapsible }: SizesProp) => {
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
      <Accordion value={activeAccordionItem} type="single" collapsible className="w-full mb-0"
        onValueChange={setActiveAccordionItem} onClick={handleClick}
      >
        <AccordionItem value="item-1" borderBotton={false}>
          <AccordionTrigger hiddenArrow={isActiveCollapsible} className="pb-0">
            <div className={`${isActiveCollapsible && !mobile ? "w-[94px] ml-[18px]" : !mobile && "w-auto"} flex overflow-hidden duration-300`}>
              <img className="w-0 md:w-auto" src={IconSizes} alt="icon tallas" />
              <h3 className={`${isActiveCollapsible && !mobile ? "w-0" : !mobile && "w-full ml-2"} overflow-hidden whitespace-nowrap text-lg font-medium text-gray-800 duration-300 `}>Tallas</h3>
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
