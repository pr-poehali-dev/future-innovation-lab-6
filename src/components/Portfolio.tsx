import { AnimateOnScroll } from "./AnimateOnScroll";
import Icon from "@/components/ui/icon";

const specs = [
  {
    name: "Диаметр пожарного рукава",
    value: "25 мм",
    note: "тестовый 10 мм",
    icon: "Droplets",
    description: "Основной рукав обеспечивает расход воды, достаточный для тушения пожара начальной стадии.",
  },
  {
    name: "Длина рукава",
    value: "20 м",
    note: "",
    icon: "Ruler",
    description: "Позволяет дрону удерживаться на безопасной высоте от очага возгорания.",
  },
  {
    name: "Ёмкость баллона",
    value: "50 л",
    note: "",
    icon: "FlaskConical",
    description: "Достаточный запас воды для тушения локального очага возгорания.",
  },
  {
    name: "Давление в системе",
    value: "8 атм",
    note: "",
    icon: "Gauge",
    description: "Обеспечивает эффективную подачу воды с необходимым напором.",
  },
  {
    name: "Вес системы на высоте 10 м",
    value: "2,4 кг",
    note: "",
    icon: "Weight",
    description: "Минимизированная масса за счёт 3D-печатных компонентов из PLA+, PETG и TPU.",
  },
  {
    name: "Контроллер",
    value: "SpeedyBee F405 V3",
    note: "Betaflight",
    icon: "Cpu",
    description: "Полётный контроллер с поддержкой управляющих пинов M5–M8 для системы сброса.",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-28 px-6 lg:px-8 bg-secondary/30">
      <div className="mx-auto max-w-7xl">
        <AnimateOnScroll>
          <div className="mb-16">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal mb-6">
              Технические характеристики
            </h2>
            <p className="text-muted-foreground max-w-2xl text-pretty text-lg">
              Беспилотная система с пожарным рукавом. Тушение на начальном этапе, крупногабаритная техника, верхние этажи зданий. Модульный сбросной механизм.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specs.map((spec, index) => (
            <AnimateOnScroll key={spec.name} delay={index * 100}>
              <div className="group p-8 h-full border border-border/50 bg-card hover:border-accent/40 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between mb-8">
                  <div className="w-14 h-14 bg-primary/10 flex items-center justify-center">
                    <Icon name={spec.icon} size={28} className="text-primary" fallback="Settings" strokeWidth={1} />
                  </div>
                  <div className="text-right">
                    <div className="font-serif text-2xl text-accent font-normal">{spec.value}</div>
                    {spec.note && (
                      <div className="text-[11px] text-muted-foreground mt-1">{spec.note}</div>
                    )}
                  </div>
                </div>
                <h3 className="text-lg font-medium mb-3">{spec.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {spec.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
