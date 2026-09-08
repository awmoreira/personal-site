import type { Locale } from "./content";

export type VentureId = "pinubi" | "bechess" | "berdy";
type Venture = {
  id: VentureId;
  name: string;
  href: string;
  category: string;
  promise: string;
  problem: string;
  delivery: string;
  decision: string;
};
export const productChapter: Record<
  Locale,
  {
    label: string;
    title: string;
    intro: string;
    role: string;
    problem: string;
    delivery: string;
    decision: string;
    visit: string;
    illustration: string;
    products: Venture[];
  }
> = {
  en: {
    label: "INDEPENDENT PRODUCTS",
    title: "An idea becomes useful when it reaches someone.",
    intro:
      "I founded and built Pinubi, BeChess and Berdy from their conception. Three different problems, with the same responsibility: connect the product idea to the experience and the engineering that makes it work.",
    role: "Founder · Product Engineer",
    problem: "The problem",
    delivery: "What I built",
    decision: "The product choice",
    visit: "Explore product",
    illustration: "Illustration of the product experience",
    products: [
      {
        id: "pinubi",
        name: "Pinubi",
        href: "https://pinubi.com/pt",
        category: "CREATORS · DISCOVERY",
        promise: "Recommendations that live beyond the post.",
        problem:
          "A creator’s place recommendations get scattered across posts. Their audience needs a way to find them, and the creator needs to understand what attracts interest.",
        delivery:
          "A searchable map of recommendations and a creator dashboard showing searches, places opened and route clicks.",
        decision:
          "Let the audience explore through a shared link, without installing an app. Connect discovery to useful feedback for the creator.",
      },
      {
        id: "bechess",
        name: "BeChess",
        href: "https://www.bechess.com.br",
        category: "CHESS · AI COACHING",
        promise: "Turn a finished game into the next lesson.",
        problem:
          "A chess engine can identify a mistake without helping a player understand the plan behind a better move.",
        delivery:
          "Game import, move-by-move analysis and an AI coach explaining key moments and training priorities in Portuguese.",
        decision:
          "Keep players where they already play. Bring games from Chess.com or Lichess into a learning experience that explains the reasoning.",
      },
      {
        id: "berdy",
        name: "Berdy",
        href: "https://berdy.com.br",
        category: "B2B SAAS · CUSTOMER SUPPORT",
        promise:
          "Every conversation has an owner. Context stays with the team.",
        problem:
          "Accounting teams share customer support across individual WhatsApp conversations. Responsibility becomes unclear and context follows the person.",
        delivery:
          "A shared inbox using the official WhatsApp API, with conversation assignment, shared history and a view of what needs a response.",
        decision:
          "Customers keep using WhatsApp. The product changes how the team coordinates behind the conversation.",
      },
    ],
  },
  pt: {
    label: "PRODUTOS INDEPENDENTES",
    title: "Uma ideia se torna útil quando chega a alguém.",
    intro:
      "Fundei e construí Pinubi, BeChess e Berdy desde a concepção. Três problemas diferentes, com a mesma responsabilidade: conectar a ideia de produto à experiência e à engenharia que a faz funcionar.",
    role: "Fundador · Product Engineer",
    problem: "O problema",
    delivery: "O que construí",
    decision: "A escolha de produto",
    visit: "Conhecer produto",
    illustration: "Ilustração da experiência do produto",
    products: [
      {
        id: "pinubi",
        name: "Pinubi",
        href: "https://pinubi.com/pt",
        category: "CREATORS · DESCOBERTA",
        promise: "Recomendações que continuam depois do post.",
        problem:
          "As recomendações de lugares de um creator ficam espalhadas em posts. A audiência precisa encontrá-las, e o creator precisa entender o que desperta interesse.",
        delivery:
          "Um mapa pesquisável de recomendações e um painel para o creator acompanhar buscas, lugares abertos e cliques em rotas.",
        decision:
          "Deixar a audiência explorar por um link, sem instalar um app. Conectar descoberta a informação útil para o creator.",
      },
      {
        id: "bechess",
        name: "BeChess",
        href: "https://www.bechess.com.br",
        category: "XADREZ · COACH COM IA",
        promise: "A partida termina. O aprendizado continua.",
        problem:
          "Uma engine de xadrez pode apontar um erro sem ajudar o jogador a entender o plano por trás de um lance melhor.",
        delivery:
          "Importação de partidas, análise lance a lance e um coach com IA que explica momentos importantes e prioridades de treino em português.",
        decision:
          "Manter o jogador onde ele já joga. Trazer partidas do Chess.com ou Lichess para uma experiência de aprendizado que explica o raciocínio.",
      },
      {
        id: "berdy",
        name: "Berdy",
        href: "https://berdy.com.br",
        category: "SAAS B2B · ATENDIMENTO",
        promise:
          "Cada conversa tem um responsável. O contexto fica com a equipe.",
        problem:
          "Escritórios contábeis dividem o atendimento entre conversas individuais no WhatsApp. A responsabilidade fica incerta e o contexto acompanha a pessoa.",
        delivery:
          "Uma caixa de entrada compartilhada com a API oficial do WhatsApp, atribuição de conversas, histórico para a equipe e visão do que espera resposta.",
        decision:
          "O cliente continua no WhatsApp. O produto transforma como a equipe se organiza por trás da conversa.",
      },
    ],
  },
};
