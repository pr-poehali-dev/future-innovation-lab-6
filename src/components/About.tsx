import { ArrowRight } from "lucide-react";
import { AnimateOnScroll } from "./AnimateOnScroll";
import Icon from "@/components/ui/icon";

const pillars = [
  {
    number: "01",
    title: "Система сброса рукава",
    description:
      "Двухрычажный механизм с сервоприводом, подключённый к полётному контроллеру SpeedyBee F405 V3. Сброс рукава по команде с пульта — безопасная посадка дрона после тушения.",
    icon: "Settings2",
  },
  {
    number: "02",
    title: "3D-печать компонентов",
    description:
      "Детали изготовлены методом 3D-печати: PLA+ для корпуса, PETG для подрамника, TPU для гибкого пожарного ствола. Лёгкость и ремонтопригодность конструкции.",
    icon: "Layers",
  },
  {
    number: "03",
    title: "Управление и прошивка",
    description:
      "Прошивка Betaflight, управляющий пин M5–M8, пины 5V и GND. Сброс по команде с пульта экономит заряд АКБ и обеспечивает безопасную посадку.",
    icon: "Cpu",
  },
  {
    number: "04",
    title: "Модульный принцип",
    description:
      "Система спроектирована по модульному принципу: лёгкая замена и доработка отдельных узлов. Совместима с различными типами мультироторных платформ.",
    icon: "PuzzleIcon",
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
                О проекте <ArrowRight className="w-3 h-3" strokeWidth={1} />
              </span>
              <p className="text-2xl md:text-3xl leading-relaxed text-pretty font-light">
                Беспилотная авиационная система (БАС) с пожарным рукавом предназначена для тушения на начальном этапе, работы с крупногабаритной техникой и тушения верхних этажей зданий.
              </p>
              <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                Экспериментальные исследования подтвердили эффективность системы. Адекватность математической модели подтверждена натурными испытаниями.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={150}>
            <div>
              <p className="text-[13px] font-medium text-muted-foreground tracking-widest uppercase mb-8">
                Ключевые технические решения
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {pillars.map((pillar, index) => (
                  <AnimateOnScroll key={pillar.number} delay={300 + index * 150}>
                    <div className="p-8 border border-border/50 bg-card hover:border-accent/30 transition-colors duration-300 h-full">
                      <Icon
                        name={pillar.icon}
                        size={24}
                        className="text-accent mb-4"
                        fallback="Settings"
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
