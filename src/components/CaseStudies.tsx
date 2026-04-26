import { AnimateOnScroll } from "./AnimateOnScroll";
import { CountUp } from "./CountUp";
import Icon from "@/components/ui/icon";

const caseStudies = [
  {
    title: "Тушение начальной стадии пожара",
    category: "Применение",
    area: "Промышленные объекты",
    description:
      "Беспилотник с пожарным рукавом 25 мм доставляет воду под давлением 8 атм к очагу возгорания на ранней стадии. Позволяет ликвидировать пожар до прибытия пожарных расчётов.",
    metrics: [
      { label: "Давление подачи воды", value: "8", unit: "атм", icon: "Gauge" },
      { label: "Длина рукава", value: "20", unit: "м", icon: "Ruler" },
      { label: "Ёмкость баллона", value: "50", unit: "л", icon: "FlaskConical" },
    ],
    outcome: "Экспериментально подтверждена эффективность тушения",
  },
  {
    title: "Тушение верхних этажей и труднодоступных мест",
    category: "Применение",
    area: "Высотные здания",
    description:
      "Система обеспечивает доступ к верхним этажам зданий и труднодоступным местам без риска для людей. Вес системы с рукавом на высоте 10 м — 2,4 кг.",
    metrics: [
      { label: "Вес на высоте 10 м", value: "2.4", unit: "кг", icon: "Weight" },
      { label: "Диаметр рукава", value: "25", unit: "мм", icon: "Droplets" },
      { label: "Время стабилизации", value: "5", unit: "сек", icon: "Timer" },
    ],
    outcome: "Адекватность модели подтверждена натурными испытаниями",
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-28 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <AnimateOnScroll>
          <div className="flex items-end justify-between mb-16">
            <div>
              <span className="text-[13px] font-medium text-accent tracking-widest uppercase mb-6 block">
                Области применения
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-normal">
                Результаты испытаний
              </h2>
            </div>
          </div>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <AnimateOnScroll key={study.title} delay={index * 150}>
              <div className="border border-border bg-card p-8 lg:p-10 h-full flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="text-[11px] font-medium text-accent tracking-widest uppercase">
                      {study.category} — {study.area}
                    </span>
                    <h3 className="font-serif text-2xl mt-2">{study.title}</h3>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  {study.description}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  {study.metrics.map((metric) => (
                    <div key={metric.label} className="text-center p-4 bg-secondary/50">
                      <Icon
                        name={metric.icon}
                        size={16}
                        className="text-accent mx-auto mb-2"
                        fallback="CircleDot"
                        strokeWidth={1}
                      />
                      <div className="font-serif text-2xl text-accent mb-1">
                        <CountUp value={metric.value} />
                        <span className="text-sm ml-1">{metric.unit}</span>
                      </div>
                      <div className="text-[11px] text-muted-foreground uppercase tracking-wide">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-6 border-t border-border">
                  <span className="text-sm text-muted-foreground">
                    {study.outcome}
                  </span>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
