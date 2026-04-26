import { ArrowUpRight, Heart, Factory, Code, Truck, Zap, ShoppingBag } from "lucide-react";
import { AnimateOnScroll } from "./AnimateOnScroll";

const portfolioCompanies = [
  {
    name: "МедикаПлюс",
    sector: "Здравоохранение",
    description:
      "Расширение с 4 до 15 регионов за время партнерства. Ведущий провайдер специализированных медицинских услуг.",
    url: "#",
    icon: Heart,
  },
  {
    name: "ТехноПром",
    sector: "Производство",
    description:
      "Рост выручки в 5 раз за 4 года. Передовые производственные решения для аэрокосмической и оборонной отраслей.",
    url: "#",
    icon: Factory,
  },
  {
    name: "СофтВектор",
    sector: "Технологии",
    description:
      "От раунда B до лидера отрасли. Корпоративная SaaS-платформа для цифровой трансформации.",
    url: "#",
    icon: Code,
  },
  {
    name: "ЛогистикПро",
    sector: "Транспорт",
    description:
      "Рост до 45+ распределительных центров. Комплексные решения для управления цепочками поставок.",
    url: "#",
    icon: Truck,
  },
  {
    name: "ЭнергоСолар",
    sector: "Энергетика",
    description:
      "2,5 ГВт мощности в разработке. Масштабируемые проекты инфраструктуры возобновляемой энергетики.",
    url: "#",
    icon: Zap,
  },
  {
    name: "ПремиумГрупп",
    sector: "Потребительский сектор",
    description:
      "Приобретение и консолидация 7 брендов. Портфель премиальных продуктов с федеральным охватом.",
    url: "#",
    icon: ShoppingBag,
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-28 px-6 lg:px-8 bg-secondary/30">
      <div className="mx-auto max-w-7xl">
        <AnimateOnScroll>
          <div className="mb-16">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal mb-6">
              Доказанные результаты
            </h2>
            <p className="text-muted-foreground max-w-2xl text-pretty text-lg">
              52 инвестиции. 21 успешный выход. Узнайте, как мы помогли
              выдающимся командам создать компании-лидеры отраслей.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioCompanies.map((company, index) => (
            <AnimateOnScroll key={company.name} delay={index * 100}>
              <a href={company.url}>
                <div className="group p-8 h-full border border-border/50 bg-card hover:border-accent/40 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-14 h-14 bg-primary/10 flex items-center justify-center">
                      <company.icon className="w-7 h-7 text-primary" strokeWidth={1} />
                    </div>
                    <ArrowUpRight
                      className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors"
                      strokeWidth={1}
                    />
                  </div>
                  <div className="text-[11px] font-medium text-accent uppercase tracking-widest mb-3">
                    {company.sector}
                  </div>
                  <h3 className="text-xl font-medium mb-3">{company.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {company.description}
                  </p>
                </div>
              </a>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
