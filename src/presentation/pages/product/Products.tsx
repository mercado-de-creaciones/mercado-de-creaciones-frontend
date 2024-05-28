import { useMediaQuery } from "@/presentation/hooks/use-media-query";

import Desktop from "../../components/products/Desktop";
import Mobile from "../../components/products/Mobile";
import { useState } from "react";

export const Products = () => {
  const isDesktop = useMediaQuery("(min-width: 765px)");
  const [isActiveCollapsible, setIsActiveCollapsible] = useState(false);

  return (
    <>
      {
        !isDesktop 
          ? (
            <Mobile isActiveCollapsible={isActiveCollapsible}  setIsActiveCollapsible={setIsActiveCollapsible}/> 
          ) 
          : (
            <Desktop isActiveCollapsible={isActiveCollapsible}  setIsActiveCollapsible={setIsActiveCollapsible}/>
            )
      }
    </>
  );
};
