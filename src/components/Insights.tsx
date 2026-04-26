import { ArrowRight } from "lucide-react";
import { AnimateOnScroll } from "./AnimateOnScroll";

const articles = [
  {
    slug: "southeast-asia-digital-economy",
    category: "Обзор рынков",
    title: "Цифровая экономика Юго-Восточной Азии: возможности на 27 трлн рублей",
    date: "Декабрь 2025",
    readTime: "8 мин",
  },
  {
    slug: "latin-american-fintech",
    category: "Инвестиционный прогноз",
    title: "Почему мы оптимистичны в отношении латиноамериканского финтеха",
    date: "Ноябрь 2025",
    readTime: "6 мин",
  },
  {
    slug: "measuring-impact-beyond-metrics",
    category: "ESG-аналитика",
    title: "Измерение воздействия: выход за рамки традиционных метрик",
    date: "Октябрь 2025",
    readTime: "5 мин",
  },
];

export function Insights() {
  return (
    <section id="insights" className="py-28 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <AnimateOnScroll>
          <div className="flex items-end justify-between mb-16">
            <div>
              <span className="text-[13px] font-medium text-accent tracking-widest uppercase mb-6 block">
                Аналитика
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-normal">
                Наш взгляд
              </h2>
            </div>
            <a
              href="#insights"
              className="hidden md:flex items-center gap-2 text-sm font-medium text-accent hover:underline underline-offset-4"
            >
              Смотреть все <ArrowRight className="w-4 h-4" strokeWidth={1} />
            </a>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <AnimateOnScroll key={article.title} delay={index * 150}>
              <a href={`#${article.slug}`} className="group block h-full">
                <article className="border border-border bg-card p-8 h-full flex flex-col transition-colors duration-300 hover:border-accent/30">
                  <span className="text-[11px] font-medium text-accent tracking-widest uppercase mb-4">
                    {article.category}
                  </span>
                  <h3 className="font-serif text-xl mb-4 group-hover:text-accent transition-colors duration-300 leading-snug">
                    {article.title}
                  </h3>
                  <div className="mt-auto pt-6 flex items-center gap-4 text-[12px] text-muted-foreground">
                    <span>{article.date}</span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                    <span>{article.readTime}</span>
                  </div>
                </article>
              </a>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={500}>
          <div className="mt-8 md:hidden">
            <a
              href="#insights"
              className="flex items-center gap-2 text-sm font-medium text-accent hover:underline underline-offset-4"
            >
              Смотреть всю аналитику <ArrowRight className="w-4 h-4" strokeWidth={1} />
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
