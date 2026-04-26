import { Leaf, Users, Building, Globe } from "lucide-react";
import { AnimateOnScroll } from "./AnimateOnScroll";

const commitments = [
  {
    icon: Leaf,
    title: "Экология",
    description:
      "Измерение углеродного следа и цели по его сокращению для всех портфельных компаний.",
  },
  {
    icon: Users,
    title: "Социальная ответственность",
    description:
      "Этичные трудовые стандарты, программы разнообразия и инициативы вовлечения сообществ.",
  },
  {
    icon: Building,
    title: "Корпоративное управление",
    description:
      "Независимый контроль, прозрачная отчетность и принципиальное ведение бизнеса.",
  },
  {
    icon: Globe,
    title: "Социальный эффект",
    description:
      "Измеримые результаты, соответствующие Целям устойчивого развития ООН.",
  },
];

export function ESG() {
  return (
    <section id="esg" className="py-28 px-6 lg:px-8 bg-secondary/30">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <AnimateOnScroll>
            <div>
              <span className="text-[13px] font-medium text-accent tracking-widest uppercase mb-6 block">
                Ответственное инвестирование
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-normal leading-tight mb-8">
                Доходность со смыслом
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Мы убеждены, что устойчивые практики и высокая доходность
                дополняют друг друга. Наша ESG-методология интегрирована в каждый
                этап инвестиционного процесса — от первичного анализа до создания
                стоимости и выхода.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Как подписанты Принципов ответственного инвестирования ООН, мы
                придерживаемся строгих стандартов экологической заботы, социальной
                ответственности и корпоративного управления для себя и наших
                портфельных компаний.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 gap-6">
            {commitments.map((commitment, index) => (
              <AnimateOnScroll key={commitment.title} delay={index * 100}>
                <div className="p-6 bg-card border border-border">
                  <commitment.icon
                    className="w-5 h-5 text-accent mb-4"
                    strokeWidth={1}
                  />
                  <h3 className="font-medium mb-2">{commitment.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {commitment.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
