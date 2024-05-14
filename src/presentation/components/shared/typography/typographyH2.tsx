import { ReactNode } from "react";

interface Props {
    text: string,
    className?: string,
    children?: ReactNode 
}
export function TypographyH2(props: Props) {
    const { text, className, children } = props;
    return (
        <h2 className={`scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 ${className}`}>
            {text}
            {children}
        </h2>
    )
}
