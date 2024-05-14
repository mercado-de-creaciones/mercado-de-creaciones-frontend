import { ReactNode } from "react";

interface Props {
    text: string,
    className?: string,
    children?: ReactNode 
}

export function TypographyH1(props: Props) {
    const { text, className, children } = props;
    return (
        <h1 className={`scroll-m-20 text-4xl tracking-tight lg:text-5xl ${className}`}>
            {text}
            {children}
        </h1>
    )
}
