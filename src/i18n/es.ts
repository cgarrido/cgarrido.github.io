export const es = {
  nav: {
    about: "Sobre mí",
    experience: "Experiencia",
    skills: "Habilidades",
    certifications: "Certificaciones",
    contact: "Contacto",
  },
  hero: {
    greeting: "Hola, soy",
    name: "Cristian Garrido Méndez",
    title: "Arquitecto de Software · Especialista .NET",
    tagline: "Construyendo sistemas distribuidos escalables con .NET 10, DDD, Docker y Azure.",
    cta: "Ver mi trabajo",
  },
  about: {
    title: "Sobre mí",
    paragraphs: [
      "Ingeniero de software con más de 10 años de experiencia desarrollando aplicaciones web empresariales y sistemas distribuidos sobre el ecosistema Microsoft.",
      "Actualmente enfocado en arquitectura de software: diseño de APIs modulares con Domain-Driven Design (DDD), EF Core y .NET 10, Docker Compose para orquestación local y Azure Pipelines (YAML) para CI/CD.",
      "Implemento stacks de observabilidad completos — Grafana, Loki, Promtail, Prometheus — para que los equipos desplieguen con confianza. Creo que infraestructura y arquitectura son inseparables.",
    ],
  },
  experience: {
    title: "Experiencia",
    items: [
      {
        period: "Jun 2025 – Presente",
        company: "The BigTech Experience",
        role: "Ingeniero de Software",
        description: "Trabajo con tecnologías .NET en sistemas de software a gran escala.",
        tags: [".NET"],
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
    description: "Lideré un equipo de 9 personas construyendo una aplicación de predicción de incendios forestales en tiempo real usando fuentes de datos de puntos calientes, clima e índices de vegetación. Premiado por la NASA.",
  },
  education: {
    title: "Educación",
    degree: "Licenciatura en Ingeniería Informática",
    school: "Universidad de Zaragoza, EINA",
    period: "2007 – 2014",
  },
  contact: {
    title: "Contacto",
    subtitle: "Disponible para consultoría de arquitectura, roles senior .NET y oportunidades de ponente.",
    email: "cristiangarrido1989@gmail.com",
    linkedin: "linkedin.com/in/cristiangarridomendez",
    github: "github.com/cgarrido",
  },
};
