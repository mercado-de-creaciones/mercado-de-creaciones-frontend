import AccordionTriggerCustom from './AccordionTriggerCustom'
import IconArrow from "/assets/icon-arrow.svg";
import IconPrice from "/assets/icon-price.svg";

interface PriceProp {
  isActiveAcordeonFilters?: boolean; 
}

const Price = ({isActiveAcordeonFilters=false} :PriceProp) => {
  return (
    <>
      <AccordionTriggerCustom title="Precio" isActiveAccordion={isActiveAcordeonFilters} iconImg={IconPrice} iconArrow={IconArrow} line={true}/>
    </>
  )
}

export default Price
