import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
  align?: "left" | "center";
  subtitle?: string;
  badge?: string;
}

export function SectionTitle({
  children,
  className,
  as: Tag = "h2",
  align = "center",
  subtitle,
  badge,
}: Props) {
  const tagStyles = {
    h1: "text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]",
    h2: "text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15]",
    h3: "text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.2]",
  };

  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {badge && (
        <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-secondary uppercase">
          {badge}
        </span>
      )}
      <Tag className={cn(tagStyles[Tag], "text-primary tracking-tight", className)}>
        {children}
      </Tag>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-muted-text leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
