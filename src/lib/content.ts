export type Locale = "en" | "pt";
export const site = "https://personal-site-six-sandy.vercel.app";
export const profile = {
  name: "Allan Winckler",
  fullName: "Allan Winckler Moreira",
  email: "awmoreira@gmail.com",
  linkedin: "https://www.linkedin.com/in/awmoreira/",
  github: "https://github.com/awmoreira",
};
export const locales: Locale[] = ["en", "pt"];
export const isLocale = (value: string): value is Locale =>
  locales.includes(value as Locale);
export const facts = [
  {
    id: "access",
    year: "2024",
    dates: {
      en: "SEP 2024 — PRESENT · AFTER THE ACQUISITION",
      pt: "SET 2024 — AGORA · APÓS A AQUISIÇÃO",
    },
    company: "The Access Group",
    role: "Senior Software Engineer · Tech Lead & Architect",
    initials: "A",
    tags: ["React", "TypeScript", "Java / Spring Boot", "Amazon SQS"],
  },
  {
    id: "qikserve",
    year: "2024",
    dates: {
      en: "FEB — SEP 2024 · BEFORE THE ACQUISITION",
      pt: "FEV — SET 2024 · ANTES DA AQUISIÇÃO",
    },
    company: "QikServe",
    role: "Senior Software Engineer · Tech Lead & Architect",
    initials: "Q",
    tags: [
      "Online Ordering",
      "Kiosk Ordering",
      "Full stack",
      "Squad leadership",
    ],
  },
  {
    id: "gavea",
    year: "2021",
    dates: { en: "NOV 2021 — NOV 2023", pt: "NOV 2021 — NOV 2023" },
    company: "Gavea Tech",
    role: "Senior Software Engineer",
    initials: "G",
    tags: ["React", "React Native", "Electron", "BFF", "Shared state"],
  },
  {
    id: "leadup",
    year: "2019",
    dates: { en: "AUG 2019 — SEP 2021", pt: "AGO 2019 — SET 2021" },
    company: "Lead Up",
    role: "CTO",
    initials: "L",
    tags: ["React", "React Native", "Node.js", "Technical leadership"],
  },
  {
    id: "cefet",
    year: "2011",
    dates: { en: "FEB 2011 — MAY 2022", pt: "FEV 2011 — MAI 2022" },
    company: "CEFET-RJ",
    role: "Technology Information Technician",
    initials: "C",
    tags: [],
  },
] as const;
export type Product = {
  id: string;
  name: string;
  context: string;
  description: string;
  contribution: string;
  href?: string;
};
type Story = {
  products?: Product[];
  summary: string;
  impact: string;
  details: string[];
  education?: string;
};
type Copy = {
  journey: string;
  contact: string;
  cv: string;
  skip: string;
  now: string;
  formerly: string;
  location: string;
  eyebrow: string;
  headline: string;
  intro: string;
  explore: string;
  portrait: string;
  photoCaption: string;
  impact: string;
  contribution: string;
  closeContribution: string;
  stories: Record<(typeof facts)[number]["id"], Story>;
  education: string;
  closingTitle: string;
  closing: string;
  contactTitle: string;
  contactBody: string;
  copy: string;
  copied: string;
  copyFailed: string;
  back: string;
  footer: string;
  description: string;
  journeyNote: string;
};
export const content: Record<Locale, Copy> = {
  en: {
    journey: "Journey",
    contact: "Contact",
    cv: "Resume",
    skip: "Skip to content",
    now: "NOW",
    formerly: "FORMERLY",
    location: "PORTO ALEGRE, BRAZIL",
    eyebrow: "PRODUCT ENGINEER · FOUNDER",
    headline: "I turn real problems into products.",
    intro:
      "I connect product thinking, user experience and full-stack engineering to take ideas into production. With 15+ years building software, I lead a squad at The Access Group and create independent products from their conception. AI is part of how I build; ownership stays with me.",
    explore: "Explore my journey",
    portrait:
      "Allan Winckler in New York, with the Statue of Liberty in the background",
    photoCaption: "PRODUCT · ENGINEERING · AI",
    impact: "WHAT I HELPED CHANGE",
    contribution: "Explore my contribution",
    closeContribution: "Close details",
    education: "ALONG THE WAY",
    stories: {
      access: {
        products: [
          {
            id: "menu-updates",
            name: "Connected ordering",
            context: "Online Ordering · Kiosk Ordering",
            description: "Continuing the same products after the acquisition.",
            contribution:
              "Consolidation, shared architectures, integrations and AI-assisted full-stack delivery.",
          },
        ],
        summary:
          "After the acquisition, I continued leading the same full-stack squad and working on Online Ordering and Kiosk Ordering. The scope evolved toward the group’s priorities: consolidating solutions, unifying architectures and connecting its products.",
        impact:
          "Designed push-based menu integration using an Access menu manager, Amazon SQS and our POS integrations. This unifies the solution and makes it easier for customers to connect their POS to our ordering products.",
        details: [
          "Lead a full-stack squad of four, connecting frontend and backend delivery across the same ordering products.",
          "Define service contracts, retries and idempotency for push-based menu integration.",
          "Apply AI end to end in the development process with Devin AI, evolving our tools and approaches alongside their platform.",
        ],
      },
      qikserve: {
        products: [
          {
            id: "ordering-products",
            name: "Online Ordering & Kiosk Ordering",
            context: "Hospitality · Full stack",
            description: "Two ordering channels, supported by the same squad.",
            contribution:
              "Full-stack development and technical leadership across both products.",
          },
        ],
        summary:
          "Joined QikServe to work on Online Ordering and Kiosk Ordering, combining full-stack development with squad leadership. My work connected the customer-facing experiences to the backend services supporting both products.",
        impact:
          "Led technical delivery across online and self-service ordering. After QikServe joined The Access Group in September 2024, I continued with the same products and squad under the group’s consolidation strategy.",
        details: [
          "Worked across frontend and backend on Online Ordering and Kiosk Ordering.",
          "Combined implementation, architectural decisions, code review and support for the squad.",
        ],
      },
      gavea: {
        products: [
          {
            id: "frontend-platform",
            name: "One shared foundation. Two applications.",
            context: "Shared library / BFF · Mobile + Web / Electron",
            description:
              "Created a shared library/BFF as the source of truth for application state and a consistent way for mobile and web/Electron to consume the backend.",
            contribution:
              "Refactored the mobile application end to end into a more stable, performant and secure version. Both deliveries were built without AI assistance.",
          },
        ],
        summary:
          "At Gavea, I worked on the foundation connecting mobile and web/Electron. My central contribution was a shared library/BFF, alongside an end-to-end refactor of the mobile application.",
        impact:
          "Created a shared source of truth for application state and backend consumption across mobile and web/Electron. Refactored the mobile application end to end for greater stability, performance and security, without AI assistance.",
        details: [
          "Created a shared library/BFF to centralize application state and backend access across both applications.",
          "Refactored the mobile application end to end, addressing stability, performance and security.",
          "Built reusable React components and a Storybook design system to support interface consistency.",
        ],
      },
      leadup: {
        products: [
          {
            id: "web-mobile",
            name: "Web and mobile products",
            context: "Product development · Technical leadership",
            description:
              "Parallel product tracks needed technical direction and a team able to take applications through the full development cycle.",
            contribution:
              "As CTO, I led architecture and delivery with React, React Native and Node.js, connecting product planning to engineering.",
          },
        ],
        summary:
          "As CTO, I directed technical strategy and architecture across parallel product development tracks. I led the full development cycle of web and mobile applications, working with React, React Native and Node.js. It was also a role in building a team: mentoring engineers and introducing processes that supported sustainable delivery.",
        impact:
          "Introduced Scrum practices to improve delivery predictability and team alignment, while keeping architecture and engineering quality central to product development.",
        details: [
          "Connected product direction to technical planning across multiple development tracks.",
          "Led web and mobile implementation from initial decisions through the delivery cycle.",
          "Mentored engineers in clean code, maintainable architecture and collaborative delivery.",
        ],
      },
      cefet: {
        summary:
          "My foundations were built around systems that needed to keep working. At CEFET-RJ, I managed IT operations, critical infrastructure and software initiatives. I also built internal systems, bringing usability and long-term maintainability into the same conversation as networks, data centers and security.",
        impact:
          "Developed a lasting concern for reliability, operational continuity and the people who depend on the systems we build.",
        details: [],
        education:
          "Master’s in Management Systems of Quality, with a focus on Information Systems · Federal Fluminense University · 2011–2013.",
      },
    },
    closingTitle: "The thread through it all: care for what we build.",
    closing:
      "Interfaces, distributed services or a team finding its rhythm. I bring the same attention to clarity, quality and the next person who will use or maintain the work.",
    contactTitle: "Let’s talk about what’s next.",
    contactBody:
      "Building a product or looking for a Product Engineer who can own the journey from problem to delivery? I’d be glad to hear about your team.",
    copy: "Copy email",
    copied: "Email copied",
    copyFailed: "Select the email address above to copy it.",
    back: "Back to top",
    footer: "A little of my story. Built with care.",
    description:
      "Allan Winckler — Product Engineer & Founder. Creator of Pinubi, BeChess and Berdy. Product thinking, full-stack engineering and AI, from conception to production.",
    journeyNote: "A FEW CHAPTERS, FROM NOW TO THE BEGINNING",
  },
  pt: {
    journey: "Trajetória",
    contact: "Contato",
    cv: "Currículo",
    skip: "Pular para o conteúdo",
    now: "AGORA",
    formerly: "ANTIGA",
    location: "PORTO ALEGRE, BRASIL",
    eyebrow: "PRODUCT ENGINEER · FUNDADOR",
    headline: "Transformo problemas reais em produtos.",
    intro:
      "Conecto visão de produto, experiência do usuário e engenharia full stack para levar ideias à produção. Com mais de 15 anos construindo software, lidero uma squad na The Access Group e crio produtos independentes desde a concepção. A IA faz parte de como construo; a responsabilidade continua comigo.",
    explore: "Percorrer minha trajetória",
    portrait:
      "Allan Winckler em Nova York, com a Estátua da Liberdade ao fundo",
    photoCaption: "PRODUTO · ENGENHARIA · IA",
    impact: "O QUE AJUDEI A TRANSFORMAR",
    contribution: "Ver minha contribuição",
    closeContribution: "Fechar detalhes",
    education: "PELO CAMINHO",
    stories: {
      access: {
        products: [
          {
            id: "menu-updates",
            name: "Ordering conectado",
            context: "Online Ordering · Kiosk Ordering",
            description: "Continuidade dos mesmos produtos após a aquisição.",
            contribution:
              "Consolidação, arquiteturas unificadas, integrações e desenvolvimento full stack com IA.",
          },
        ],
        summary:
          "Após a aquisição, continuei liderando a mesma squad full stack e trabalhando em Online Ordering e Kiosk Ordering. O escopo evoluiu para as prioridades do grupo: consolidar soluções, unificar arquiteturas e integrar seus produtos.",
        impact:
          "Desenhei a integração push-based de cardápios usando um gerenciador de menus da Access, Amazon SQS e nossas integrações com POS. A iniciativa unifica a solução e facilita a conexão do POS do cliente aos nossos produtos de ordering.",
        details: [
          "Lidero uma squad full stack de quatro pessoas, conectando entregas frontend e backend nos mesmos produtos de ordering.",
          "Defino contratos entre serviços, retries e idempotência para a integração push-based de cardápios.",
          "Aplico IA de ponta a ponta no processo de desenvolvimento com Devin AI, evoluindo ferramentas e abordagens junto à plataforma.",
        ],
      },
      qikserve: {
        products: [
          {
            id: "ordering-products",
            name: "Online Ordering & Kiosk Ordering",
            context: "Hospitalidade · Full stack",
            description:
              "Dois canais de pedidos, sustentados pela mesma squad.",
            contribution:
              "Desenvolvimento full stack e liderança técnica nos dois produtos.",
          },
        ],
        summary:
          "Entrei na QikServe para trabalhar em Online Ordering e Kiosk Ordering, unindo desenvolvimento full stack e liderança de squad. Minha atuação conectava a experiência do cliente aos serviços de backend que sustentavam os dois produtos.",
        impact:
          "Conduzi entregas técnicas nos canais de pedidos online e de autoatendimento. Após a aquisição pela The Access Group, em setembro de 2024, continuei com os mesmos produtos e a mesma squad, dentro da estratégia de consolidação do grupo.",
        details: [
          "Atuei no frontend e no backend de Online Ordering e Kiosk Ordering.",
          "Combinei implementação, decisões de arquitetura, revisão de código e apoio à squad.",
        ],
      },
      gavea: {
        products: [
          {
            id: "frontend-platform",
            name: "Uma base compartilhada. Duas aplicações.",
            context: "Biblioteca / BFF · Mobile + Web / Electron",
            description:
              "Criei uma biblioteca/BFF como fonte única de verdade para o estado das aplicações e uma forma consistente de consumir o backend no mobile e no web/Electron.",
            contribution:
              "Refatorei o mobile de ponta a ponta para uma versão mais estável, performática e segura. As duas entregas foram construídas sem assistência de IA.",
          },
        ],
        summary:
          "Na Gavea, trabalhei na base que conectava mobile e web/Electron. Minha principal contribuição foi uma biblioteca/BFF compartilhada, acompanhada de uma refatoração completa da aplicação mobile.",
        impact:
          "Criei uma fonte única de verdade para o estado e o consumo do backend no mobile e no web/Electron. Refatorei o mobile de ponta a ponta para ganhar estabilidade, performance e segurança, sem assistência de IA.",
        details: [
          "Criei uma biblioteca/BFF para centralizar o estado das aplicações e o acesso ao backend nas duas aplicações.",
          "Refatorei a aplicação mobile de ponta a ponta, trabalhando estabilidade, performance e segurança.",
          "Construí componentes React reutilizáveis e um design system no Storybook para dar consistência às interfaces.",
        ],
      },
      leadup: {
        products: [
          {
            id: "web-mobile",
            name: "Produtos web e mobile",
            context: "Desenvolvimento de produto · Liderança técnica",
            description:
              "Frentes de produto em paralelo precisavam de direção técnica e de uma equipe capaz de conduzir o ciclo completo das aplicações.",
            contribution:
              "Como CTO, liderei arquitetura e entrega com React, React Native e Node.js, conectando o planejamento de produto à engenharia.",
          },
        ],
        summary:
          "Como CTO, conduzi a estratégia técnica e a arquitetura de frentes de produto em paralelo. Liderei o ciclo completo de desenvolvimento de aplicações web e mobile com React, React Native e Node.js. Também foi um trabalho de formação de equipe: mentoria e processos que ajudassem a sustentar as entregas.",
        impact:
          "Introduzi práticas de Scrum para melhorar a previsibilidade das entregas e o alinhamento da equipe, mantendo arquitetura e qualidade de engenharia presentes nas decisões de produto.",
        details: [
          "Conectei a direção dos produtos ao planejamento técnico de diferentes frentes de desenvolvimento.",
          "Liderei a implementação web e mobile, das decisões iniciais ao ciclo de entrega.",
          "Orientei engenheiros em código limpo, arquitetura sustentável e colaboração.",
        ],
      },
      cefet: {
        summary:
          "Minha base foi construída em sistemas que precisavam continuar funcionando. No CEFET-RJ, atuei na gestão de operações de TI, infraestrutura crítica e iniciativas de software. Também desenvolvi sistemas internos, aproximando usabilidade e manutenção de longo prazo das decisões sobre redes, data centers e segurança.",
        impact:
          "Consolidei uma atenção permanente à confiabilidade, à continuidade das operações e às pessoas que dependem dos sistemas que construímos.",
        details: [],
        education:
          "Mestrado em Sistemas de Gestão da Qualidade, com foco em Sistemas de Informação · Universidade Federal Fluminense · 2011–2013.",
      },
    },
    closingTitle: "O fio que conecta tudo: cuidado com o que construímos.",
    closing:
      "Interfaces, serviços distribuídos ou uma equipe encontrando seu ritmo. Levo a mesma atenção à clareza, à qualidade e à próxima pessoa que vai usar ou manter esse trabalho.",
    contactTitle: "Vamos conversar sobre o próximo capítulo.",
    contactBody:
      "Está construindo um produto ou buscando um Product Engineer que acompanhe o caminho do problema à entrega? Vou gostar de conhecer sua equipe.",
    copy: "Copiar e-mail",
    copied: "E-mail copiado",
    copyFailed: "Selecione o endereço acima para copiá-lo.",
    back: "Voltar ao início",
    footer: "Um pouco da minha história. Construído com cuidado.",
    description:
      "Allan Winckler — Product Engineer e fundador. Criador de Pinubi, BeChess e Berdy. Produto, engenharia full stack e IA, da concepção à produção.",
    journeyNote: "ALGUNS CAPÍTULOS, DO AGORA AO COMEÇO",
  },
};
