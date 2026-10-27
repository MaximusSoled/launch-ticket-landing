import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CHECKOUT_URL } from "@/config";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sprint Execução — Marketing e comercial para clínicas" },
      {
        name: "description",
        content:
          "Em um Sprint de 2h, vamos estruturar o marketing e comercial da sua clínica, do planejamento ao faturamento previsível. 19 de novembro, online e ao vivo.",
      },
      { property: "og:title", content: "Sprint Execução — Marketing e comercial para clínicas" },
      {
        property: "og:description",
        content: "Sprint de 2h, online e ao vivo, em 19 de novembro. De R$ 97 por R$ 47,90.",
      },
    ],
  }),
  component: Index,
});

function Cta({ className = "" }: { className?: string }) {
  return (
    <a
      href={CHECKOUT_URL}
      className={`btn-gold inline-flex items-center justify-center rounded-lg px-8 py-4 text-sm font-extrabold uppercase tracking-wider ${className}`}
    >
      Garantir meu ingresso
    </a>
  );
}

function Price({ center = false }: { center?: boolean }) {
  return (
    <p className={`text-muted-foreground ${center ? "text-center" : ""}`}>
      de <span className="line-through">R$ 97</span> por{" "}
      <span className="text-gold-gradient text-2xl font-extrabold">R$ 47,90</span>
    </p>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-gold-gradient text-center font-display text-3xl font-semibold leading-tight md:text-5xl">
      {children}
    </h2>
  );
}

const alternatives = [
  ["\"Preciso de mais leads.\"", "Acredita que aumentar o volume de contatos vai gerar mais oportunidades de fechar pacientes."],
  ["\"Preciso de leads mais qualificados.\"", "Espera atrair pessoas mais preparadas para agendar e realizar um procedimento."],
  ["\"Preciso investir mais em anúncios.\"", "Aumentar o investimento parece o caminho para gerar mais demanda e movimentar a clínica."],
  ["\"Talvez eu precise trocar de agência.\"", "Se os resultados não aparecem como esperado, mudar quem cuida do marketing parece uma saída natural."],
];

const steps = [
  ["1. Defina onde sua clínica precisa chegar", "Estabeleça objetivos e prioridades para orientar as decisões de marketing e comercial."],
  ["2. Conecte a atração ao atendimento", "Organize como as ações de marketing se relacionam com a chegada dos contatos, o atendimento e o acompanhamento das oportunidades."],
  ["3. Transforme estratégia em execução", "Defina quais ações precisam ser realizadas, como organizar sua implementação e quais indicadores acompanhar para avaliar o que está funcionando."],
  ["4. Crie uma direção para tomar decisões melhores", "Em vez de agir apenas diante dos problemas que aparecem, tenha um planejamento que ajude a identificar prioridades e orientar os próximos ajustes."],
];


const schedule = [
  ["19h15", "Início"],
  ["20h15", "Intervalo"],
  ["20h20", "Retorno"],
  ["21h15", "Encerramento*"],
];

