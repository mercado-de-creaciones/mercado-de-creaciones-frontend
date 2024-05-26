import IconArrow from "/assets/icon-arrow.svg";

import IconSubCategorias from "/assets/icon-sub-categorias.svg";


import AccordionTriggerCustom from "./AccordionTriggerCustom";

interface SubCategoriesProp {
  isActiveAcordeonFilters?: boolean;
}

const SubCategories = ({isActiveAcordeonFilters =false} : SubCategoriesProp) => {
  return (
    <>
      <AccordionTriggerCustom title="Sub Categorías" isActiveAccordion={isActiveAcordeonFilters} iconImg={IconSubCategorias}
      iconArrow={IconArrow} line={true}
      />
    </>
  )
}

export default SubCategories
