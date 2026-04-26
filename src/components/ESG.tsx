import { AnimateOnScroll } from "./AnimateOnScroll";
import Icon from "@/components/ui/icon";

const commitments = [
  {
    icon: "ShieldCheck",
    title: "Безопасность людей",
    description:
      "Дрон исключает риски для пожарных при тушении в труднодоступных и опасных местах.",
  },
  {
    icon: "Leaf",
    title: "Экологичность",
    description:
      "Использование воды без химических реагентов снижает экологический ущерб при ликвидации пожаров.",
  },
  {
    icon: "Building2",
    title: "Применимость",
    description:
      "Система масштабируется на объекты промышленности, жилые здания, природные пожары.",
  },
  {
    icon: "Trophy",
    title: "Поддержка ФСИ",
    description:
      "Проект реализуется при поддержке Фонда содействия инновациям в рамках программы «Студенческий стартап».",
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
                Фонд содействия инновациям
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-normal leading-tight mb-8">
                Социальный эффект проекта
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Проект создан при поддержке ФГБУ «Фонд содействия развитию малых форм предприятий в научно-технической сфере» в рамках программы «Студенческий стартап» федерального проекта «Платформа университетского технологического предпринимательства».
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Беспилотная система пожаротушения направлена на снижение числа жертв и материального ущерба от пожаров, повышение безопасности работы пожарных расчётов.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 gap-6">
            {commitments.map((commitment, index) => (
              <AnimateOnScroll key={commitment.title} delay={index * 100}>
                <div className="p-6 bg-card border border-border">
                  <Icon
                    name={commitment.icon}
                    size={20}
                    className="text-accent mb-4"
                    fallback="CircleDot"
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
