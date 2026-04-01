import { cva, type VariantProps } from "class-variance-authority";

export const textVariants = cva("font-sans text-gray-400", {
  variants: {
    variant: {
      "body-sm-bold": "text-sm leading-5 font-semibold",
      "body-md": "text-base leading-6 font-normal",
      "body-md-bold": "text-base leading-6 font-semibold",
    },
  },
  defaultVariants: {
    variant: "body-md",
  },
});

interface TextProps extends VariantProps<typeof textVariants> {
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  children: React.ReactNode;
}

export default function Text({
  className,
  as: Component = "span",
  variant,
  children,
  ...props
}: TextProps) {
  const combinedClassName =
    textVariants({ variant }) + (className ? ` ${className}` : "");

  return (
    <Component className={combinedClassName} {...props}>
      {children}
    </Component>
  );
}
