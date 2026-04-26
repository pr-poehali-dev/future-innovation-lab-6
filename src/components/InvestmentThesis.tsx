import { Compass, Shield, Zap } from "lucide-react";
import { AnimateOnScroll } from "./AnimateOnScroll";

const principles = [
  {
    icon: Compass,
    title: "Выбор рынков",
    description:
      "Мы фокусируемся на экономиках с внутренними драйверами роста: растущий средний класс, благоприятная демография, увеличивающийся потребительский спрос.",
  },
  {
    icon: Shield,
    title: "Управление рисками",
    description:
      "Тщательная проверка, разумное использование заемных средств и постоянный мониторинг портфеля защищают капитал на всех этапах рыночных циклов.",
  },
  {
    icon: Zap,
    title: "Создание стоимости",
    description:
      "Мы работаем с руководством над профессионализацией операций, повышением маржинальности и реализацией стратегических возможностей для расширения.",
  },
];

export function InvestmentThesis() {
  return (
    <section id="thesis" className="py-28 px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl">
        <AnimateOnScroll>
          <div className="max-w-3xl mb-20">
            <span className="text-[13px] font-medium text-accent tracking-widest uppercase mb-6 block">
              Инвестиционная философия
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-8">
              Принципиальный подход к растущим рынкам
            </h2>
            <p className="text-lg text-primary-foreground/70 leading-relaxed">
              Мы убеждены, что превосходная доходность возникает там, где
              макроэкономический попутный ветер встречается с выдающимся
              руководством. Наша методология объединяет глубокую региональную
              экспертизу с проверенными глобальными стратегиями для поиска и
              развития лидеров рынка завтрашнего дня.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <AnimateOnScroll key={principle.title} delay={index * 200} direction="left">
              <div className="border-t border-primary-foreground/20 pt-8">
                <principle.icon className="w-6 h-6 text-accent mb-6" strokeWidth={1} />
                <h3 className="font-medium text-xl mb-4">{principle.title}</h3>
                <p className="text-primary-foreground/70 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
