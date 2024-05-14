import { ReactNode } from "react";

interface Props {
    text: string,
    className?: string,
    children?: ReactNode 
}
export function TypographyP(props: Props) {
    const { text, className, children } = props;
    return (
        <p className={`leading-7 ${className} [&:not(:first-child)]:mt-6`}>
            {text}
            {children}
        </p>
    )
}
