export const en = {
  nav: {
    about: "About",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    certifications: "Certifications",
    contact: "Contact",
  },
  hero: {
    greeting: "Hi, I'm",
    name: "Cristian Garrido Méndez",
    title: "Software Engineer · .NET & Distributed Systems",
    tagline: "I help teams design, test and ship reliable .NET systems on Azure, from architecture to production.",
    cta: "View my work",
    ctaContact: "Let's talk",
  },
  about: {
    title: "About Me",
    paragraphs: [
      "Software engineer with 12+ years of experience building enterprise-grade web applications and distributed systems on Microsoft's ecosystem.",
      "Currently owning architecture, quality and delivery for a family of products on a shared .NET 10 platform: modular APIs with Domain-Driven Design (DDD), EF Core, Elasticsearch and RabbitMQ, shipped through Azure Pipelines, Docker and Terraform.",
      "I care about how teams ship: branch policies, code review, strict TDD, architecture tests and full observability stacks — Grafana, Loki, Promtail, Prometheus. I believe infrastructure and architecture are inseparable.",
      "I also build tooling for AI-assisted engineering, such as an MCP server that coordinates coding agents and automates Azure DevOps task flow.",
    ],
  },
  approach: {
    title: "What I Bring",
    subtitle: "How I work with teams, from the first design decision to a monitored production release.",
    items: [
      {
        title: "Architecture that stays maintainable",
        description: "Domain-driven design, Clean and Hexagonal architecture, and modular APIs with clear boundaries. Layer rules are enforced by architecture tests, so the design survives team growth.",
      },
      {
        title: "Quality built in, not bolted on",
        description: "Test-first development with behavior-focused unit tests, integration tests against a real stack, load tests and end-to-end checks running in the pipeline.",
      },
      {
        title: "Delivery you can trust",
        description: "Pipelines as code, containerized services, infrastructure in Terraform, database migrations as a pipeline stage, manual approvals where risk is real, and observability from day one.",
      },
      {
        title: "Practices that scale a team",
        description: "Branch policies, pull request reviews, written conventions and decisions, and AI-assisted workflows with guardrails so speed does not cost quality.",
      },
    ],
  },
  experience: {
    title: "Experience",
    items: [
      {
        period: "Jun 2025 – Present",
        company: "The BigTech Experience",
        role: "Software Engineer",
        description: "Technical owner of a family of products built on a shared .NET 10 platform.",
        bullets: [
          "Make the architecture, infrastructure and deployment decisions for several products on a shared platform (DDD, modular APIs, core services distributed as NuGet packages).",
          "Led the Recruitment product end to end (backend, QA and delivery), collaborating on its Blazor frontend; same backend, QA and delivery ownership across the other products.",
          "Designed CI/CD in Azure Pipelines with Docker Compose and Azure Container Apps, Terraform infrastructure, manual approvals and image-tag rollbacks.",
          "Defined branch policies and PR review practices; enforce quality with strict TDD, architecture tests, k6 load tests and Playwright E2E.",
          "Created an internal MCP server that coordinates AI coding agents and automates Azure DevOps task flow.",
        ],
        tags: [".NET 10", "DDD", "Azure DevOps", "Terraform", "Docker", "Elasticsearch", "RabbitMQ", "TDD"],
      },
      {
        period: "Jan 2024 – Mar 2025",
        company: "SPHERAG",
        role: "Tech Lead / Software Engineer",
        description: "Led and coordinated four development teams (2 Back-end, 1 Web, 1 App) using .NET Core 8 and SQL Server. Managed cloud deployments with AWS and optimized CI/CD pipelines with GitHub Actions and AWS CodePipeline.",
        tags: [".NET Core 8", "SQL Server", "AWS", "GitHub Actions", "AWS CodePipeline"],
      },
      {
        period: "Jan 2023 – Nov 2023",
        company: "Grupo Pronet",
        role: "Software Architect",
        description: "Led architectural decisions and technical roadmap. Designed modular .NET Core solutions with Azure DevOps pipelines and Terraform-managed infrastructure.",
        tags: [".NET Core", "Azure DevOps", "Terraform", "Architecture"],
      },
      {
        period: "Apr 2019 – Dec 2022",
        company: "Grupo Pronet",
        role: "Software Developer",
        description: "Full-stack development with Microsoft technologies: .NET-C#, SQL Server, and Azure services (Web Services, Storage, Application Insights, Web Jobs).",
        tags: [".NET C#", "SQL Server", "Azure", "Application Insights"],
      },
      {
        period: "Feb 2016 – Mar 2019",
        company: "Binaria Ingeniería Digital",
        role: "Software Developer",
        description: "Web application development using .NET (VB/C#), SQL Server, Azure services, Bootstrap, and jQuery.",
        tags: [".NET", "SQL Server", "Azure", "Bootstrap", "jQuery"],
      },
      {
        period: "May 2014 – Dec 2015",
        company: "BABEL",
        role: "Programmer",
        description: "Enterprise application development for Fraternidad Muprespa (VB.NET, SQL Server, Crystal Reports) and international portal development for Votorantim Cimentos using SharePoint 2013 and .NET (Morocco, Turkey, Tunisia).",
        tags: ["VB.NET", "SharePoint 2013", "SQL Server", "Crystal Reports"],
      },
      {
        period: "Jul 2013 – Feb 2014",
        company: "Hiberus Tecnología",
        role: "Intern / Final Year Project",
        description: "Designed and developed a corporate intranet application to organize and track active projects and personnel in a consulting company.",
        tags: [".NET", "SQL Server"],
      },
    ],
  },
  projects: {
    title: "Projects",
    subtitle: "Backend, QA and delivery across the product family (Berrymony is full-stack). Client details intentionally omitted.",
    items: [
      {
        name: "Shared Platform",
        role: "Backend · QA · Delivery",
        description: "Shared .NET 10 platform with auth, attachments, notifications and B2B services. Core libraries and contracts are published as NuGet packages and services as Docker images, consumed by every product.",
        tags: [".NET 10", "DDD", "NuGet", "RabbitMQ", "Azure Service Bus", "SignalR"],
      },
      {
        name: "Recruitment Platform",
        role: "Backend · QA · Delivery",
        description: "Recruitment-agency platform with candidates, job applications and dashboards. Blazor WASM frontend, bounded contexts for Auth and Recruitment, and full Docker-based delivery.",
        tags: ["Blazor", ".NET 10", "SQL Server", "Elasticsearch", "Redis", "Playwright"],
      },
      {
        name: "Search Platform",
        role: "Backend · QA · Delivery",
        description: "High-throughput search platform on Clean Architecture and CQRS, with Elasticsearch, public API-key API with rate limiting, Azure Functions for feed sync and analytics, and Terraform-provisioned Azure Container Apps.",
        tags: ["Elasticsearch", "Azure Functions", "Container Apps", "Terraform", "Service Bus"],
      },
      {
        name: "Loyalty & CRM Platform",
        role: "Backend · QA · Delivery",
        description: "Loyalty backend with customer cards, promotions and campaigns, Apple and Google Wallet passes, and background workers for transactions and campaign sending.",
        tags: [".NET 10", "MongoDB", "RabbitMQ", "Azure Key Vault", "Terraform"],
      },
      {
        name: "Multi-partner B2B Commerce",
        role: "Backend · QA · Delivery",
        description: "Proof of concept of a commerce platform with one Medusa cell per partner, shared .NET services, a Next.js storefront, an AI quoting assistant and rolling deployments with rollback.",
        tags: ["Medusa", ".NET 10", "Next.js", "PostgreSQL", "k6", "Docker Compose"],
      },
      {
        name: "Berrymony",
        role: "Creator · Full-stack",
        description: "Live multilingual platform where each wedding gets its own website, guest photo uploads, albums, RSVPs and payments. Architecture: two independent .NET services (Auth and Weddings) with Clean Architecture, custom CQRS and layer rules enforced by architecture tests, plus event-driven photo processing with Azure Functions and Event Grid. Delivery: work planned as an Epic-to-Task backlog in Azure DevOps and merged through short-lived branches and pull requests; one pipeline runs lint and tests, builds images, plans infrastructure with Terraform, requires manual approval before apply, then runs database migrations and deploys to Azure Container Apps behind Front Door.",
        tags: ["Next.js", ".NET 10", "Container Apps", "Azure Functions", "Front Door", "Terraform", "Stripe", "SignalR"],
        url: "https://berrymony.com",
      },
      {
        name: "AI Agent Coordination Server",
        role: "Creator",
        description: "MCP server that lets several Claude Code agents share a repository: area claims, messaging, and an orchestrator that assigns Azure DevOps tasks, tracks pull requests and updates the wiki.",
        tags: ["TypeScript", "MCP", "SQLite", "Azure DevOps API", "Docker"],
      },
    ],
  },
  skills: {
    title: "Skills",
    groups: [
      {
        label: "Architecture",
        items: ["DDD", "Modular APIs", "Clean Architecture", "Hexagonal Architecture", "Microservices"],
      },
      {
        label: "Backend",
        items: ["C#", ".NET 10", ".NET Core", "Blazor", "EF Core", "SQL Server", "REST APIs"],
      },
      {
        label: "Cloud & Infrastructure",
        items: ["Microsoft Azure", "Azure Pipelines", "Docker", "Docker Compose", "Kubernetes", "Terraform", "AWS"],
      },
      {
        label: "Data & Messaging",
        items: ["SQL Server", "Elasticsearch", "RabbitMQ", "Azure Service Bus", "MongoDB", "Redis"],
      },
      {
        label: "Quality & Leadership",
        items: ["Strict TDD", "Architecture Tests", "k6 Load Testing", "Playwright", "Code Review", "Branch Policies"],
      },
      {
        label: "AI-assisted Engineering",
        items: ["Claude Code", "MCP Servers", "Agent Orchestration"],
      },
      {
        label: "Observability",
        items: ["Grafana", "Loki", "Promtail", "Prometheus"],
      },
      {
        label: "CI/CD",
        items: ["Azure DevOps", "GitHub Actions", "AWS CodePipeline", "YAML Pipelines"],
      },
    ],
  },
  certifications: {
    title: "Certifications",
    items: [
      { name: "Azure Developer Associate AZ-204", issuer: "Microsoft", year: "2023" },
      { name: "Docker & Kubernetes", issuer: "campusMVP", year: "2023" },
      { name: "Microsoft Azure Cloud Developer", issuer: "campusMVP", year: "2023" },
      { name: "Blazor & .NET", issuer: "campusMVP", year: "2022" },
      { name: "MCSD Web Applications", issuer: "Microsoft", year: "2015" },
      { name: "MCSD SharePoint Applications 2013", issuer: "Microsoft", year: "2015" },
      { name: "Microsoft Certified Professional", issuer: "Microsoft", year: "2014" },
    ],
  },
  achievement: {
    title: "Achievement",
    name: "SpaceApps Challenge 2014 — NASA Winner",
    description: "Part of a 9-member team that built a real-time wildfire prediction application using hotspot data sources, weather feeds, and vegetation indices. Awarded by NASA.",
  },
  education: {
    title: "Education",
    degree: "Master's Degree in Computer Science",
    school: "Universidad de Zaragoza, EINA",
    period: "2007 – 2014",
  },
  contact: {
    title: "Get in Touch",
    subtitle: "Open to senior .NET roles and to architecture and delivery consulting. Tell me about your project and let's see if I'm a good fit.",
    email: "cristiangarrido1989@gmail.com",
    linkedin: "linkedin.com/in/cristiangarridomendez",
    github: "github.com/cgarrido",
  },
};
