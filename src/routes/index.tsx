import { createFileRoute } from "@tanstack/react-router";
import { TechBackground } from "@/components/TechBackground";
import { Scene3D } from "@/components/Scene3D";
import { GlobalCGIBackground } from "@/components/GlobalCGIBackground";
import { Card3D } from "@/components/Card3D";
import {
  Dumbbell, Bike, Flower2, Music4, Hand,
  Sparkles, Baby, Leaf, ShoppingBag, Scissors,
  MapPin, ChevronDown, ShieldCheck,
  Volleyball, Mountain, Trophy, Boxes
} from "lucide-react";
import gymHero from "@/assets/gym-hero.jpg";
import boxingImg from "@/assets/training-boxing.jpg";
import weightsImg from "@/assets/training-weights.jpg";
import spinningImg from "@/assets/training-spinning.jpg";
import pilatesImg from "@/assets/training-pilates.jpg";
import structureImg from "@/assets/structure-premium.jpg";
import cgiCore from "@/assets/cgi-core.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ATHLOS FIT — Ecossistema Completo de Performance" },
      { name: "description", content: "Mais que uma academia. Um ecossistema completo de performance. Musculação, Boxe, Spinning, Pilates, Dança, Sala de Massagem e Área Kids." },
      { property: "og:title", content: "ATHLOS FIT — Performance & Bem-estar" },
      { property: "og:description", content: "Treinos, estrutura premium, planos e expansão — tudo em um só lugar." },
    ],
  }),
  component: Home,
});

const treinos = [
  { icon: Dumbbell, label: "Musculação", img: weightsImg },
  { icon: Hand, label: "Boxe", img: boxingImg },
  { icon: Bike, label: "Spinning", img: spinningImg },
  { icon: Flower2, label: "Pilates", img: pilatesImg },
  { icon: Music4, label: "Dança", img: gymHero },
];

const estruturas = [
  { icon: Sparkles, title: "Sala de Massagem", text: "Espaço dedicado ao relaxamento com cadeiras de massagem modernas, ideal para recuperação muscular e bem-estar." },
  { icon: Baby, title: "Área Kids", text: "Espaço seguro e pensado para filhos, netos e enteados — permitindo que os alunos treinem com tranquilidade." },
];

const ecossistema = [
  { icon: Leaf, title: "Natural Athlos Fit", handle: "@naturalathlosfit", url: "https://instagram.com/naturalathlosfit" },
  { icon: ShoppingBag, title: "Athlos Fit Store", handle: "@athlos_fit_store", url: "https://instagram.com/athlos_fit_store" },
  { icon: Scissors, title: "Dom Griffman", handle: "@domgriffman", url: "https://instagram.com/domgriffman" },
  { icon: Dumbbell, title: "Academia", handle: "@academiaathlosfit", url: "https://instagram.com/academiaathlosfit" },
];

const planos = [
  { name: "Mensal", price: "R$ 159,90", note: "+ matrícula R$ 50" },
  { name: "Recorrente", price: "R$ 139,90", note: "por mês", featured: true },
  { name: "Anual", price: "R$ 109,90", note: "12x sem juros" },
  { name: "60+", price: "R$ 79,90", note: "plano sênior" },
];

const expansao = [
  { icon: Boxes, label: "Mais Equipamentos" },
  { icon: Mountain, label: "Novas Áreas" },
  { icon: Volleyball, label: "Futevôlei" },
  { icon: Trophy, label: "Beach Tennis" },
  { icon: Volleyball, label: "Vôlei" },
  { icon: Hand, label: "UFC / Artes Marciais" },
];

