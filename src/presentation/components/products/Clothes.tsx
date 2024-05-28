import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/presentation/components/shared/accordion";
import { useState } from "react";


interface ClothesProp {
  isActiveCollapsible?: boolean;
}

const Clothes = ({isActiveCollapsible=false}: ClothesProp) => {
  const [openItems, setOpenItems] = useState("");

  return (
    <div className={`${isActiveCollapsible ? "w-0 overflow-hidden" : "w-full" }`}>
      <Accordion value={isActiveCollapsible ? "" : openItems} type="single" collapsible className="w-full" onValueChange={setOpenItems}>
        <AccordionItem value="item-1">
          <AccordionTrigger className="pl-[26px]" arrowRotation="90" arrowDirection="right">Ropa</AccordionTrigger>
          <AccordionContent className="pl-[26px]">
            contenido
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default Clothes
