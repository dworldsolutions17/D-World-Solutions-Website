import { ButtonHTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold font-heading text-sm transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-white hover:bg-primary-light shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/25 active:scale-[0.97]",
        secondary:
          "bg-white text-primary border border-border hover:border-secondary hover:text-secondary shadow-sm hover:shadow-md",
        accent:
          "bg-gradient-to-r from-secondary to-accent text-white shadow-lg shadow-secondary/25 hover:shadow-xl hover:shadow-secondary/35 active:scale-[0.97]",
        ghost:
          "text-primary hover:bg-light-gray",
        outline:
          "border-2 border-primary text-primary hover:bg-primary hover:text-white",
      },
      size: {
        sm: "h-9 px-4 py-2 text-xs",
        md: "h-11 px-6 py-3 text-sm",
        lg: "h-13 px-8 py-4 text-base",
        xl: "h-14 px-10 py-5 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  href?: string;
  as?: "button" | "a";
}

export function Button({
  className,
  variant,
  size,
  href,
  as = "button",
  children,
  ...props
}: Props) {
  const classes = cn(buttonVariants({ variant, size, className }));

  if (as === "a" && href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
