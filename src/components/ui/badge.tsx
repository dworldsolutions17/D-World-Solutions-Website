import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Badge({ children, className, size = "md" }: Props) {
  const sizeMap = {
    sm: "px-2.5 py-0.5 text-xs",
    md: "px-3.5 py-1 text-xs",
    lg: "px-4 py-1.5 text-sm",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-medium tracking-wide",
        "bg-secondary/10 text-secondary",
        sizeMap[size],
        className
      )}
    >
      {children}
    </span>
  );
}