const faq: [string, string[]][] = [
  ["1. Para quem é o Sprint AZA?", ["Para médicos, donos e gestores de clínicas que desejam estruturar o marketing e o comercial de forma integrada e organizar os próximos passos para o crescimento da operação."]],
  ["2. O que vou receber ao participar?", ["Você participará de um encontro estratégico de 2 horas, ao vivo, com foco na estruturação do marketing e comercial da sua clínica, do planejamento à execução."]],
  ["3. Preciso ter uma clínica grande ou uma equipe comercial?", ["Não necessariamente. O Sprint é voltado a médicos, donos e gestores de clínicas. As estratégias poderão ser adaptadas à realidade e à estrutura de cada operação."]],
  ["4. O Sprint AZA ficará gravado?", [
    "Não. O ingresso de R$ 47,90 dá acesso apenas à participação ao vivo, sem incluir a gravação do evento.",
    "Se você quiser assistir ao conteúdo posteriormente, poderá adquirir a gravação separadamente, em formato de aulas, durante a compra do seu ingresso, pelo checkout.",
    "Assim, você poderá escolher a opção que faz mais sentido para você: participar ao vivo ou adquirir também o acesso à gravação, caso esteja disponível.",
    "Se precisar de ajuda, entre em contato com nosso time de suporte.",
  ]],
  ["5. E se eu participar e não gostar?", ["Se você assistir ao Sprint ao vivo e não gostar da experiência, poderá solicitar o reembolso em até 48 horas, conforme as condições da garantia."]],
  ["6. Quando e onde será o Sprint AZA?", ["O encontro será realizado online e ao vivo na quinta-feira, 19 de novembro de 2026, às 19h30, no horário de Brasília."]],
  ["7. Quanto custa participar?", ["O ingresso custa R$ 47,90. As formas de pagamento disponíveis serão apresentadas no checkout."]],
  ["8. O Sprint garante que minha clínica vai aumentar o faturamento?", ["Não há garantia de resultados financeiros específicos. O objetivo do Sprint é ajudar você a estruturar uma estratégia de marketing e comercial. Os resultados dependem da realidade da clínica, da execução das ações e de outros fatores do negócio."]],
];

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto mt-10 max-w-3xl divide-y divide-border border-y border-border">
      {faq.map(([q, a], i) => (
        <div key={q}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 py-5 text-left font-semibold"
            aria-expanded={open === i}
          >
            {q}
            <span className={`text-gold transition-transform ${open === i ? "rotate-45" : ""}`}>+</span>
          </button>
          {open === i && (
            <div className="space-y-3 pb-5 text-sm leading-relaxed text-muted-foreground">
              {a.map((p) => <p key={p}>{p}</p>)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function useScrollReveal() {
  const observer = useRef<IntersectionObserver | null>(null);

  return useCallback((section: HTMLDivElement | null) => {
    observer.current?.disconnect();
    observer.current = null;
    if (!section) return;

    const items = Array.from(section.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.setAttribute("data-shown", ""));
      return;
    }

    section.setAttribute("data-reveal-ready", "");

    const io = new IntersectionObserver(
      (entries) => {
        entries
          .filter((entry) => entry.isIntersecting)
          .forEach((entry, i) => {
            const el = entry.target as HTMLElement;
            el.style.transitionDelay = `${i * 110}ms`;
            el.setAttribute("data-shown", "");
            io.unobserve(el);
          });
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    );

    items.forEach((el) => io.observe(el));
    observer.current = io;
  }, []);
}

function SprintCards() {
  const revealRef = useScrollReveal();

  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-5xl">
        <H2>O que vamos estruturar juntos durante o Sprint AZA?</H2>
        <p className="mx-auto mt-6 max-w-2xl text-center leading-relaxed text-muted-foreground">
          Em 2 horas, vamos conectar os elementos essenciais para estruturar o marketing e comercial
          da sua clínica, do planejamento à execução.
        </p>

        <div ref={revealRef} className="relative mt-14">
          <span aria-hidden className="axis-line absolute inset-y-0 left-4 w-px md:left-1/2" />
          {sprintCards.map(([num, title, question, text], i) => {
            const left = i % 2 === 0;
            return (
              <div
                key={num}
                data-reveal
                className={cn(
                  "relative pl-12 md:w-1/2 md:pl-0",
                  left ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12",
                  i > 0 && "mt-8 md:mt-12"
                )}
              >
                <span
                  aria-hidden
                  className={cn(
                    "absolute left-4 top-6 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-gold/50 bg-background font-display text-sm text-gold md:top-8",
                    left ? "md:left-full" : "md:left-0"
                  )}
                >
                  {num}
                </span>
                <div className="rounded-xl border border-border bg-card p-6">
                  <p className="font-display text-xl text-gold">{title}</p>
                  <p className="mt-2 font-semibold text-foreground">{question}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <main className="relative overflow-hidden">
      <div className="bg-primary py-2 text-center text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground">
        19 de novembro | Online e ao vivo
      </div>

      {/* Hero */}
      <section className="relative px-5 pb-20 pt-14 md:pt-24">
        <div className="glow-ember pointer-events-none absolute -right-40 -top-20 h-[600px] w-[800px]" />
        <div className="relative mx-auto max-w-6xl">
          <p className="font-display text-2xl text-gold md:text-3xl">SPRINT EXECUÇÃO</p>
          <h1 className="mt-6 max-w-3xl font-display text-3xl font-semibold leading-tight md:text-5xl">
            Sua clínica tem potencial para crescer. Você só precisa ter clareza sobre o que precisa fazer
          </h1>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground md:text-lg">
            Em um Sprint de 2h, eu e você, juntos, vamos estruturar o seu marketing e comercial, do planejamento ao faturamento previsível, usando a mesma estratégia que mais 120 clínicas utilizam para bater records de faturamento
          </p>
          <div className="mt-8 flex flex-col items-start gap-3">
            <Price />
            <Cta className="w-full sm:w-auto" />
          </div>
          <ul className="mt-8 space-y-2 text-sm">
            {[
              "Para médicos, donos e gestores de clínicas",
              "Estruture o marketing e o comercial da sua clínica em conjunto",
              "Defina os próximos passos para melhorar a conversão de contatos em pacientes",
            ].map((t) => (
              <li key={t} className="flex gap-2"><span className="text-gold">✓</span>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Dobra 2 - clientes (mockup) */}
      <section className="border-y border-border bg-card/50 py-12">
        <p className="px-5 text-center text-muted-foreground">Nosso clientes que utilizam ou utilizaram a mesma estrtégia</p>
        <div className="mt-8 overflow-hidden">
          <div className="animate-marquee flex w-max gap-6">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="flex h-16 w-40 items-center justify-center rounded-lg border border-dashed border-border text-xs text-muted-foreground">
                Logo cliente
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dobra 3 */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <H2>Quando sua clínica não converte como poderia, qual costuma ser sua primeira reação?</H2>
          <div className="mx-auto mt-8 max-w-2xl space-y-4 text-center text-muted-foreground">
            <p className="text-lg text-foreground">Investir mais em tráfego. Buscar leads mais qualificados. Trocar de agência.</p>
            <p>Quando os contatos chegam, mas poucos avançam até o agendamento ou o fechamento, é natural procurar uma forma de melhorar a captação.</p>
            <p>E talvez você já tenha considerado uma ou mais destas alternativas:</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {alternatives.map(([t, d]) => (
              <div key={t} className="rounded-xl border border-border bg-card p-6">
                <p className="font-display text-xl text-gold">{t}</p>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-10 max-w-2xl space-y-4 text-center text-muted-foreground">
            <p>Nenhuma dessas decisões é necessariamente errada.</p>
            <p className="font-display text-2xl text-foreground">Mas como saber qual delas realmente precisa ser tomada na sua clínica?</p>
            <p>Antes de investir mais, mudar de estratégia ou buscar outra assessoria, existe uma pergunta que merece atenção:</p>
            <p className="rounded-xl border border-gold/40 bg-card p-6 text-lg font-semibold text-foreground">
              Você sabe exatamente em qual etapa sua clínica está perdendo oportunidades de converter contatos em pacientes?
            </p>
          </div>
        </div>
      </section>

      {/* Dobra 4 */}
      <section className="relative px-5 py-20">
        <div className="glow-ember pointer-events-none absolute -left-60 top-0 h-[600px] w-[800px]" />
        <div className="relative mx-auto max-w-3xl">
          <H2>Antes de investir mais, você precisa entender como as peças da sua operação estão conectadas.</H2>
          <div className="mt-10 space-y-5 rounded-2xl border border-border bg-card p-6 leading-relaxed text-muted-foreground md:p-10">
            <p>Ter mais contatos pode gerar novas oportunidades. Atrair pacientes mais qualificados também pode ajudar.</p>
            <p>Mas existe uma questão importante: o que acontece entre o momento em que o paciente demonstra interesse e a hora em que decide agendar um procedimento?</p>
            <p>O marketing atrai a atenção. O atendimento inicia a conversa. O comercial conduz o relacionamento. O acompanhamento ajuda a manter a oportunidade avançando.</p>
            <p className="font-semibold text-gold">Essas etapas precisam trabalhar na mesma direção.</p>
            <p>Quando cada área atua sem um planejamento integrado, fica mais difícil identificar prioridades, acompanhar o que realmente funciona e decidir onde concentrar esforços.</p>
            <p>Você pode investir em anúncios sem ter clareza sobre a capacidade de atendimento. Pode gerar contatos sem um processo comercial bem definido. Ou pode cobrar resultados sem indicadores que ajudem a entender o que precisa ser ajustado.</p>
            <p>E, sem enxergar a operação como um todo, qualquer mudança corre o risco de atacar apenas uma parte do problema.</p>
            <p className="font-semibold text-foreground">É por isso que <span className="text-gold">marketing e comercial precisam fazer parte da mesma estratégia.</span></p>
            <p>Não se trata apenas de atrair pacientes. Trata-se de planejar como a clínica vai trabalhar as oportunidades, conduzir o atendimento e acompanhar a operação para buscar melhores resultados.</p>
          </div>
        </div>
      </section>

      {/* Dobra 5 */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <H2>Sua clínica precisa de uma estratégia que conecte marketing, comercial e crescimento.</H2>
          <div className="mx-auto mt-8 max-w-2xl space-y-4 text-center text-muted-foreground">
            <p>Não basta definir ações de marketing de um lado e cobrar resultados comerciais do outro.</p>
            <p>É preciso organizar como essas áreas vão trabalhar juntas, com objetivos claros, prioridades definidas e ações alinhadas à realidade da sua clínica.</p>
            <p>É isso que um planejamento integrado permite estruturar.</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {steps.map(([t, d]) => (
              <div key={t} className="rounded-xl border border-border bg-card p-6">
                <p className="font-display text-xl text-gold">{t}</p>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-16 max-w-2xl text-center">
            <h3 className="font-display text-2xl font-semibold md:text-4xl">E como colocar tudo isso em prática na sua clínica?</h3>
            <p className="mt-5 text-muted-foreground">No Sprint clínica capilar, vamos trabalhar juntos para estruturar uma estratégia de marketing e comercial, do planejamento à execução, considerando os desafios e os objetivos de crescimento da sua clínica.</p>
            <p className="mt-5 font-semibold text-gold">Duas horas para organizar as ideias, estruturar prioridades e definir os próximos passos da sua operação.</p>
          </div>
        </div>
      </section>

      {/* Dobra 5b - cards animados no scroll */}
      <SprintCards />

      {/* Dobra 6 - resultados (conteúdo pendente) */}
      <section className="px-5 py-12">
        <div className="mx-auto max-w-5xl rounded-2xl border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
          Resultados dos clientes — conteúdo a ser enviado
        </div>
      </section>

      {/* Dobra 7 - cronograma */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-center text-sm font-bold uppercase tracking-widest text-gold">19 de Novembro | 19h15 até às 21h15</p>
          <div className="mt-4"><H2>Cronograma</H2></div>
          <p className="mt-4 text-center text-muted-foreground">O Sprint seguirá esse cronograma:</p>
          <div className="mt-10 grid gap-3 sm:grid-cols-4">
            {schedule.map(([h, l]) => (
              <div key={h} className="rounded-xl border border-border bg-card p-5 text-center">
                <p className="font-display text-2xl text-gold">{h}</p>
                <p className="mt-1 text-sm">{l}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-muted-foreground">
            *Considere encerrar mais tarde, caso os participantes peçam para nos aprofundarmos em algum ponto. Porém, o conteúdo combinado será entregue dentro do horário programado.
          </p>
        </div>
      </section>

      {/* Dobra 8 - oferta */}
      <section id="oferta" className="relative px-5 py-20">
        <div className="glow-ember pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[900px] -translate-x-1/2 -translate-y-1/2" />
        <div className="relative mx-auto max-w-md rounded-2xl border border-gold/50 bg-card p-8 text-center shadow-2xl">
          <p className="font-display text-4xl text-gold-gradient font-semibold">SPRINT</p>
          <p className="mt-2 text-sm text-muted-foreground">19 de novembro | Online e ao vivo</p>
          <p className="mt-1 text-sm font-semibold">Marketing e comercial para clínicas</p>
          <div className="my-6 h-px bg-border" />
          <p className="text-left text-sm font-semibold">Você terá:</p>
          <ul className="mt-3 space-y-2 text-left text-sm text-muted-foreground">
            {["2 horas de estruturação estratégica", "Planejamento de marketing e comercial", "Direção do planejamento à execução"].map((t) => (
              <li key={t} className="flex gap-2"><span className="text-gold">✓</span>{t}</li>
            ))}
          </ul>
          <div className="my-6 h-px bg-border" />
          <p className="text-sm text-muted-foreground">Seu ingresso por apenas:</p>
          <p className="mt-2 text-sm text-muted-foreground">de <span className="line-through">R$ 97</span> por</p>
          <p className="text-gold-gradient font-display text-5xl font-bold">R$ 47,90</p>
          <Cta className="mt-6 w-full" />
        </div>
      </section>

      {/* Dobra 9 - garantia */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-8 text-center">
          <h3 className="font-display text-2xl font-semibold text-gold md:text-3xl">Sua satisfação ou seu dinheiro de volta.</h3>
          <p className="mt-4 text-muted-foreground">Participe do Sprint ao vivo. Se não gostar, solicite o reembolso em até 48 horas.</p>
        </div>
      </section>

      {/* Dobra 10 - FAQ */}
      <section className="px-5 py-20">
        <H2>Perguntas frequentes</H2>
        <Faq />
      </section>

      {/* Rodapé */}
      <footer className="border-t border-border px-5 py-10 text-center text-xs text-muted-foreground">
        <p>© 2026 AZA ACELERACAO MEDICA LTDA. Todos os direitos reservados.</p>
        <p className="mt-1">CNPJ: 59.342.676/0001-0</p>
        <p className="mt-3"><a href="#" className="hover:text-gold">Política de Privacidade</a> | <a href="#" className="hover:text-gold">Termos de Uso</a></p>
        <p className="mx-auto mt-6 max-w-2xl">Este evento tem caráter educacional e estratégico. A participação no Sprint não garante resultados financeiros específicos, que dependem de fatores como a realidade de cada clínica e a execução das estratégias propostas.</p>
      </footer>
    </main>
  );
}
