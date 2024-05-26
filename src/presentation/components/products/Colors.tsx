import IconArrow from "/assets/icon-arrow.svg";
import IconColors from "/assets/icon-colors.svg";

import AccordionTriggerCustom from "./AccordionTriggerCustom"

interface ColorsProp {
  isActiveAcordeonFilters?: boolean;
}

const Colors = ({isActiveAcordeonFilters=false} :ColorsProp) => {
  return (
    <>
      <AccordionTriggerCustom title="Colores" isActiveAccordion={isActiveAcordeonFilters} iconImg={IconColors} iconArrow={IconArrow}
        line={true}
      />
    </>
  )
}

export default Colors
