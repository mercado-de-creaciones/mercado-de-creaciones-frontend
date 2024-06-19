import IconColors from "/assets/icon-colors.svg";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/presentation/components/ui/accordion";
import { useEffect, useState } from "react";
import ColorsSelect from "./ColorsSelect";
import { useMediaQuery } from "@/presentation/hooks/use-media-query";


const colors = {
  green: '#00FF00',
  red: '#FF0000',
  yellow: '#FFFF00',
  orange: '#FFA500',
  cyan: '#00FFFF',
  blue: '#0000FF',
  purple: '#800080',
  pink: '#FF00FF',
  white: '#FFFFFF',
  black: '#000000'
};

interface ColorsProp {
  isActiveCollapsible?: boolean;
  setIsActiveCollapsible: (value: boolean) => void;
}

const Colors = ({ isActiveCollapsible = true, setIsActiveCollapsible }: ColorsProp) => {
  const [activeAccordionItem, setActiveAccordionItem] = useState("")
  const mobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    (isActiveCollapsible) && setActiveAccordionItem("");
  }, [isActiveCollapsible]);

  const handleClick = () => {
    (isActiveCollapsible) && setIsActiveCollapsible(!isActiveCollapsible);
  }

  return (
    <div className="">
      <Accordion value={activeAccordionItem} type="single" collapsible className="w-full" onValueChange={setActiveAccordionItem}
        onClick={handleClick}
      >
        <AccordionItem value="item-1">
          <AccordionTrigger hiddenArrow={isActiveCollapsible}>
            <div className={`${isActiveCollapsible && !mobile ? "w-[94px] ml-[18px]" : !mobile && "w-auto"} overflow-hidden flex duration-300`}>
              <img className="w-0 md:w-auto" src={IconColors} alt="icon colors" />
              <h3 className={`${isActiveCollapsible && !mobile ? "w-0" : !mobile && "w-full ml-2"} overflow-hidden whitespace-nowrap text-lg font-medium text-gray-800 duration-300`}>Colors</h3>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex gap-3 flex-wrap justify-center">
            {
              Object.entries(colors).map(([colorName, colorHex]) => {
                return (
                  <ColorsSelect key={colorName} colorName={colorName} colorHex={colorHex} />
                )
              })
            }
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div >
  )
}

export default Colors
