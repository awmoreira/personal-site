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
    dates: { en: "FEB 2024 — PRESENT", pt: "FEV 2024 — AGORA" },
    company: "Access Group",
    previous: "QikServe",
    role: "Senior Software Engineer · Tech Lead & Architect",
    initials: "A",
    tags: ["React", "TypeScript", "Java / Spring Boot", "Amazon SQS"],
  },
  {
    id: "gavea",
    year: "2021",
    dates: { en: "NOV 2021 — NOV 2023", pt: "NOV 2021 — NOV 2023" },
    company: "Gavea Tech",
    role: "Senior Software Engineer",
    initials: "G",
    tags: ["React", "TypeScript", "Storybook", "Performance"],
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
    eyebrow: "SENIOR SOFTWARE ENGINEER · TECH LEAD & ARCHITECT",
    headline: "I build products people can rely on.",
    intro:
      "For over 15 years, I’ve been building web applications and connecting the details of a good user experience to the systems behind it. Today, I lead engineers, shape architecture and stay close to the code.",
    explore: "Explore my journey",
    portrait:
      "Allan Winckler in New York, with the Statue of Liberty in the background",
    photoCaption: "ENGINEERING · PRODUCT · PEOPLE",
    impact: "WHAT I HELPED CHANGE",
    contribution: "Explore my contribution",
    closeContribution: "Close details",
    education: "ALONG THE WAY",
    stories: {
      access: {
        products: [
          {
            id: "menu-updates",
            name: "Menu updates",
            context: "Hospitality · POS integrations",
            description:
              "Keeping menus in sync across connected services is part of a reliable ordering experience.",
            contribution:
              "I designed asynchronous updates with Amazon SQS, replacing repeated polling with events and defining how services recover from failures.",
          },
        ],
        summary:
          "I lead a team of four across frontend and backend, working on the services that connect loyalty, CRM, menus and point-of-sale systems. My role brings together architectural decisions and hands-on delivery: breaking down complex features, reviewing code and helping the team build with consistency.",
        impact:
          "Designed a push-based, asynchronous menu update system with Amazon SQS, replacing polling to reduce coupling and improve reliable data propagation between POS services.",
        details: [
          "Define service contracts, retry strategies and idempotency so integrations can handle failures more reliably.",
          "Guide React and TypeScript architecture while contributing to critical Java and Spring Boot services.",
          "Mentor engineers and improve testing, component structure and CI workflows across the team.",
        ],
      },
      gavea: {
        products: [
          {
            id: "frontend-platform",
            name: "A faster, consistent web experience",
            context: "Web applications · Design system",
            description:
              "The product needed a shared interface foundation that could evolve without carrying the same legacy work into every screen.",
            contribution:
              "I built reusable React components documented in Storybook and improved Lighthouse performance from 58 to 94.",
          },
        ],
        summary:
          "I worked on the foundations of a faster, more maintainable frontend. Alongside building React applications with TypeScript, I migrated legacy interfaces into a Storybook-driven design system. Shared components and clearer patterns helped bring consistency to both the product and the way engineers worked on it.",
        impact:
          "Improved the Lighthouse performance score from 58 to 94 through code splitting, lazy loading and asset optimization.",
        details: [
          "Built a component-driven architecture with reusable, documented interface patterns.",
          "Improved loading performance by reducing the work and assets needed for the initial experience.",
          "Integrated backend APIs and strengthened UI conventions to simplify ongoing development.",
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
      "Have an engineering challenge or an opportunity in mind? I’d be glad to hear about your product and your team.",
    copy: "Copy email",
    copied: "Email copied",
    copyFailed: "Select the email address above to copy it.",
    back: "Back to top",
    footer: "A little of my story. Built with care.",
    description:
      "Allan Winckler — Senior Software Engineer, Tech Lead & Architect. 15+ years building web applications, resilient systems and engineering teams.",
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
    eyebrow: "SENIOR SOFTWARE ENGINEER · TECH LEAD & ARCHITECT",
    headline: "Construo produtos em que as pessoas podem confiar.",
    intro:
      "Há mais de 15 anos construo aplicações web, conectando os detalhes de uma boa experiência aos sistemas que a sustentam. Hoje, lidero engenheiros, desenho arquiteturas e continuo próximo do código.",
    explore: "Percorrer minha trajetória",
    portrait:
      "Allan Winckler em Nova York, com a Estátua da Liberdade ao fundo",
    photoCaption: "ENGENHARIA · PRODUTO · PESSOAS",
    impact: "O QUE AJUDEI A TRANSFORMAR",
    contribution: "Ver minha contribuição",
    closeContribution: "Fechar detalhes",
    education: "PELO CAMINHO",
    stories: {
      access: {
        products: [
          {
            id: "menu-updates",
            name: "Atualização de cardápios",
            context: "Hospitalidade · Integrações com POS",
            description:
              "Manter cardápios sincronizados entre serviços faz parte de uma experiência de pedido confiável.",
            contribution:
              "Desenhei atualizações assíncronas com Amazon SQS, substituindo consultas repetidas por eventos e definindo a recuperação dos serviços em caso de falha.",
          },
        ],
        summary:
          "Lidero uma equipe de quatro pessoas entre frontend e backend, trabalhando nos serviços que conectam fidelidade, CRM, cardápios e pontos de venda. Meu papel une decisões de arquitetura e implementação: decompor funcionalidades complexas, revisar código e ajudar a equipe a construir com consistência.",
        impact:
          "Desenhei um sistema assíncrono de atualização de cardápios com Amazon SQS, substituindo consultas periódicas por eventos para reduzir o acoplamento e melhorar a propagação confiável dos dados entre serviços de POS.",
        details: [
          "Defino contratos entre serviços, estratégias de retry e idempotência para tornar as integrações mais resilientes a falhas.",
          "Oriento a arquitetura React e TypeScript e contribuo em serviços críticos com Java e Spring Boot.",
          "Apoio o desenvolvimento dos engenheiros e a evolução de testes, componentes e fluxos de CI.",
        ],
      },
      gavea: {
        products: [
          {
            id: "frontend-platform",
            name: "Uma experiência web mais rápida e consistente",
            context: "Aplicações web · Design system",
            description:
              "O produto precisava de uma base de interface compartilhada que pudesse evoluir sem repetir o trabalho legado a cada tela.",
            contribution:
              "Construí componentes React reutilizáveis, documentados no Storybook, e elevei a performance no Lighthouse de 58 para 94.",
          },
        ],
        summary:
          "Trabalhei nas bases de um frontend mais rápido e fácil de manter. Além de construir aplicações React com TypeScript, migrei interfaces legadas para um design system documentado no Storybook. Componentes compartilhados e padrões mais claros trouxeram consistência ao produto e ao trabalho de quem o desenvolvia.",
        impact:
          "Elevei a pontuação de performance no Lighthouse de 58 para 94 com divisão de código, carregamento sob demanda e otimização de assets.",
        details: [
          "Construí uma arquitetura de componentes com padrões de interface reutilizáveis e documentados.",
          "Melhorei o carregamento reduzindo o trabalho e os arquivos necessários na experiência inicial.",
          "Integrei APIs de backend e fortaleci convenções de interface para simplificar a evolução da plataforma.",
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
      "Tem um desafio de engenharia ou uma oportunidade em mente? Vou gostar de conhecer seu produto e sua equipe.",
    copy: "Copiar e-mail",
    copied: "E-mail copiado",
    copyFailed: "Selecione o endereço acima para copiá-lo.",
    back: "Voltar ao início",
    footer: "Um pouco da minha história. Construído com cuidado.",
    description:
      "Allan Winckler — Senior Software Engineer, Tech Lead & Architect. Mais de 15 anos construindo aplicações web, sistemas confiáveis e equipes de engenharia.",
    journeyNote: "ALGUNS CAPÍTULOS, DO AGORA AO COMEÇO",
  },
};
