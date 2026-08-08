import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

export function Card({
  children,
  className,
  hover = true,
  padding = "md",
}: Props) {
  const paddingMap = {
    sm: "p-5",
    md: "p-6 md:p-8",
    lg: "p-8 md:p-10",
  };

  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-white",
        paddingMap[padding],
        hover && "card-hover",
        className
      )}
    >
      {children}
    </div>
  );
}
