import { useState } from "react";
import { useMediaQuery } from "@/presentation/hooks/use-media-query";

import Desktop from "../../components/products/Desktop";
import Mobile from "../../components/products/Mobile";

export const Products = () => {
  const [isActiveAcordeonFilters, setIsActiveAcordeonFilters] = useState(false);

  const isDesktop = useMediaQuery("(min-width: 765px)");

  return (
    <>
      {
        isDesktop 
          ? (
              <Desktop isActiveAcordeonFilters={isActiveAcordeonFilters}  setIsActiveAcordeonFilters={setIsActiveAcordeonFilters}/>
            ) 
          : (
              <Mobile isActiveAcordeonFilters={isActiveAcordeonFilters}  setIsActiveAcordeonFilters={setIsActiveAcordeonFilters}/> 
            )
      }
    </>
  );
};
