import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
  padding?: boolean;
  withGrid?: boolean;
  withNoise?: boolean;
  id?: string;
  bg?: "white" | "light" | "dark";
}

export function Section({
  children,
  className,
  padding = true,
  withGrid = false,
  withNoise = false,
  id,
  bg = "white",
}: Props) {
  const bgMap = {
    white: "bg-white",
    light: "bg-light-gray",
    dark: "bg-primary text-white",
  };

  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden",
        bgMap[bg],
        padding && "section-padding",
        className
      )}
    >
      {withGrid && <div className="absolute inset-0 bg-grid pointer-events-none" />}
      {withNoise && <div className="absolute inset-0 bg-noise pointer-events-none" />}
      <div className="container-main relative z-10">{children}</div>
    </section>
  );
}
