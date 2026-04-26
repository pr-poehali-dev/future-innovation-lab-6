import { AnimateOnScroll } from "./AnimateOnScroll";

const technologies = [
  "SpeedyBee F405 V3",
  "Betaflight",
  "ANSYS",
  "3D-печать PLA+/PETG/TPU",
  "Уравнения Ньютона–Эйлера",
  "PD-контроллер",
];

export function TrustedBy() {
  return (
    <section className="py-20 px-6 lg:px-8 border-y border-border">
      <div className="mx-auto max-w-7xl">
        <AnimateOnScroll>
          <p className="text-[13px] font-medium text-muted-foreground tracking-widest uppercase text-center mb-12">
            Технологии и инструменты
          </p>
        </AnimateOnScroll>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <AnimateOnScroll key={tech} delay={index * 100}>
              <div className="text-center">
                <span className="text-sm font-medium text-muted-foreground">
                  {tech}
                </span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