const faqs = [
  { q: "A academia funciona 24 horas?", a: "Sim. A ATHLOS FIT possui funcionamento estendido durante a semana, oferecendo horários amplos para melhor atender todos os alunos." },
  { q: "Posso fazer o plano online?", a: "Não. Todos os planos da ATHLOS FIT são realizados exclusivamente de forma presencial na recepção da academia." },
  { q: "O que está incluso nos planos?", a: "Todos os planos incluem acesso completo à academia, musculação, modalidades (boxe, spinning, pilates e dança), além da estrutura interna como sala de massagem com cadeiras de massagem e área kids." },
  { q: "A academia tem área kids?", a: "Sim. Contamos com uma área kids destinada a filhos e netos, permitindo mais tranquilidade para quem treina." },
  { q: "Tem sala de massagem?", a: "Sim. A ATHLOS FIT possui uma sala com cadeiras de massagem, ideal para relaxamento e recuperação muscular." },
  { q: "Tem plano família?", a: "Não. Todos os planos são individuais." },
  { q: "Tem aula experimental?", a: "Não trabalhamos com aulas experimentais." },
  { q: "A academia tem natação?", a: "Não. A ATHLOS FIT não oferece natação." },
  { q: "Aceita TotalPass e Gympass?", a: "Sim. TotalPass: disponível a partir do plano TP2. Gympass: disponível a partir do plano Silver." },
  { q: "Como funciona a avaliação física?", a: "A avaliação física custa R$ 40,00 e deve ser agendada presencialmente na recepção da academia." },
  { q: "Tem personal trainer?", a: "Sim. Os valores são definidos por cada profissional. A academia também conta com professores e estagiários para auxiliar nos treinos." },
  { q: "Qual o valor da diária?", a: "A diária custa R$ 30,00." },
  { q: "Os planos dão acesso a tudo?", a: "Sim. Todos os planos oferecem acesso completo a toda a estrutura e modalidades da academia." },
];

const horarios = [
  {
    nome: "CLÓVIS",
    modalidades: "Funcional / Spinning / Abdominal / Pilates",
    blocos: [
      { dias: "Segunda • Quarta • Sexta", aulas: ["06:00 — Funcional", "07:00 — Spinning", "21:00 — Abdominal"] },
      { dias: "Terça • Quinta", aulas: ["06:00 — Pilates", "07:00 — Pilates"] },
    ],
  },
  {
    nome: "MATHEUS VERNECK",
    modalidades: "Dança",
    blocos: [
      { dias: "Segunda • Quarta • Sexta", aulas: ["07:00 — Dança"] },
      { dias: "Terça • Quinta", aulas: ["08:00 — Dança"] },
    ],
  },
  {
    nome: "JENNYFER",
    modalidades: "Dança",
    blocos: [{ dias: "Segunda • Quarta • Sexta", aulas: ["09:00 — Dança"] }],
  },
  {
    nome: "HENRIQUE",
    modalidades: "Boxe",
    blocos: [
      { dias: "Segunda • Quarta • Sexta", aulas: ["08:00 às 09:00 — Boxe"] },
      { dias: "Terça • Quinta", aulas: ["20:00 às 21:00 — Boxe"] },
    ],
  },
  {
    nome: "ROSEANE",
    modalidades: "Funcional / Abdominal / Step",
    blocos: [
      { dias: "Segunda • Quarta • Sexta", aulas: ["19:00 — Funcional"] },
      { dias: "Terça • Quinta", aulas: ["17:00 — Funcional + Abdominal", "18:00 — Step"] },
    ],
  },
  {
    nome: "FLÁVIA",
    modalidades: "Alongamento / Zumba / FitDance",
    blocos: [
      { dias: "Segunda • Quarta • Sexta", aulas: ["17:30 — Alongamento", "18:00 — Zumba", "20:00 — FitDance"] },
      { dias: "Terça • Quinta", aulas: ["19:00 — FitDance"] },
    ],
  },
  {
    nome: "ANDERSON",
    modalidades: "Spinning (30min) / Ritmos",
    blocos: [
      { dias: "Segunda • Quarta • Sexta", aulas: ["18:00 às 22:00 (a cada 30 minutos)"] },
      { dias: "Terça • Quinta (Manhã)", aulas: ["07:00 às 09:00 (a cada 30 minutos)"] },
      { dias: "Terça • Quinta (Noite)", aulas: ["18:00 às 21:00 (a cada 30 minutos)", "21:00 — Aula de Ritmos"] },
    ],
  },
];

