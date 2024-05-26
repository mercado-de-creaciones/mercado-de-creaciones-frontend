import IconSizes from "/assets/icon-sizes.svg";
import IconArrow from "/assets/icon-arrow.svg";

import AccordionTriggerCustom from "./AccordionTriggerCustom";


interface SizesProp {
  isActiveAcordeonFilters?: boolean;
}

const Sizes = ({isActiveAcordeonFilters=false} : SizesProp) => {
  return (
    <>
      <AccordionTriggerCustom title="Tallas" isActiveAccordion={isActiveAcordeonFilters} iconArrow={IconArrow} iconImg={IconSizes}/>
    </>
  );
};

export default Sizes;
