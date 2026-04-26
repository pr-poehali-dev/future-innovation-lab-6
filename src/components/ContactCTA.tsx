import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function ContactCTA() {
  return (
    <section className="py-28 px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-4xl text-center">
        <AnimateOnScroll>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-8">
            Готовы к сотрудничеству и партнёрству
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={150}>
          <p className="text-lg text-primary-foreground/70 leading-relaxed mb-12 max-w-2xl mx-auto">
            Если вы представляете пожарную службу, государственные структуры или инвестиционный фонд и заинтересованы в развитии проекта — мы открыты к диалогу.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={300}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8"
            >
              Написать команде <ArrowRight className="ml-2 w-4 h-4" strokeWidth={1} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 bg-transparent"
            >
              Скачать отчёт по проекту
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
