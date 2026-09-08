import type { Locale } from "@/lib/content";
import { productChapter, type VentureId } from "@/lib/products";

function ProductScene({ id, lang }: { id: VentureId; lang: Locale }) {
  const pt = lang === "pt";
  return (
    <div className={`product-scene scene-${id}`} aria-hidden="true">
      {id === "pinubi" ? (
        <>
          <div className="map-grid">
            <div className="map-river" />
            <span className="map-pin pin-one">●</span>
            <span className="map-pin pin-two">●</span>
            <span className="map-pin pin-three">●</span>
          </div>
          <div className="scene-search">
            <span>⌕</span>
            {pt
              ? "Encontre sua próxima descoberta"
              : "Find your next discovery"}
          </div>
          <div className="scene-note">
            <span className="micro">
              {pt ? "DO MAPA AO CREATOR" : "FROM MAP TO CREATOR"}
            </span>
            <strong>
              {pt
                ? "O que sua audiência procura?"
                : "What is your audience looking for?"}
            </strong>
            <div className="interest-bars">
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
        </>
      ) : id === "bechess" ? (
        <>
          <div className="mini-board">
            {Array.from({ length: 64 }, (_, i) => (
              <span
                className={
                  (Math.floor(i / 8) + (i % 8)) % 2
                    ? "dark-square"
                    : "light-square"
                }
                key={i}
              >
                {
                  (
                    {
                      4: "♚",
                      12: "♟",
                      21: "♞",
                      35: "♘",
                      51: "♙",
                      60: "♔",
                    } as Record<number, string>
                  )[i]
                }
              </span>
            ))}
          </div>
          <div className="chess-explanation">
            <span className="micro">
              {pt ? "DO LANCE AO PLANO" : "FROM MOVE TO PLAN"}
            </span>
            <strong>{pt ? "Entenda o porquê." : "Understand the why."}</strong>
            <span>
              {pt
                ? "Análise → Explicação → Treino"
                : "Analysis → Explanation → Practice"}
            </span>
          </div>
        </>
      ) : (
        <>
          <div className="inbox-preview">
            <div className="inbox-top">
              <span>WhatsApp</span>
              <span className="inbox-dot" />
            </div>
            <div className="message-preview">
              <span className="avatar-dot">C</span>
              <div>
                <strong>
                  {pt ? "Uma dúvida do cliente" : "A customer’s question"}
                </strong>
                <span>
                  {pt ? "Aguardando atendimento" : "Waiting for a response"}
                </span>
              </div>
            </div>
            <div className="inbox-route">↓</div>
            <div className="assigned-preview">
              <span>✓</span>
              <div>
                <strong>
                  {pt ? "Responsável definido" : "Assigned to a teammate"}
                </strong>
                <span>
                  {pt
                    ? "Histórico compartilhado"
                    : "Shared conversation history"}
                </span>
              </div>
            </div>
          </div>
          <span className="scene-bottom micro">
            {pt
              ? "UMA CONVERSA. CONTEXTO COMPLETO."
              : "ONE CONVERSATION. FULL CONTEXT."}
          </span>
        </>
      )}
    </div>
  );
}

export default function ProductChapter({ lang }: { lang: Locale }) {
  const t = productChapter[lang];
  return (
    <li
      className="chapter founder-chapter"
      id="products"
      data-anchor
      data-chapter
    >
      <a className="year" href="#products" data-reveal="date">
        <span>{lang === "pt" ? "AGORA" : "NOW"}</span>
        <span className="year-caption">
          {lang === "pt" ? "CRIANDO" : "BUILDING"}
        </span>
      </a>
      <span className="node" data-reveal="node" aria-hidden="true" />
      <div className="chapter-content">
        <div data-reveal="chapter">
          <p className="micro period">{t.label}</p>
          <h2 className="founder-title">{t.title}</h2>
          <p className="founder-role micro">{t.role}</p>
          <p className="summary">{t.intro}</p>
        </div>
        <div className="venture-list">
          {t.products.map((product, i) => (
            <article
              className={`venture venture-${product.id}`}
              key={product.id}
              id={product.id}
              data-anchor
              data-reveal="chapter"
              aria-labelledby={`title-${product.id}`}
            >
              <div className="venture-heading">
                <span className="micro venture-number">0{i + 1}</span>
                <h3 id={`title-${product.id}`}>{product.name}</h3>
                <span className="micro venture-category">
                  {product.category}
                </span>
              </div>
              <div className="venture-layout">
                <figure className="venture-figure">
                  <ProductScene id={product.id} lang={lang} />
                  <figcaption>{t.illustration}</figcaption>
                </figure>
                <div className="venture-copy">
                  <h4>{product.promise}</h4>
                  <p>{product.delivery}</p>
                  <a className="venture-visit micro" href={product.href}>
                    {t.visit}
                    <span aria-hidden="true">↗</span>
                    <span className="sr-only"> — {product.name}</span>
                  </a>
                </div>
              </div>
              <details id={`details-${product.id}`} className="venture-details">
                <summary>
                  <span>
                    {lang === "pt"
                      ? "Por trás do produto"
                      : "Behind the product"}
                  </span>
                  <span className="plus" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className="venture-reasoning">
                  <div>
                    <p className="micro">{t.problem}</p>
                    <p>{product.problem}</p>
                  </div>
                  <div>
                    <p className="micro">{t.decision}</p>
                    <p>{product.decision}</p>
                  </div>
                </div>
              </details>
            </article>
          ))}
        </div>
        <div className="product-practice" data-reveal="chapter">
          <p className="micro accent">
            {lang === "pt" ? "COMO TRABALHO" : "HOW I WORK"}
          </p>
          <p>
            {lang === "pt"
              ? "Entender o problema. Escolher o que vale construir. Entregar de ponta a ponta. Uso IA no processo de desenvolvimento, com a mesma responsabilidade pelas decisões, pela qualidade e pela experiência final."
              : "Understand the problem. Choose what is worth building. Deliver end to end. I use AI throughout development while staying responsible for the decisions, the quality and the final experience."}
          </p>
          <a href="#access" className="micro">
            {lang === "pt"
              ? "Essa prática também vive nas equipes que lidero"
              : "The same practice shapes the teams I lead"}{" "}
            ↓
          </a>
        </div>
      </div>
    </li>
  );
}