function Home() {
  return (
    <main className="relative" style={{ background: "transparent" }}>
      <GlobalCGIBackground />
      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
        <img
          src={gymHero}
          alt="Interior da academia Athlos Fit"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.04 0 0 / 0.55) 0%, oklch(0.04 0 0 / 0.9) 100%)" }} />
        <Scene3D variant="hero" />
        <TechBackground />
        <div className="grid-bg" />
        <div className="scanline" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 60%, oklch(0.30 0.20 25 / 0.25), transparent 70%)" }} />

        <div className="container-x relative z-10 px-5 text-center">
          <div className="hero-line mx-auto mb-6 h-px bg-gradient-to-r from-transparent via-primary to-transparent" style={{ width: 120 }} />
          <h1 className="hero-title font-display text-[clamp(2.5rem,9vw,7rem)] font-black leading-none tracking-[0.18em]">
            <span className="text-foreground">ATHLOS </span>
            <span className="text-gradient">FIT</span>
          </h1>
          <div className="hero-line mx-auto mt-6 h-px bg-gradient-to-r from-transparent via-primary to-transparent" style={{ width: 120 }} />

          <p className="fade-up mx-auto mt-8 max-w-2xl text-balance text-sm uppercase tracking-[0.3em] text-muted-foreground sm:text-base" style={{ animationDelay: "0.8s" }}>
            Mais que uma academia.
            <br className="hidden sm:block" />
            <span className="text-foreground"> Um ecossistema completo de performance.</span>
          </p>

          <div className="fade-up mt-10 flex flex-wrap items-center justify-center gap-3" style={{ animationDelay: "1.1s" }}>
            <a href="#academia" className="btn-hero primary">Conhecer a academia</a>
            <a href="#planos" className="btn-hero">Ver planos</a>
          </div>

        </div>
      </section>

      {/* ACADEMIA */}
      <section id="academia" className="section relative">
        <div className="grid-bg opacity-40" />
        <div
          className="absolute inset-0 opacity-30 mix-blend-screen"
          style={{ backgroundImage: `url(${cgiCore})`, backgroundSize: "cover", backgroundPosition: "center" }}
          aria-hidden
        />
        <div className="container-x relative">
          <div className="text-center">
            <span className="eyebrow">A Academia</span>
            <h2 className="section-title">O que tem na <span className="text-gradient">Athlos</span></h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Treinos completos, estrutura premium e ambiente preparado para a sua melhor versão.
            </p>
          </div>

          {/* Treinos */}
          <div className="mt-16">
            <h3 className="mb-6 flex items-center gap-3 text-lg uppercase tracking-[0.25em] text-muted-foreground">
              <Dumbbell className="h-5 w-5 text-primary" /> Treinos
            </h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {treinos.map(({ icon: Icon, label, img }) => (
                <Card3D key={label} className="!p-0 overflow-hidden">
                  <div className="relative h-44 w-full overflow-hidden">
                    <img
                      src={img}
                      alt={label}
                      loading="lazy"
                      className="h-full w-full object-cover opacity-60 transition-transform duration-700 hover:scale-110"
                      width={1024}
                      height={1280}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4 text-center">
                      <Icon className="mx-auto h-7 w-7 text-primary drop-shadow-[0_0_12px_oklch(0.58_0.24_25)]" strokeWidth={1.5} />
                      <p className="mt-2 font-display text-xs uppercase tracking-[0.25em] text-foreground">{label}</p>
                    </div>
                  </div>
                </Card3D>
              ))}
            </div>
          </div>

          {/* Estrutura */}
          <div className="mt-20">
            <h3 className="mb-6 flex items-center gap-3 text-lg uppercase tracking-[0.25em] text-muted-foreground">
              <Sparkles className="h-5 w-5 text-primary" /> Estrutura Premium
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              <Card3D className="!p-0 overflow-hidden md:col-span-2">
                <div className="grid gap-0 md:grid-cols-2">
                  <div className="relative h-64 md:h-auto">
                    <video
                      src="/videos/structure.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      poster={structureImg}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/20 to-background md:via-transparent" />
                  </div>
                  <div className="space-y-6 p-8">
                    {estruturas.map(({ icon: Icon, title, text }) => (
                      <div key={title} className="flex items-start gap-4">
                        <div className="rounded-xl bg-primary/15 p-3 ring-1 ring-primary/30">
                          <Icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                        </div>
                        <div>
                          <h4 className="font-display text-lg uppercase tracking-[0.18em]">{title}</h4>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card3D>
            </div>
          </div>
        </div>
      </section>

      {/* CGI BANNER */}
      <section className="relative overflow-hidden">
        <div className="relative h-[70vh] min-h-[480px] w-full">
          <Scene3D variant="ambient" />
          <img src={cgiCore} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-screen pointer-events-none" loading="lazy" width={1600} height={900} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
          <div className="container-x relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
            <p className="eyebrow justify-center">Performance Engine</p>
            <h2 className="section-title mx-auto max-w-3xl">
              <span className="text-gradient">Lugar de recomeço.</span>
            </h2>
          </div>
        </div>
      </section>

      {/* ECOSSISTEMA */}
      <section className="section relative">
        <div className="container-x relative">
          <div className="text-center">
            <span className="eyebrow">Ecossistema Athlos</span>
            <h2 className="section-title">Estrutura <span className="text-gradient">interna</span></h2>
            <p className="mx-auto max-w-xl text-muted-foreground">
              Clique em cada card para acessar o Instagram oficial.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ecossistema.map(({ icon: Icon, title, handle, url }) => (
              <Card3D key={title} href={url} className="group">
                <div className="flex h-40 flex-col items-center justify-center text-center">
                  <Icon className="h-10 w-10 text-primary transition-transform group-hover:scale-110 drop-shadow-[0_0_15px_oklch(0.58_0.24_25)]" strokeWidth={1.4} />
                  <h4 className="mt-4 font-display text-base uppercase tracking-[0.18em]">{title}</h4>
                  <p className="mt-1 text-xs text-muted-foreground">{handle}</p>
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* PLANOS */}
      <section id="planos" className="section relative">
        <div className="grid-bg opacity-40" />
        <div className="absolute inset-0">
          <TechBackground />
        </div>
        <div className="container-x relative">
          <div className="text-center">
            <span className="eyebrow">Investimento</span>
            <h2 className="section-title">Escolha seu <span className="text-gradient">plano</span></h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {planos.map((p) => (
              <Card3D key={p.name} className={`plan-card ${p.featured ? "featured" : ""}`}>
                <div className="flex h-full flex-col">
                  <p className="font-display text-xs uppercase tracking-[0.3em] text-primary">{p.name}</p>
                  <p className="price mt-4 text-gradient">{p.price}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{p.note}</p>
                  {p.featured && (
                    <span className="mt-4 inline-block w-fit rounded-full bg-primary/15 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-primary">
                      Recomendado
                    </span>
                  )}
                </div>
              </Card3D>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-2xl rounded-xl border border-primary/40 bg-primary/10 p-4 text-center text-sm">
            <span className="font-semibold text-primary">Atenção:</span>{" "}
            Os planos são realizados exclusivamente de forma presencial na recepção da academia.
          </p>
        </div>
      </section>

      {/* EXPANSÃO */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0">
          <TechBackground />
        </div>
        <img src={cgiCore} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-25" loading="lazy" width={1600} height={900} />
        <div className="container-x relative">
          <div className="text-center">
            <span className="eyebrow">Em constante evolução</span>
            <h2 className="section-title">A <span className="text-gradient">expansão</span> Athlos</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              A Athlos está em constante evolução para entregar o máximo de performance.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {expansao.map(({ icon: Icon, label }) => (
              <Card3D key={label} className="text-center">
                <Icon className="mx-auto h-8 w-8 text-primary drop-shadow-[0_0_12px_oklch(0.58_0.24_25)]" strokeWidth={1.4} />
                <p className="mt-3 text-xs uppercase tracking-[0.18em]">{label}</p>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* HORÁRIOS DAS AULAS */}
      <section className="section relative">
        <div className="container-x relative">
          <div className="text-center">
            <span className="eyebrow">📍 Athlos Fit</span>
            <h2 className="section-title">Horários das <span className="text-gradient">aulas</span></h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Confira a grade completa por professor e modalidade.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {horarios.map((p) => (
              <Card3D key={p.nome}>
                <div className="flex h-full flex-col">
                  <h3 className="font-display text-lg uppercase tracking-[0.2em] text-gradient">{p.nome}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">{p.modalidades}</p>
                  <div className="mt-5 space-y-4">
                    {p.blocos.map((b, i) => (
                      <div key={i} className="rounded-lg border border-primary/20 bg-primary/5 p-3">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">{b.dias}</p>
                        <ul className="mt-2 space-y-1">
                          {b.aulas.map((a) => (
                            <li key={a} className="text-sm text-foreground/90">{a}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      <section className="section relative">
        <div className="container-x">
          <div className="text-center">
            <span className="eyebrow">Como chegar</span>
            <h2 className="section-title">Onde <span className="text-gradient">estamos</span></h2>
            <p className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              Estr. Santa Bárbara, 87 — Miguel Couto, Belford Roxo
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
            <div className="aspect-[16/9] w-full" style={{ filter: "invert(0.92) hue-rotate(180deg) saturate(0.8) brightness(0.9)" }}>
              <iframe
                title="Mapa Athlos Fit"
                src="https://www.google.com/maps?q=Estrada+Santa+Barbara+87+Miguel+Couto+Belford+Roxo&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section relative">
        <div className="container-x max-w-3xl">
          <div className="text-center">
            <span className="eyebrow">Dúvidas frequentes</span>
            <h2 className="section-title"><span className="text-gradient">FAQ</span></h2>
          </div>
          <div className="mt-10 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="faq-item">
                <summary>{f.q}</summary>
                <div className="faq-body">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-border py-10 text-center">
        <div className="container-x px-5">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-muted-foreground">
            ATHLOS <span className="text-gradient">FIT</span>
          </p>
          <p className="mt-4 inline-flex items-center gap-2 text-xs text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-primary" />
            Sistema protegido e criptografado — desenvolvido por Studio Veluva.
          </p>
        </div>
      </footer>

      {/* WhatsApp */}
      <a
        href="https://wa.me/5521994414710"
        target="_blank"
        rel="noreferrer"
        aria-label="Fale no WhatsApp"
        className="whatsapp-fab"
      >
        <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
          <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.99 2.722.99.817 0 2.15-.515 2.434-1.32.13-.4.13-.74.07-.93-.085-.32-.4-.39-.673-.51-.27-.115-1.594-.79-1.892-.79zM16.005 26.69a10.6 10.6 0 0 1-5.42-1.488l-3.787 1.21 1.232-3.665A10.6 10.6 0 0 1 5.4 16.07c0-5.85 4.755-10.605 10.605-10.605S26.61 10.22 26.61 16.07s-4.755 10.62-10.605 10.62zm0-23.39C8.97 3.3 3.3 8.97 3.3 16.07c0 2.43.673 4.787 1.948 6.83L3 30l7.32-2.193a12.74 12.74 0 0 0 5.685 1.345c7.035 0 12.705-5.67 12.705-12.705S23.04 3.3 16.005 3.3z"/>
        </svg>
      </a>
    </main>
  );
}
