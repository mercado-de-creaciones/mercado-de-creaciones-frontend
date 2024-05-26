interface TriggerAccordion {
  title: string;
  isActiveAccordion?: boolean;
  iconImg?: string;
  iconArrow: string;
}

const AccordionTriggerCustom = ({title, isActiveAccordion = false, iconImg, iconArrow}: TriggerAccordion) => {
  return (
    <>
      <div className={`${isActiveAccordion ? "justify-center" : "justify-between" } flex w-full items-center`}>
        <div className={`${isActiveAccordion ? "w-[38px]" : "w-full"} duration-700 transition-all ease-in-out flex justify-center items-center`}>
          <img className="" src={iconImg} alt={`icon ${title}`}/>
      
          <div className={`${isActiveAccordion ? "w-0 overflow-hidden": "w-full"} duration-700 transition-all ease-in-out`}>
            <div className={`w-full transition-transform duration-700 ease-in-out transform ${isActiveAccordion? '-translate-x-full scale-x-0' : 'translate-x-0 scale-x-100'}`}>
              <h3 className={`text-lg font-medium text-gray-800 whitespace-nowrap px-2`}>{title}</h3>
            </div>
          </div>

        </div>

        <img className={`${isActiveAccordion ? "overflow-hidden w-0 h-0" : "w-[16px] h-[16px]" } rotate-[90deg] duration-700 transition-all ease-in-out`} src={iconArrow} alt="icon arrow" />
      </div>

      {/* <div>despliegue contenido</div> */}
    </>
  )
}

export default AccordionTriggerCustom
