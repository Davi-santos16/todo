import { cva, type VariantProps } from "class-variance-authority";
import React from "react";


export const ContainerVariants = cva('mx-auto', {
    variants: {
        size:{
            md: "max-w-126 px-2 "
        }
    },
    defaultVariants:{
        size: 'md'
    }
})

interface Containerprops extends VariantProps<typeof ContainerVariants>,React.ComponentProps<"div">{
    as?: keyof React.JSX.IntrinsicElements;
}

export default function Container({
    as = "div",
    className,
    children,
    ...props

}:Containerprops){
    return React.createElement(
        as,
        {
            className: ContainerVariants({size: "md", className}),
            ...props
        },
        children
    )
}