import { AnimateOnScroll } from "./AnimateOnScroll";
import { CountUp } from "./CountUp";
import Icon from "@/components/ui/icon";

const stats = [
  { value: "25", label: "Мм — диаметр рукава", icon: "Droplets" },
  { value: "20", label: "Метров длина рукава", icon: "Ruler" },
  { value: "8", label: "Атм давление в системе", icon: "Gauge" },
  { value: "50", label: "Литров ёмкость баллона", icon: "FlaskConical" },
];

export function Stats() {
  return (
    <section className="py-20 px-6 lg:px-8 border-y border-border/50">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {stats.map((stat, index) => (
            <AnimateOnScroll key={index} delay={index * 100}>
              <div
                className={`text-center ${index > 0 ? "md:border-l md:border-border/50" : ""}`}
              >
                <Icon
                  name={stat.icon}
                  size={20}
                  className="text-accent mx-auto mb-4"
                  strokeWidth={1}
                />
                <div className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal mb-3 tracking-tight">
                  <CountUp value={stat.value} duration={2000} />
                </div>
                <div className="text-[13px] text-muted-foreground tracking-wide uppercase font-medium">
                  {stat.label}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
