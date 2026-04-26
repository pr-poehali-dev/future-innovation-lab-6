import Icon from "@/components/ui/icon";
import { AnimateOnScroll } from "./AnimateOnScroll";

const principles = [
  {
    icon: "Wind",
    title: "Аэродинамическое моделирование",
    description:
      "Визуализация в ANSYS (t=0.63с … 3.00с). Подъём дрона, поворот вправо, стабилизация за 5 секунд. Уравнения динамики Ньютона–Эйлера.",
  },
  {
    icon: "Activity",
    title: "PD-контроллер стабилизации",
    description:
      "Разработан PD-контроллер для стабилизации квадрокоптера в условиях нагрузки пожарным рукавом и изменяющейся массы при подаче воды.",
  },
  {
    icon: "FlaskConical",
    title: "Натурные испытания",
    description:
      "Адекватность математической модели подтверждена натурными испытаниями. Экспериментальные исследования подтвердили эффективность системы пожаротушения.",
  },
];

export function InvestmentThesis() {
  return (
    <section id="thesis" className="py-28 px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl">
        <AnimateOnScroll>
          <div className="max-w-3xl mb-20">
            <span className="text-[13px] font-medium text-accent tracking-widest uppercase mb-6 block">
              Математическая модель квадрокоптера
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-8">
              Научное обоснование системы
            </h2>
            <p className="text-lg text-primary-foreground/70 leading-relaxed">
              Математическая модель включает уравнения динамики Ньютона–Эйлера и PD-контроллер стабилизации.
              Моделирование выполнено в среде ANSYS, результаты подтверждены натурными испытаниями.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <AnimateOnScroll key={principle.title} delay={index * 150}>
              <div className="border border-primary-foreground/10 p-8 hover:border-accent/40 transition-colors duration-300">
                <Icon
                  name={principle.icon}
                  size={24}
                  className="text-accent mb-6"
                  fallback="CircleDot"
                  strokeWidth={1}
                />
                <h3 className="font-medium text-lg mb-4">{principle.title}</h3>
                <p className="text-primary-foreground/60 leading-relaxed text-sm">
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
