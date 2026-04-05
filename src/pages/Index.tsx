import { useState } from "react";
import Icon from "@/components/ui/icon";

const TRAILER_IMAGE = "https://cdn.poehali.dev/projects/3cc89e95-1f3f-4090-a1bd-c9fa3173b437/files/943738d5-e46d-423d-bb98-074fc262e3d9.jpg";

const NAV_LINKS = [
  { label: "О компании", href: "#about" },
  { label: "Каталог", href: "#catalog" },
  { label: "Преимущества", href: "#advantages" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

const PRODUCTS = [
  { id: 1, name: "Бортовой прицеп БТ-7", category: "bortovoy", load: "7 т", length: "6 м", price: "от 450 000 ₽", tag: "Хит продаж" },
  { id: 2, name: "Рефрижератор РФ-10", category: "refrizherator", load: "10 т", length: "8 м", price: "от 1 200 000 ₽", tag: null },
  { id: 3, name: "Полуприцеп ПП-20", category: "polupritsep", load: "20 т", length: "13.6 м", price: "от 1 800 000 ₽", tag: "Новинка" },
  { id: 4, name: "Самосвал СВ-15", category: "samosval", load: "15 т", length: "7 м", price: "от 980 000 ₽", tag: null },
  { id: 5, name: "Цистерна ЦС-12", category: "tsisterna", load: "12 т", length: "8.5 м", price: "от 1 400 000 ₽", tag: null },
  { id: 6, name: "Тентовый ТН-5", category: "tentovyy", load: "5 т", length: "5.5 м", price: "от 320 000 ₽", tag: "Акция" },
];

const CATEGORIES = [
  { id: "all", label: "Все" },
  { id: "bortovoy", label: "Бортовые" },
  { id: "refrizherator", label: "Рефрижераторы" },
  { id: "polupritsep", label: "Полуприцепы" },
  { id: "samosval", label: "Самосвалы" },
  { id: "tsisterna", label: "Цистерны" },
  { id: "tentovyy", label: "Тентовые" },
];

const ADVANTAGES = [
  { icon: "Shield", title: "Гарантия на технику", desc: "Честная гарантия — обговариваем условия при покупке" },
  { icon: "Wrench", title: "Помощь после продажи", desc: "Если что-то пошло не так — звоните, разберёмся" },
  { icon: "Truck", title: "Доставка по договорённости", desc: "Привезём своим транспортом или организуем перевозку" },
  { icon: "BadgeCheck", title: "Честная цена", desc: "Без накруток и скрытых платежей" },
];

const STATS = [
  { value: "50+", label: "Довольных клиентов" },
  { value: "5+", label: "Лет работы" },
  { value: "100+", label: "Прицепов продано" },
  { value: "всегда", label: "На связи" },
];

const REVIEWS = [
  { name: "Алексей Морозов", company: "ТрансЛогистик", rating: 5, text: "Купили три полуприцепа — качество отличное. Все документы оформили быстро, доставка точно в срок. Рекомендую всем коллегам по цеху.", avatar: "АМ" },
  { name: "Сергей Кузнецов", company: "АгроТранс", rating: 5, text: "Сотрудничаем уже 4 года. Надёжная компания, честные цены, отличный сервис. Недавно купили ещё два самосвала — довольны.", avatar: "СК" },
  { name: "Ирина Петрова", company: "СтройГруз", rating: 5, text: "Очень понравилось отношение к клиентам. Помогли подобрать нужную модель под наши задачи. Техника работает без нареканий.", avatar: "ИП" },
  { name: "Дмитрий Волков", company: "ВолгаКарго", rating: 4, text: "Хорошее соотношение цены и качества. Небольшая задержка с доставкой, но менеджер держал в курсе — спасибо за честность.", avatar: "ДВ" },
  { name: "Павел Иванов", company: "ЮгТранс", rating: 5, text: "Брали бортовые прицепы для зерновозов. Всё чётко: договор, оплата, доставка. Уже заказали ещё партию.", avatar: "ПИ" },
  { name: "Наталья Орлова", company: "НордЛогис", rating: 5, text: "Первый раз заказывали рефрижератор — очень переживали, но всё прошло идеально. Теперь только здесь.", avatar: "НО" },
];

const COMPANY_ADVANTAGES = [
  { icon: "Handshake", title: "Работаем честно", desc: "Рассказываем всё как есть — плюсы и минусы каждой модели" },
  { icon: "Phone", title: "Один звонок", desc: "Отвечаем лично, без колл-центров и скриптов" },
  { icon: "Clock", title: "Без лишней волокиты", desc: "Договор, оплата, передача — всё просто и быстро" },
  { icon: "Star", title: "Подберём под задачу", desc: "Поможем выбрать то, что действительно нужно" },
];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", comment: "" });
  const [formSent, setFormSent] = useState(false);

  const filtered = activeCategory === "all"
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="min-h-screen" style={{ background: "#F4F6F9", fontFamily: "'IBM Plex Sans', sans-serif" }}>

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 shadow-lg" style={{ background: "#1A2A4A" }}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded flex items-center justify-center" style={{ background: "#E67E22" }}>
              <Icon name="Truck" size={20} className="text-white" />
            </div>
            <div>
              <span className="text-white font-bold text-lg tracking-wide" style={{ fontFamily: "'Oswald', sans-serif" }}>ПРИЦЕП</span>
              <span style={{ color: "#E67E22", fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 18 }}>ГРУП</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <a key={link.href} href={link.href} className="text-sm font-medium transition-colors duration-200 hover:text-white" style={{ color: "#8A9BB5" }}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+78001234567" className="flex items-center gap-2" style={{ color: "#FFFFFF" }}>
              <Icon name="Phone" size={16} style={{ color: "#E67E22" }} />
              <span className="font-semibold text-sm">8 800 123-45-67</span>
            </a>
            <a href="#form" className="px-4 py-2 rounded text-sm font-bold transition-all duration-200 hover:opacity-90" style={{ background: "#E67E22", color: "#FFFFFF", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.04em" }}>
              ЗАЯВКА
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 pb-4 border-t" style={{ borderColor: "#243660", background: "#1A2A4A" }}>
            {NAV_LINKS.map(link => (
              <a key={link.href} href={link.href} className="block py-2 text-sm" style={{ color: "#8A9BB5" }} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="tel:+78001234567" className="block py-2 font-semibold text-sm" style={{ color: "#E67E22" }}>8 800 123-45-67</a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="pt-16 min-h-screen flex items-center relative overflow-hidden" style={{ background: "#1A2A4A" }}>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 60px, #fff 60px, #fff 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, #fff 60px, #fff 61px)" }} />
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-20" style={{ background: "radial-gradient(ellipse at right, #E67E22, transparent 70%)" }} />

        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12" style={{ background: "#E67E22" }} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#E67E22" }}>Продажа и аренда</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>
              ПРИЦЕПЫ ДЛЯ<br />
              <span style={{ color: "#E67E22" }}>ВАШЕГО ДЕЛА</span>
            </h1>
            <p className="text-lg mb-10 leading-relaxed" style={{ color: "#8A9BB5" }}>
              Продаём и сдаём в аренду прицепы и полуприцепы. Небольшой выбор, нормальные цены, отвечаем за то, что продаём.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#catalog" className="px-8 py-4 rounded font-bold text-sm tracking-widest uppercase transition-all hover:opacity-90" style={{ background: "#E67E22", color: "#FFFFFF", fontFamily: "'Oswald', sans-serif" }}>
                СМОТРЕТЬ КАТАЛОГ
              </a>
              <a href="#form" className="px-8 py-4 rounded font-bold text-sm tracking-widest uppercase border-2 transition-all" style={{ borderColor: "#FFFFFF", color: "#FFFFFF", fontFamily: "'Oswald', sans-serif" }}>
                НАПИСАТЬ НАМ
              </a>
            </div>
            <div className="flex gap-10 mt-12">
              {[{ val: "50+", lbl: "Клиентов" }, { val: "5+ лет", lbl: "На рынке" }, { val: "всегда", lbl: "На связи" }].map(s => (
                <div key={s.val}>
                  <div className="text-2xl font-bold text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>{s.val}</div>
                  <div className="text-xs" style={{ color: "#8A9BB5" }}>{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute -inset-4 rounded-2xl opacity-30" style={{ background: "linear-gradient(135deg, #E67E22, transparent)" }} />
            <img src={TRAILER_IMAGE} alt="Прицеп" className="relative rounded-xl w-full object-cover" style={{ height: 420, boxShadow: "0 24px 80px rgba(0,0,0,0.4)" }} />
            <div className="absolute bottom-6 left-6 right-6 rounded-lg px-4 py-3 flex items-center gap-3" style={{ background: "rgba(26,42,74,0.92)", backdropFilter: "blur(8px)", border: "1px solid rgba(230,126,34,0.3)" }}>
              <Icon name="CheckCircle" size={20} style={{ color: "#E67E22" }} />
              <span className="text-white text-sm font-medium">Более 500 единиц техники в наличии</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={24} style={{ color: "#E67E22" }} />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12" style={{ background: "#E67E22" }} />
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#E67E22" }}>О нас</span>
              </div>
              <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: "'Oswald', sans-serif", color: "#1A2A4A" }}>
                НЕБОЛЬШОЙ БИЗНЕС —<br />ЛИЧНЫЙ ПОДХОД
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#4A5568" }}>
                Занимаемся прицепами уже несколько лет. Не огромная фирма, зато знаем каждую позицию в каталоге и честно говорим, что подойдёт, а что нет.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#4A5568" }}>
                Работаем без колл-центров: звонишь — отвечает живой человек, который сам разбирается в технике.
              </p>
              <a href="#contacts" className="inline-flex items-center gap-2 px-6 py-3 rounded font-bold text-sm tracking-wide uppercase transition-all hover:opacity-90" style={{ background: "#1A2A4A", color: "#FFFFFF", fontFamily: "'Oswald', sans-serif" }}>
                Подробнее <Icon name="ArrowRight" size={16} />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {COMPANY_ADVANTAGES.map((item) => (
                <div key={item.title} className="p-6 rounded-xl hover-lift" style={{ background: "#F4F6F9", border: "1px solid #E8EDF3" }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: "#1A2A4A" }}>
                    <Icon name={item.icon} size={20} fallback="Star" style={{ color: "#E67E22" }} />
                  </div>
                  <div className="font-bold text-sm mb-1" style={{ fontFamily: "'Oswald', sans-serif", color: "#1A2A4A" }}>{item.title}</div>
                  <div className="text-xs leading-relaxed" style={{ color: "#8A9BB5" }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CATALOG */}
      <section id="catalog" className="py-24" style={{ background: "#F4F6F9" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12" style={{ background: "#E67E22" }} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#E67E22" }}>Каталог</span>
              <div className="h-px w-12" style={{ background: "#E67E22" }} />
            </div>
            <h2 className="text-4xl font-bold" style={{ fontFamily: "'Oswald', sans-serif", color: "#1A2A4A" }}>ЧТО ЕСТЬ В НАЛИЧИИ</h2>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {CATEGORIES.map(cat => (
              <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200" style={{ background: activeCategory === cat.id ? "#E67E22" : "#FFFFFF", color: activeCategory === cat.id ? "#FFFFFF" : "#1A2A4A", border: `1px solid ${activeCategory === cat.id ? "#E67E22" : "#E8EDF3"}` }}>
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product) => (
              <div key={product.id} className="bg-white rounded-xl overflow-hidden hover-lift" style={{ border: "1px solid #E8EDF3" }}>
                <div className="relative h-48 flex items-center justify-center" style={{ background: "#1A2A4A" }}>
                  <Icon name="Truck" size={64} style={{ color: "#243660" }} />
                  {product.tag && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded text-xs font-bold" style={{ background: "#E67E22", color: "#FFFFFF", fontFamily: "'Oswald', sans-serif" }}>
                      {product.tag}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-3" style={{ fontFamily: "'Oswald', sans-serif", color: "#1A2A4A" }}>{product.name}</h3>
                  <div className="flex gap-4 mb-4">
                    <div className="text-xs" style={{ color: "#8A9BB5" }}>
                      <span className="block font-semibold text-sm" style={{ color: "#1A2A4A" }}>{product.load}</span>
                      Грузоподъём.
                    </div>
                    <div className="w-px" style={{ background: "#E8EDF3" }} />
                    <div className="text-xs" style={{ color: "#8A9BB5" }}>
                      <span className="block font-semibold text-sm" style={{ color: "#1A2A4A" }}>{product.length}</span>
                      Длина
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg" style={{ color: "#E67E22", fontFamily: "'Oswald', sans-serif" }}>{product.price}</span>
                    <button className="px-4 py-2 rounded text-xs font-bold tracking-wide uppercase transition-all hover:opacity-80" style={{ background: "#1A2A4A", color: "#FFFFFF", fontFamily: "'Oswald', sans-serif" }}>
                      Узнать цену
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS & ADVANTAGES */}
      <section id="advantages" style={{ background: "#1A2A4A" }}>
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-5xl font-bold mb-2" style={{ fontFamily: "'Oswald', sans-serif", color: "#E67E22" }}>{stat.value}</div>
                <div className="text-sm" style={{ color: "#8A9BB5" }}>{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="h-px mb-20 opacity-20" style={{ background: "#FFFFFF" }} />

          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12" style={{ background: "#E67E22" }} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#E67E22" }}>Почему мы</span>
              <div className="h-px w-12" style={{ background: "#E67E22" }} />
            </div>
            <h2 className="text-4xl font-bold text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>ПОЧЕМУ ВЫБИРАЮТ НАС</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {ADVANTAGES.map((adv) => (
              <div key={adv.title} className="p-6 rounded-xl text-center hover-lift" style={{ background: "#243660", border: "1px solid rgba(255,255,255,0.05)" }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(230,126,34,0.15)" }}>
                  <Icon name={adv.icon} size={24} fallback="Star" style={{ color: "#E67E22" }} />
                </div>
                <h3 className="font-bold text-base mb-2 text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>{adv.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "#8A9BB5" }}>{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12" style={{ background: "#E67E22" }} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#E67E22" }}>Отзывы</span>
              <div className="h-px w-12" style={{ background: "#E67E22" }} />
            </div>
            <h2 className="text-4xl font-bold mb-2" style={{ fontFamily: "'Oswald', sans-serif", color: "#1A2A4A" }}>ЧТО ГОВОРЯТ КЛИЕНТЫ</h2>
            <div className="flex items-center justify-center gap-1 mt-3">
              {[1,2,3,4,5].map(i => <Icon key={i} name="Star" size={20} style={{ color: "#E67E22" }} />)}
              <span className="text-sm font-semibold ml-2" style={{ color: "#1A2A4A" }}>4.9 из 5</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((review) => (
              <div key={review.name} className="p-6 rounded-xl hover-lift" style={{ background: "#F4F6F9", border: "1px solid #E8EDF3" }}>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Icon key={i} name="Star" size={14} style={{ color: "#E67E22" }} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "#4A5568" }}>«{review.text}»</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0" style={{ background: "#1A2A4A", fontFamily: "'Oswald', sans-serif" }}>
                    {review.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: "#1A2A4A" }}>{review.name}</div>
                    <div className="text-xs" style={{ color: "#8A9BB5" }}>{review.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="form" className="py-24" style={{ background: "#F4F6F9" }}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="rounded-2xl overflow-hidden shadow-xl" style={{ background: "#1A2A4A" }}>
            <div className="p-10 md:p-14">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12" style={{ background: "#E67E22" }} />
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#E67E22" }}>Оставить заявку</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: "'Oswald', sans-serif" }}>НАПИШИТЕ НАМ</h2>
              <p className="text-sm mb-8" style={{ color: "#8A9BB5" }}>Оставьте контакты и коротко опишите, что нужно — свяжемся и всё обсудим.</p>

              {formSent ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(230,126,34,0.15)" }}>
                    <Icon name="CheckCircle" size={32} style={{ color: "#E67E22" }} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>Получили заявку!</h3>
                  <p style={{ color: "#8A9BB5" }}>Скоро свяжемся с вами.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium mb-2" style={{ color: "#8A9BB5" }}>Как вас зовут</label>
                      <input type="text" required placeholder="Иван" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-lg text-sm outline-none" style={{ background: "#243660", border: "1px solid rgba(255,255,255,0.1)", color: "#FFFFFF" }} />
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-2" style={{ color: "#8A9BB5" }}>Телефон или мессенджер</label>
                      <input type="tel" required placeholder="+7 (999) 000-00-00" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-lg text-sm outline-none" style={{ background: "#243660", border: "1px solid rgba(255,255,255,0.1)", color: "#FFFFFF" }} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-2" style={{ color: "#8A9BB5" }}>Что вас интересует</label>
                    <textarea rows={3} placeholder="Например: нужен бортовой прицеп на 5 тонн, или просто хочу узнать цены..." value={formData.comment} onChange={e => setFormData({ ...formData, comment: e.target.value })} className="w-full px-4 py-3 rounded-lg text-sm outline-none resize-none" style={{ background: "#243660", border: "1px solid rgba(255,255,255,0.1)", color: "#FFFFFF" }} />
                  </div>
                  <button type="submit" className="w-full py-4 rounded-lg font-bold text-sm tracking-widest uppercase transition-all hover:opacity-90" style={{ background: "#E67E22", color: "#FFFFFF", fontFamily: "'Oswald', sans-serif" }}>
                    ОТПРАВИТЬ
                  </button>
                  <p className="text-center text-xs" style={{ color: "#8A9BB5" }}>Нажимая кнопку, вы соглашаетесь с обработкой персональных данных</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12" style={{ background: "#E67E22" }} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#E67E22" }}>Контакты</span>
              <div className="h-px w-12" style={{ background: "#E67E22" }} />
            </div>
            <h2 className="text-4xl font-bold" style={{ fontFamily: "'Oswald', sans-serif", color: "#1A2A4A" }}>КАК НАС НАЙТИ</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { icon: "Phone", label: "Телефон", value: "8 800 123-45-67", sub: "Бесплатно по России", href: "tel:+78001234567" },
              { icon: "Mail", label: "Email", value: "info@pritsepgrup.ru", sub: "Ответим в течение часа", href: "mailto:info@pritsepgrup.ru" },
              { icon: "MapPin", label: "Адрес", value: "г. Москва, ул. Промышленная, 14", sub: "Пн–Пт: 9:00–18:00", href: "#" },
            ].map((c) => (
              <a key={c.label} href={c.href} className="p-6 rounded-xl flex items-start gap-4 hover-lift" style={{ background: "#F4F6F9", border: "1px solid #E8EDF3", textDecoration: "none" }}>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "#1A2A4A" }}>
                  <Icon name={c.icon} size={20} style={{ color: "#E67E22" }} />
                </div>
                <div>
                  <div className="text-xs font-medium mb-1" style={{ color: "#8A9BB5" }}>{c.label}</div>
                  <div className="font-bold text-sm mb-1" style={{ color: "#1A2A4A", fontFamily: "'Oswald', sans-serif" }}>{c.value}</div>
                  <div className="text-xs" style={{ color: "#8A9BB5" }}>{c.sub}</div>
                </div>
              </a>
            ))}
          </div>

          <div className="rounded-xl overflow-hidden" style={{ height: 320, border: "1px solid #E8EDF3" }}>
            <iframe src="https://yandex.ru/map-widget/v1/?ll=37.6173%2C55.7558&z=14&pt=37.6173%2C55.7558%2Cpm2rdl" width="100%" height="100%" frameBorder="0" title="Карта" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#111D35" }}>
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded flex items-center justify-center" style={{ background: "#E67E22" }}>
                  <Icon name="Truck" size={20} className="text-white" />
                </div>
                <div>
                  <span className="text-white font-bold text-lg" style={{ fontFamily: "'Oswald', sans-serif" }}>ПРИЦЕП</span>
                  <span style={{ color: "#E67E22", fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 18 }}>ГРУП</span>
                </div>
              </div>
              <p className="text-xs leading-relaxed mb-5" style={{ color: "#8A9BB5" }}>Российский производитель прицепного оборудования с 2012 года.</p>
              <div className="flex gap-3">
                {[{ icon: "Youtube", href: "#" }, { icon: "Send", href: "#" }, { icon: "Phone", href: "tel:+78001234567" }].map(s => (
                  <a key={s.icon} href={s.href} className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:opacity-80" style={{ background: "#1A2A4A" }}>
                    <Icon name={s.icon} size={16} style={{ color: "#E67E22" }} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs font-bold tracking-widest uppercase mb-4 text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>Навигация</div>
              {NAV_LINKS.map(link => (
                <a key={link.href} href={link.href} className="block text-sm py-1 transition-colors hover:text-white" style={{ color: "#8A9BB5" }}>{link.label}</a>
              ))}
            </div>

            <div>
              <div className="text-xs font-bold tracking-widest uppercase mb-4 text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>Каталог</div>
              {["Бортовые прицепы", "Рефрижераторы", "Полуприцепы", "Самосвалы", "Цистерны"].map(cat => (
                <a key={cat} href="#catalog" className="block text-sm py-1 transition-colors hover:text-white" style={{ color: "#8A9BB5" }}>{cat}</a>
              ))}
            </div>

            <div>
              <div className="text-xs font-bold tracking-widest uppercase mb-4 text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>Контакты</div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={14} style={{ color: "#E67E22" }} />
                  <a href="tel:+78001234567" className="text-sm" style={{ color: "#8A9BB5" }}>8 800 123-45-67</a>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={14} style={{ color: "#E67E22" }} />
                  <a href="mailto:info@pritsepgrup.ru" className="text-sm" style={{ color: "#8A9BB5" }}>info@pritsepgrup.ru</a>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="MapPin" size={14} style={{ color: "#E67E22" }} className="mt-0.5 flex-shrink-0" />
                  <span className="text-sm" style={{ color: "#8A9BB5" }}>г. Москва, ул. Промышленная, 14</span>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px mb-6" style={{ background: "rgba(255,255,255,0.08)" }} />
          <div className="flex flex-col md:flex-row items-center justify-between gap-2">
            <span className="text-xs" style={{ color: "#8A9BB5" }}>© 2024 ПрицепГруп</span>
            <div className="flex gap-6">
              <a href="#" className="text-xs hover:text-white transition-colors" style={{ color: "#8A9BB5" }}>Политика конфиденциальности</a>
              <a href="#" className="text-xs hover:text-white transition-colors" style={{ color: "#8A9BB5" }}>Публичная оферта</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;