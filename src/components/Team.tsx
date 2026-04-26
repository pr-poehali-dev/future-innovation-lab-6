import { ArrowRight } from "lucide-react";
import { AnimateOnScroll } from "./AnimateOnScroll";

const team = [
  {
    name: "Руководитель проекта",
    role: "Проектирование системы",
    bio: "Разработка общей концепции, интеграция компонентов, математическое моделирование динамики квадрокоптера.",
    image: "/images/allan-bradford-founding-20partner-compressed.webp",
  },
  {
    name: "Инженер-механик",
    role: "3D-печать и механика",
    bio: "Проектирование двухрычажного механизма сброса рукава, подбор материалов: PLA+, PETG, TPU.",
    image: "/images/christopher-20jordan-partner-compressed.webp",
  },
  {
    name: "Инженер по электронике",
    role: "Прошивка и управление",
    bio: "Интеграция с SpeedyBee F405 V3, настройка Betaflight, разводка управляющих пинов M5–M8.",
    image: "/images/juliette-20knowles-svp-20investments-compressed.webp",
  },
];

export function Team() {
  return (
    <section id="team" className="py-28 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <AnimateOnScroll>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal mb-6">
                Команда проекта
              </h2>
              <p className="text-muted-foreground max-w-xl text-lg">
                Студенческий коллектив, объединивший компетенции в области аэродинамики, механики и встраиваемых систем управления.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 text-[13px] font-medium tracking-wide uppercase text-accent hover:gap-4 transition-all"
            >
              Связаться с командой <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <AnimateOnScroll key={member.name} delay={index * 150}>
              <div className="group cursor-pointer">
                <div className="aspect-[4/5] bg-secondary mb-6 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 grayscale hover:grayscale-0 saturate-[0.3] hover:saturate-100"
                  />
                </div>
                <h3 className="font-medium text-xl mb-1">{member.name}</h3>
                <p className="text-[13px] text-accent uppercase tracking-wide mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
