interface Props {
    text: string,
    className?: string
}

export function TypographyH3(props: Props) {
    const { text, className } = props;
    return (
        <h3 className={`scroll-m-20 text-2xl font-semibold tracking-tight ${className}`}>
            {text}
        </h3>
    )
}
