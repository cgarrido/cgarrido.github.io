export const es = {
  nav: {
    about: "Sobre mí",
    experience: "Experiencia",
    projects: "Proyectos",
    skills: "Habilidades",
    certifications: "Certificaciones",
    contact: "Contacto",
  },
  hero: {
    greeting: "Hola, soy",
    name: "Cristian Garrido Méndez",
    title: "Ingeniero de Software · .NET y Sistemas Distribuidos",
    tagline: "Ayudo a los equipos a diseñar, probar y entregar sistemas .NET fiables sobre Azure, de la arquitectura a producción.",
    cta: "Ver mi trabajo",
    ctaContact: "Hablemos",
  },
  about: {
    title: "Sobre mí",
    paragraphs: [
      "Ingeniero de software con más de 12 años de experiencia desarrollando aplicaciones web empresariales y sistemas distribuidos sobre el ecosistema Microsoft.",
      "Actualmente responsable de la arquitectura, la calidad y el despliegue de una familia de productos sobre una plataforma .NET 10 compartida: APIs modulares con Domain-Driven Design (DDD), EF Core, Elasticsearch y RabbitMQ, entregadas con Azure Pipelines, Docker y Terraform.",
      "Me importa cómo entregan los equipos: políticas de ramas, revisión de código, TDD estricto, tests de arquitectura y stacks de observabilidad completos — Grafana, Loki, Promtail, Prometheus. Creo que infraestructura y arquitectura son inseparables.",
      "También construyo herramientas para ingeniería asistida por IA, como un servidor MCP que coordina agentes de código y automatiza el flujo de tareas de Azure DevOps.",
    ],
  },
  approach: {
    title: "Qué Aporto",
    subtitle: "Cómo trabajo con los equipos, desde la primera decisión de diseño hasta una release monitorizada en producción.",
    items: [
      {
        title: "Arquitectura que sigue siendo mantenible",
        description: "Domain-driven design, arquitectura limpia y hexagonal, y APIs modulares con límites claros. Las reglas de capas se verifican con tests de arquitectura, así el diseño aguanta el crecimiento del equipo.",
      },
      {
        title: "Calidad integrada desde el principio",
        description: "Desarrollo guiado por tests con pruebas unitarias centradas en comportamiento, pruebas de integración contra un stack real, pruebas de carga y comprobaciones end-to-end dentro del pipeline.",
      },
      {
        title: "Entregas en las que se puede confiar",
        description: "Pipelines como código, servicios en contenedores, infraestructura en Terraform, migraciones de base de datos como etapa del pipeline, aprobaciones manuales donde el riesgo es real y observabilidad desde el primer día.",
      },
      {
        title: "Prácticas que escalan con el equipo",
        description: "Políticas de ramas, revisión de pull requests, convenciones y decisiones documentadas, y flujos asistidos por IA con barreras de seguridad para que la velocidad no cueste calidad.",
      },
    ],
  },
  experience: {
    title: "Experiencia",
    items: [
      {
        period: "Jun 2025 – Presente",
        company: "The BigTech Experience",
        role: "Ingeniero de Software",
        description: "Backend, calidad y despliegue de una familia de productos construidos sobre una plataforma .NET 10 compartida.",
        bullets: [
          "Arquitectura: APIs modulares con Domain-Driven Design, arquitectura limpia y hexagonal, EF Core, Elasticsearch y RabbitMQ. Servicios core y contratos distribuidos como paquetes NuGet, con los límites entre capas verificados con tests de arquitectura.",
          "Entrega: CI/CD en Azure Pipelines, servicios en contenedores con Docker, infraestructura como código en Terraform, migraciones de base de datos como etapa del pipeline, aprobaciones manuales y rollbacks por tag de imagen.",
          "Calidad: desarrollo guiado por tests, pruebas unitarias y de integración, pruebas de carga con k6 y E2E con Playwright dentro del pipeline.",
          "Prácticas de equipo: políticas de ramas, revisión de pull requests y convenciones documentadas.",
          "Herramientas: un servidor MCP interno que coordina agentes de código con IA y automatiza el flujo de tareas de Azure DevOps.",
        ],
        tags: [".NET 10", "DDD", "Azure DevOps", "Terraform", "Docker", "Elasticsearch", "RabbitMQ", "TDD"],
      },
      {
        period: "Ene 2024 – Mar 2025",
        company: "SPHERAG",
        role: "Tech Lead / Ingeniero de Software",
        description: "Lideré y coordiné cuatro equipos de desarrollo (2 Back-end, 1 Web, 1 App) con .NET Core 8 y SQL Server. Gestión de despliegues cloud en AWS y optimización de pipelines CI/CD con GitHub Actions y AWS CodePipeline.",
        tags: [".NET Core 8", "SQL Server", "AWS", "GitHub Actions", "AWS CodePipeline"],
      },
      {
        period: "Ene 2023 – Nov 2023",
        company: "Grupo Pronet",
        role: "Arquitecto de Software",
        description: "Lideré decisiones arquitectónicas y el roadmap técnico. Diseñé soluciones modulares con .NET Core, pipelines en Azure DevOps e infraestructura gestionada con Terraform.",
        tags: [".NET Core", "Azure DevOps", "Terraform", "Arquitectura"],
      },
      {
        period: "Abr 2019 – Dic 2022",
        company: "Grupo Pronet",
        role: "Desarrollador de Software",
        description: "Desarrollo full-stack con tecnologías Microsoft: .NET-C#, SQL Server y servicios Azure (Web Services, Storage, Application Insights, Web Jobs).",
        tags: [".NET C#", "SQL Server", "Azure", "Application Insights"],
      },
      {
        period: "Feb 2016 – Mar 2019",
        company: "Binaria Ingeniería Digital",
        role: "Desarrollador de Software",
        description: "Desarrollo de aplicaciones web con .NET (VB/C#), SQL Server, servicios Azure, Bootstrap y jQuery.",
        tags: [".NET", "SQL Server", "Azure", "Bootstrap", "jQuery"],
      },
      {
        period: "May 2014 – Dic 2015",
        company: "BABEL",
        role: "Programador",
        description: "Desarrollo de aplicaciones empresariales para Fraternidad Muprespa (VB.NET, SQL Server, Crystal Reports) y portales internacionales para Votorantim Cimentos con SharePoint 2013 y .NET (Marruecos, Turquía, Túnez).",
        tags: ["VB.NET", "SharePoint 2013", "SQL Server", "Crystal Reports"],
      },
      {
        period: "Jul 2013 – Feb 2014",
        company: "Hiberus Tecnología",
        role: "Becario / Proyecto Fin de Carrera",
        description: "Diseño y desarrollo de una aplicación de intranet corporativa para organizar y hacer seguimiento de proyectos activos y personal en una empresa consultora.",
        tags: [".NET", "SQL Server"],
      },
    ],
  },
  projects: {
    title: "Proyectos",
    subtitle: "Backend, QA y despliegue en toda la familia de productos (Berrymony es full-stack). Se omiten intencionadamente los datos de clientes.",
    items: [
      {
        name: "Plataforma Compartida",
        role: "Backend · QA · Despliegue",
        description: "Plataforma .NET 10 compartida con servicios de autenticación, adjuntos, notificaciones y B2B. Las librerías core y los contratos se publican como paquetes NuGet y los servicios como imágenes Docker, consumidos por todos los productos.",
        tags: [".NET 10", "DDD", "NuGet", "RabbitMQ", "Azure Service Bus", "SignalR"],
      },
      {
        name: "Plataforma de Recruitment",
        role: "Backend · QA · Despliegue",
        description: "Plataforma para agencias de selección con candidatos, ofertas y paneles. Frontend Blazor WASM, contextos acotados de Auth y Recruitment y entrega completa basada en Docker.",
        tags: ["Blazor", ".NET 10", "SQL Server", "Elasticsearch", "Redis", "Playwright"],
      },
      {
        name: "Plataforma de Búsqueda",
        role: "Backend · QA · Despliegue",
        description: "Plataforma de búsqueda de alto rendimiento con Clean Architecture y CQRS, Elasticsearch, API pública con API key y rate limiting, Azure Functions para sincronización de feeds y analítica, y Azure Container Apps provisionado con Terraform.",
        tags: ["Elasticsearch", "Azure Functions", "Container Apps", "Terraform", "Service Bus"],
      },
      {
        name: "Plataforma de Fidelización y CRM",
        role: "Backend · QA · Despliegue",
        description: "Backend de fidelización con tarjetas de cliente, promociones y campañas, pases de Apple y Google Wallet, y workers en segundo plano para transacciones y envío de campañas.",
        tags: [".NET 10", "MongoDB", "RabbitMQ", "Azure Key Vault", "Terraform"],
      },
      {
        name: "Comercio B2B Multi-partner",
        role: "Backend · QA · Despliegue",
        description: "Prueba de concepto de plataforma de comercio con una celda Medusa por partner, servicios .NET compartidos, storefront en Next.js, asistente de presupuestos con IA y despliegues progresivos con rollback.",
        tags: ["Medusa", ".NET 10", "Next.js", "PostgreSQL", "k6", "Docker Compose"],
      },
      {
        name: "Berrymony",
        role: "Creador · Full-stack",
        description: "Plataforma multilingüe en producción donde cada boda tiene su propia web, subida de fotos de invitados, álbumes, confirmaciones (RSVP) y pagos. Arquitectura: dos servicios .NET independientes (Auth y Weddings) con Clean Architecture, CQRS propio y reglas de capas verificadas con tests de arquitectura, más procesado de fotos orientado a eventos con Azure Functions y Event Grid. Entrega: trabajo planificado como backlog de Epic a Task en Azure DevOps e integrado con ramas cortas y pull requests; un único pipeline ejecuta lint y tests, construye imágenes, planifica la infraestructura con Terraform, exige aprobación manual antes del apply, y después ejecuta migraciones de base de datos y despliega en Azure Container Apps tras Front Door.",
        tags: ["Next.js", ".NET 10", "Container Apps", "Azure Functions", "Front Door", "Terraform", "Stripe", "SignalR"],
        url: "https://berrymony.com",
      },
      {
        name: "Servidor de Coordinación de Agentes IA",
        role: "Creador",
        description: "Servidor MCP que permite a varios agentes de Claude Code compartir un repositorio: reserva de áreas, mensajería y un orquestador que asigna tareas de Azure DevOps, sigue las pull requests y actualiza la wiki.",
        tags: ["TypeScript", "MCP", "SQLite", "Azure DevOps API", "Docker"],
      },
    ],
  },
  skills: {
    title: "Habilidades",
    groups: [
      {
        label: "Arquitectura",
        items: ["DDD", "APIs Modulares", "Arquitectura Limpia", "Arquitectura Hexagonal", "Microservicios"],
      },
      {
        label: "Backend",
        items: ["C#", ".NET 10", ".NET Core", "Blazor", "EF Core", "SQL Server", "APIs REST"],
      },
      {
        label: "Cloud e Infraestructura",
        items: ["Microsoft Azure", "Azure Pipelines", "Docker", "Docker Compose", "Kubernetes", "Terraform", "AWS"],
      },
      {
        label: "Datos y Mensajería",
        items: ["SQL Server", "Elasticsearch", "RabbitMQ", "Azure Service Bus", "MongoDB", "Redis"],
      },
      {
        label: "Calidad y Liderazgo",
        items: ["TDD estricto", "Tests de Arquitectura", "Pruebas de carga con k6", "Playwright", "Revisión de código", "Políticas de ramas"],
      },
      {
        label: "Ingeniería asistida por IA",
        items: ["Claude Code", "Servidores MCP", "Orquestación de agentes"],
      },
      {
        label: "Observabilidad",
        items: ["Grafana", "Loki", "Promtail", "Prometheus"],
      },
      {
        label: "CI/CD",
        items: ["Azure DevOps", "GitHub Actions", "AWS CodePipeline", "YAML Pipelines"],
      },
    ],
  },
  certifications: {
    title: "Certificaciones",
    items: [
      { name: "Azure Developer Associate AZ-204", issuer: "Microsoft", year: "2023" },
      { name: "Docker y Kubernetes", issuer: "campusMVP", year: "2023" },
      { name: "Desarrollador cloud Microsoft Azure", issuer: "campusMVP", year: "2023" },
      { name: "Blazor y .NET", issuer: "campusMVP", year: "2022" },
      { name: "MCSD Web Applications", issuer: "Microsoft", year: "2015" },
      { name: "MCSD SharePoint Applications 2013", issuer: "Microsoft", year: "2015" },
      { name: "Microsoft Certified Professional", issuer: "Microsoft", year: "2014" },
    ],
  },
  achievement: {
    title: "Logro destacado",
    name: "SpaceApps Challenge 2014 — Ganador NASA",
    description: "Integré un equipo de 9 personas que construyó una aplicación de predicción de incendios forestales en tiempo real usando fuentes de datos de puntos calientes, clima e índices de vegetación. Premiado por la NASA.",
  },
  education: {
    title: "Educación",
    degree: "Licenciatura en Ingeniería Informática",
    school: "Universidad de Zaragoza, EINA",
    period: "2007 – 2014",
  },
  contact: {
    title: "Contacto",
    subtitle: "Abierto a roles senior .NET y a consultoría de arquitectura y entrega. Cuéntame tu proyecto y vemos si encajo.",
    email: "cristiangarrido1989@gmail.com",
    linkedin: "linkedin.com/in/cristiangarridomendez",
    github: "github.com/cgarrido",
  },
};
