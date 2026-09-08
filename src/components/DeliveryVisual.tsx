import type { Locale } from "@/lib/content";

type Experience = "access" | "qikserve" | "gavea" | "leadup" | "cefet";
export default function DeliveryVisual({
  experience,
  lang,
  anchor,
}: {
  experience: Experience;
  lang: Locale;
  anchor?: string;
}) {
  const pt = lang === "pt";
  const titles = {
    access: pt
      ? "Um menu. Produtos conectados."
      : "One menu. Connected products.",
    qikserve: pt
      ? "Dois canais. A mesma experiência de pedido."
      : "Two channels. One ordering experience.",
    gavea: pt
      ? "Duas experiências. A mesma fonte de verdade."
      : "Two experiences. One source of truth.",
    leadup: pt
      ? "Da direção de produto à aplicação."
      : "From product direction to application.",
    cefet: pt
      ? "O software também precisa de uma base."
      : "Software needs a foundation, too.",
  };
  return (
    <figure
      id={anchor}
      className={`delivery delivery-${experience}`}
      data-reveal="product"
      aria-labelledby={`delivery-${experience}`}
    >
      <figcaption id={`delivery-${experience}`}>
        <span className="micro">
          {pt ? "POR DENTRO DA ENTREGA" : "INSIDE THE DELIVERY"}
        </span>
        <strong>{titles[experience]}</strong>
      </figcaption>
      {experience === "gavea" && (
        <>
          <div className="shared-clients">
            <div className="client">
              <span className="device device-phone" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <span>Mobile</span>
            </div>
            <div className="client">
              <span className="device device-desktop" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <span>Web / Electron</span>
            </div>
          </div>
          <div className="shared-branches" aria-hidden="true">
            <span>↕</span>
            <span>↕</span>
          </div>
          <div className="shared-core">
            <span className="micro">
              {pt ? "FONTE ÚNICA DE VERDADE" : "SINGLE SOURCE OF TRUTH"}
            </span>
            <strong>
              {pt ? "Biblioteca compartilhada / BFF" : "Shared library / BFF"}
            </strong>
            <span>
              {pt
                ? "Estado das aplicações + consumo do backend"
                : "Application state + backend access"}
            </span>
          </div>
          <div className="delivery-arrow" aria-hidden="true">
            ↕
          </div>
          <div className="backend-node">Backend</div>
          <div className="delivery-result">
            <strong>
              {pt
                ? "Mobile refatorado de ponta a ponta"
                : "Mobile refactored end to end"}
            </strong>
            <span>
              {pt
                ? "Estabilidade · Performance · Segurança"
                : "Stability · Performance · Security"}
            </span>
            <small>
              {pt
                ? "Construído sem assistência de IA."
                : "Built without AI assistance."}
            </small>
          </div>
        </>
      )}
      {experience === "access" && (
        <>
          <div className="event-flow">
            <div className="flow-node">
              <span className="menu-symbol" aria-hidden="true">
                ☷
              </span>
              <strong>{pt ? "Menu Access" : "Access menu"}</strong>
              <small>
                {pt ? "Gerenciador do grupo" : "Group menu manager"}
              </small>
            </div>
            <span className="flow-connection" aria-hidden="true">
              →
            </span>
            <div className="flow-node queue-node">
              <span className="queue-symbol" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <strong>Amazon SQS</strong>
              <small>
                {pt ? "Eventos assíncronos" : "Asynchronous events"}
              </small>
            </div>
            <span className="flow-connection" aria-hidden="true">
              →
            </span>
            <div className="flow-node">
              <span className="pos-symbol" aria-hidden="true">
                ⌘
              </span>
              <strong>{pt ? "Integrações POS" : "POS integrations"}</strong>
              <small>{pt ? "Conexão do cliente" : "Customer connection"}</small>
            </div>
          </div>
          <p className="ordering-destination">
            Online Ordering <span aria-hidden="true">·</span> Kiosk Ordering
          </p>
          <div className="delivery-result">
            <strong>
              {pt
                ? "Conectar o POS do cliente com menos esforço"
                : "Make the customer’s POS easier to connect"}
            </strong>
            <span>
              {pt
                ? "Contratos entre serviços · Retry · Idempotência"
                : "Service contracts · Retries · Idempotency"}
            </span>
          </div>
          <div className="ai-delivery">
            <span className="micro">
              {pt ? "COMO A SQUAD ENTREGA" : "HOW THE SQUAD DELIVERS"}
            </span>
            <strong>Full stack + Devin AI</strong>
            <p>
              {pt
                ? "IA de ponta a ponta no desenvolvimento, evoluindo ferramentas e abordagens junto à plataforma."
                : "AI throughout development, evolving our tools and approaches alongside the platform."}
            </p>
          </div>
        </>
      )}
      {experience === "qikserve" && (
        <>
          <div className="product-platforms ordering-platforms">
            <div>
              <span className="device device-desktop" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <strong>Online Ordering</strong>
              <small>{pt ? "Pedidos online" : "Online orders"}</small>
            </div>
            <div>
              <span className="device device-kiosk" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <strong>Kiosk Ordering</strong>
              <small>{pt ? "Autoatendimento" : "Self-service orders"}</small>
            </div>
          </div>
          <div className="delivery-result">
            <strong>
              {pt
                ? "Squad full stack, dos canais ao backend"
                : "A full-stack squad, from channels to backend"}
            </strong>
            <span>
              {pt
                ? "Desenvolvimento · Arquitetura · Liderança técnica"
                : "Development · Architecture · Technical leadership"}
            </span>
          </div>
          <a className="continuity-link" href="#access">
            {pt
              ? "Mesmos produtos, novo capítulo na The Access Group"
              : "Same products, a new chapter at The Access Group"}{" "}
            ↑
          </a>
        </>
      )}
      {experience === "leadup" && (
        <>
          <div className="build-direction">
            <span className="micro">
              {pt ? "DIREÇÃO DE PRODUTO" : "PRODUCT DIRECTION"}
            </span>
            <strong>
              {pt
                ? "Estratégia → Arquitetura → Entrega"
                : "Strategy → Architecture → Delivery"}
            </strong>
          </div>
          <div className="product-platforms">
            <div>
              <span className="device device-desktop" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <strong>Web</strong>
              <small>React · Node.js</small>
            </div>
            <div>
              <span className="device device-phone" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <strong>Mobile</strong>
              <small>React Native</small>
            </div>
          </div>
          <div className="delivery-result">
            <strong>
              {pt
                ? "Liderança no ciclo completo dos produtos"
                : "Leadership across the full product lifecycle"}
            </strong>
            <span>
              {pt
                ? "Planejamento técnico · Desenvolvimento · Mentoria"
                : "Technical planning · Development · Mentoring"}
            </span>
          </div>
        </>
      )}
      {experience === "cefet" && (
        <>
          <div className="foundation-stack">
            <div>
              <span className="micro">{pt ? "SOFTWARE" : "SOFTWARE"}</span>
              <strong>{pt ? "Sistemas internos" : "Internal systems"}</strong>
            </div>
            <div>
              <span className="micro">{pt ? "OPERAÇÃO" : "OPERATIONS"}</span>
              <strong>
                {pt ? "Infraestrutura de TI" : "IT infrastructure"}
              </strong>
              <small>
                {pt
                  ? "Redes · Data centers · Segurança"
                  : "Networks · Data centers · Security"}
              </small>
            </div>
          </div>
          <div className="delivery-result">
            <strong>
              {pt
                ? "Construir e manter funcionando"
                : "Build it and keep it running"}
            </strong>
            <span>
              {pt
                ? "Usabilidade · Manutenção · Continuidade operacional"
                : "Usability · Maintenance · Operational continuity"}
            </span>
          </div>
        </>
      )}
      <p className="delivery-note">
        {pt
          ? "Representação conceitual da minha atuação."
          : "A conceptual view of my contribution."}
      </p>
    </figure>
  );
}
