import { useCounter } from "@/hooks/use-counter";

interface Props {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}

export function AnimatedCounter({ end, suffix = "", prefix = "", label, duration = 2000 }: Props) {
  const { count, ref } = useCounter(end, duration);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-bold font-heading text-primary md:text-5xl">
        {prefix}
        {count}
        {suffix}
      </div>
      <p className="mt-2 text-sm font-medium text-muted-text">{label}</p>
    </div>
  );
}
