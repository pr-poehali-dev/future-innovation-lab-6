import { ArrowRight, Target, TrendingUp } from "lucide-react";
import { AnimateOnScroll } from "./AnimateOnScroll";

const pillars = [
  {
    number: "01",
    title: "Операционное совершенство",
    description:
      "Наш практический подход приносит ощутимые результаты: увеличение маржи, рост выручки и создание фундамента для устойчивого успеха вашего бизнеса.",
    icon: Target,
  },
  {
    number: "02",
    title: "Стратегический капитал",
    description:
      "Гибкие капитальные решения, разработанные под ваши цели. От акционерного капитала роста до поглощений — мы структурируем сделки, согласующие интересы и создающие стоимость.",
    icon: TrendingUp,
  },
];

export function About() {
  return (
    <section id="about" className="py-28 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <AnimateOnScroll>
            <div>
              <span className="text-[13px] font-medium text-accent tracking-widest uppercase mb-6 inline-flex items-center gap-3">
                Почему мы <ArrowRight className="w-3 h-3" strokeWidth={1} />
              </span>
              <p className="text-2xl md:text-3xl leading-relaxed text-pretty font-light">
                Мы не просто инвестируем — мы строим вместе с вами. Наша команда
                привносит операционный опыт, отраслевую экспертизу и обширную сеть
                деловых связей, чтобы помочь вам достичь значимых результатов.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={150}>
            <div>
              <p className="text-[13px] font-medium text-muted-foreground tracking-widest uppercase mb-8">
                Наши инвестиционные принципы
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {pillars.map((pillar, index) => (
                  <AnimateOnScroll key={pillar.number} delay={300 + index * 150}>
                    <div className="p-8 border border-border/50 bg-card hover:border-accent/30 transition-colors duration-300 h-full">
                      <pillar.icon
                        className="w-6 h-6 text-accent mb-4"
                        strokeWidth={1}
                      />
                      <div className="text-5xl font-serif font-normal mb-6 text-accent/60">
                        {pillar.number}
                      </div>
                      <h3 className="font-medium text-lg mb-3">{pillar.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
