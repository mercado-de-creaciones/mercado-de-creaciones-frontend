import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/presentation/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & {borderBotton?: boolean}
>(({ className, borderBotton=true, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(`${borderBotton && "border-b"}`, className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

type ArrowDirections = {
  up: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  down: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  left: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  right: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const arrowDirections: ArrowDirections = {
  up: ChevronUp,
  down: ChevronDown,
  left: ChevronLeft,
  right: ChevronRight
}

type AccordionTriggerProps = {
  hiddenArrow?: boolean;
  arrowRotation?: number;
  arrowDirection?: keyof ArrowDirections;
};


const AccordionTrigger = React.forwardRef<
React.ElementRef<typeof AccordionPrimitive.Trigger>,
React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & AccordionTriggerProps
>(({ className, children, hiddenArrow= false, arrowRotation=180, arrowDirection="up", ...props }, ref) => {
  const ArrowIcon = arrowDirections[arrowDirection];

  return (
    <AccordionPrimitive.Header className="flex justify-center">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          `flex-1 items-center justify-between flex py-4 font-medium transition-all
          ${arrowRotation == 180 
            ?
             "[&[data-state=open]>svg]:rotate-180"
            :
            "[&[data-state=open]>svg]:rotate-90"
          }`,
          className
        )}
        {...props}
      >
        {children}
          <ArrowIcon className={`${hiddenArrow ? "w-0" : "w-[23px]"} overflow-hidden shrink-0 transition-transform duration-200`} />
            
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
})

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
