const footerLinks = {
  navigation: [
    { label: "О нас", href: "#about" },
    { label: "Команда", href: "#team" },
    { label: "Портфель", href: "#portfolio" },
    { label: "Карьера", href: "#careers" },
  ],
  connect: [
    { label: "LinkedIn", href: "#" },
    { label: "Контакты", href: "#contact" },
  ],
  legal: [
    { label: "Условия", href: "#terms" },
    { label: "Конфиденциальность", href: "#privacy" },
    { label: "Раскрытие информации", href: "#disclosures" },
  ],
};

export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-20 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-serif text-xl font-medium">Northgate</span>
            </div>
            <p className="text-sm text-primary-foreground/60 max-w-xs leading-relaxed">
              Готовы обсудить ваш следующий этап развития? Мы всегда рады
              познакомиться с выдающимися командами, формирующими будущее.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] font-medium uppercase tracking-widest mb-6 text-primary-foreground/40">
              Навигация
            </h4>
            <ul className="space-y-4">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-medium uppercase tracking-widest mb-6 text-primary-foreground/40">
              Связаться
            </h4>
            <ul className="space-y-4">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-medium uppercase tracking-widest mb-6 text-primary-foreground/40">
              Документы
            </h4>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-primary-foreground/40">
            {new Date().getFullYear()} Northgate Capital LP. Все права защищены.
          </p>
          <p className="text-[13px] text-primary-foreground/40 tracking-wide">
            Москва • Санкт-Петербург • Лондон
          </p>
        </div>
      </div>
    </footer>
  );
}
