import { ArrowUpRight, TrendingUp, Users, DollarSign } from "lucide-react";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { CountUp } from "./CountUp";

const caseStudies = [
  {
    company: "МедТех Инновации",
    sector: "Здравоохранение",
    region: "Юго-Восточная Азия",
    description:
      "Региональная платформа медицинских технологий, предоставляющая цифровую диагностику и телемедицинские услуги в шести странах.",
    investment: "Лид раунда B",
    metrics: [
      { label: "Рост выручки", value: "4.5x", icon: TrendingUp },
      { label: "Рост команды", value: "920+", icon: Users },
      { label: "Мультипликатор выхода", value: "7.2x", icon: DollarSign },
    ],
    outcome: "Стратегическое поглощение завершено в 2024",
  },
  {
    company: "АгроКоннект",
    sector: "АгроТех",
    region: "Латинская Америка",
    description:
      "Платформа цифровизации цепочек поставок, связывающая мелких фермеров с международными товарными рынками.",
    investment: "Капитал роста",
    metrics: [
      { label: "Фермеров обслужено", value: "145K+", icon: Users },
      { label: "Рост GMV", value: "9.2x", icon: TrendingUp },
      { label: "MOIC", value: "4.6x", icon: DollarSign },
    ],
    outcome: "Раунд D при оценке 35 млрд рублей",
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
                Истории успеха
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-normal">
                Создание стоимости в действии
              </h2>
            </div>
          </div>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <AnimateOnScroll key={study.company} delay={index * 150}>
              <div className="border border-border bg-card p-8 lg:p-10 h-full flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="text-[11px] font-medium text-accent tracking-widest uppercase">
                      {study.sector} — {study.region}
                    </span>
                    <h3 className="font-serif text-2xl mt-2">{study.company}</h3>
                  </div>
                  <ArrowUpRight
                    className="w-5 h-5 text-muted-foreground"
                    strokeWidth={1}
                  />
                </div>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  {study.description}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  {study.metrics.map((metric) => (
                    <div key={metric.label} className="text-center p-4 bg-secondary/50">
                      <metric.icon
                        className="w-4 h-4 text-accent mx-auto mb-2"
                        strokeWidth={1}
                      />
                      <div className="font-serif text-2xl text-accent mb-1">
                        <CountUp value={metric.value} />
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
