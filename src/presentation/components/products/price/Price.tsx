import IconPrice from "/assets/icon-price.svg";

import { useEffect, useState } from 'react';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/presentation/components/ui/accordion";
import PriceSliderRadio from "./PriceSliderRadio";
import { useMediaQuery } from "@/presentation/hooks/use-media-query";

interface PriceProp {
  isActiveCollapsible?: boolean;
  setIsActiveCollapsible: (value: boolean) => void;
}

const Price = ({ isActiveCollapsible = true, setIsActiveCollapsible }: PriceProp) => {
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
            <div className={`${isActiveCollapsible && !mobile ? "w-[38px] ml-[18px]" : ""} overflow-hidden flex
              duration-300`}>
              <img className="w-0 md:w-auto" src={IconPrice} alt="icon Price" />
              <h3 className={`${isActiveCollapsible && !mobile ? "w-0" : !mobile && "w-full ml-2"} overflow-hidden whitespace-nowrap text-lg font-medium text-gray-800 duration-300`}>Precio</h3>
            </div>
          </AccordionTrigger>
          <AccordionContent className="mr-3">
            <PriceSliderRadio />
          </AccordionContent>
        </AccordionItem>
      </Accordion >
    </>
  )
}

export default Price
