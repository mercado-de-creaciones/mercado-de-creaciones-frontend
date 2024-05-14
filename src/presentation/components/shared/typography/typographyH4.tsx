import { ReactNode } from "react";

interface Props {
    text: string,
    className?: string,
    children?: ReactNode 
}

export function TypographyH4(props: Props) {
    const { text, className, children } = props;

    return (
      <h4 className={`scroll-m-20 text-xl font-semibold tracking-tight ${className}`}>
        {text}
        {children}
      </h4>
    )
  }
  