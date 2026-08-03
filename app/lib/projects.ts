export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  status?: string;
  challenge: string;
  approach: string;
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "agrisensenet",
    title: "AgriSenseNet (CropWise)",
    description:
      "Large-scale team project for a smart agriculture platform coordinating 11 interdependent microservices — a dashboard, backend, data pipelines, and cron-based ML inference jobs. I containerized the backend and dashboard, set up GitHub Actions CI publishing to GHCR, and implemented GitOps deployment via ArgoCD.",
    tech: ["Docker", "GitHub Actions", "GHCR", "ArgoCD"],
    link: "https://github.com/AgriSenseNet",
    challenge:
      "The platform was split across 11 interdependent services — a dashboard, a backend API, data pipelines, and cron-based ML inference jobs. Each had different dependencies, and the team needed a consistent, reproducible way to build, deploy, and keep all of them in sync.",
    approach:
      "I containerized the backend and dashboard services, set up a GitHub Actions CI pipeline that published versioned images to GitHub Container Registry (GHCR), and implemented GitOps-based deployment with ArgoCD so the cluster's state stayed in sync with what was in Git across all 11 services.",
    outcome:
      "The team could deploy and roll back any of the 11 services the same way, through Git, instead of manual deploys — which cut down on environment-specific bugs and made coordinating changes across services far less error-prone.",
  },
  {
    slug: "hr-interview-system",
    title: "HR Interview Automation System",
    description:
      "A FastAPI + PostgreSQL backend for automating parts of the interview process, with request validation, rate limiting, and structured logging. Containerized with Docker, with a GitHub Actions CI pipeline that runs a Trivy vulnerability scan before publishing to GHCR and deploying to Render.",
    tech: ["FastAPI", "PostgreSQL", "Docker", "GitHub Actions", "Trivy", "GHCR"],
    link: "https://github.com/ChethanaGimhan/hr-interview-system",
    challenge:
      "Shipping a backend service manually is error-prone and doesn't catch security issues before they reach production. I wanted a pipeline where every change was automatically validated, built, scanned, and published without manual steps.",
    approach:
      "I built the backend with FastAPI and PostgreSQL, adding request validation, rate limiting, and structured logging, then containerized it with Docker. A GitHub Actions workflow builds the image, runs a Trivy vulnerability scan against it, and only publishes to GHCR if the scan passes.",
    outcome:
      "Every commit to the main branch produces a validated, scanned, versioned container image automatically, which is then deployed to a live service on Render — no manual builds, and known vulnerabilities are caught before an image ever ships.",
  },
  {
    slug: "routex-bus-tracking",
    title: "RouteX — Bus Tracking App",
    description:
      "A cross-platform mobile app built for the SLIoT Competition, with real-time GPS bus tracking via Firebase, an animated and responsive UI, a booking interface, bus search, and profile management.",
    tech: ["Flutter", "Firebase"],
    link: "https://github.com/Blazer2020/RouteX",
    challenge:
      "Commuters needed a simple mobile way to find a bus, see where it actually was in real time, and book a seat — without juggling multiple disconnected screens or a confusing flow.",
    approach:
      "As part of a group project for the SLIoT Competition, I helped build the app in Flutter with real-time GPS tracking wired up through Firebase, alongside a search screen, a booking flow, and profile management, all tied together with an animated, responsive UI.",
    outcome:
      "A working cross-platform app covering live bus tracking end to end, from search through booking, built and demoed for the SLIoT Competition.",
  },
  {
    slug: "kandypack",
    title: "Kandypack — Rail & Road Supply Chain System",
    description:
      "A rail and road supply chain distribution system built for a Database Systems group project, with a fully normalized relational schema, SQL-driven reporting, and a full-stack Next.js/TypeScript application around it.",
    tech: ["PostgreSQL", "SQL", "ER Modeling", "Docker", "Next.js", "TypeScript"],
    link: "https://github.com/sahithyandev/kandypack-system",
    challenge:
      "A distribution system spanning rail and road logistics needed a database design that could stay consistent across 10+ modules — inventory, orders, routes — without data anomalies, plus a real application layer on top of it.",
    approach:
      "I designed the full ER diagram and relational schema from requirement analysis, normalized to 3NF, and implemented the tables with defined primary/foreign keys and constraints across 10+ modules. I wrote the SQL queries for reporting and data retrieval, from inventory to order processing, as part of a full-stack system with a Next.js frontend, a TypeScript backend, and a Dockerized CI/CD pipeline.",
    outcome:
      "A normalized, constraint-enforced database backing a working full-stack system, with SQL reporting queries covering the system's core inventory and order-processing workflows.",
  },
  {
    slug: "nano-processor",
    title: "Nano Processor",
    description:
      "A small processor implemented from scratch in VHDL for a computer architecture course — hardware logic and digital system design at the register-transfer level.",
    tech: ["VHDL", "Digital Design"],
    challenge:
      "Understanding how a processor actually executes instructions at the hardware level requires building one, not just reading about it — the assignment was to design a working processor from first principles.",
    approach:
      "I designed the processor's datapath and control logic in VHDL at the register-transfer level, implementing instruction fetch, decode, and execution as synchronous hardware logic rather than software.",
    outcome:
      "A simulated, working processor implementation, and a much deeper understanding of how software instructions map onto real digital hardware.",
  },
  {
    slug: "security-testing-mutillidae",
    title: "Security Testing — OWASP Mutillidae II",
    description:
      "Hands-on offensive security work against the intentionally vulnerable OWASP Mutillidae II app: intercepting and manipulating HTTP traffic and exploiting SQL injection with Burp Suite.",
    tech: ["Burp Suite", "OWASP Mutillidae II", "SQL Injection"],
    challenge:
      "Reading about web vulnerabilities in theory is very different from finding and exploiting them yourself — I wanted hands-on practice attacking a real (if intentionally vulnerable) web application.",
    approach:
      "Using Burp Suite as an intercepting proxy, I captured and manipulated HTTP requests against OWASP Mutillidae II, then crafted and executed SQL injection payloads to extract data the application wasn't meant to expose.",
    outcome:
      "Practical, hands-on experience with web application exploitation techniques that directly reinforced the theory from cyber security coursework.",
  },
  {
    slug: "factumdb",
    title: "FactumDB",
    status: "Ongoing",
    description:
      "A Semester 5 cybersecurity group project proposing a digital forensics tool that correlates MySQL InnoDB tablespace files with binary logs to reconstruct database transaction history.",
    tech: ["MySQL InnoDB Internals", "Binary Log Analysis", "Digital Forensics"],
    challenge:
      "Database breaches and disputes often require reconstructing exactly what happened at the storage layer — but InnoDB's tablespace files and MySQL's binary logs aren't designed to be correlated with each other, making that reconstruction hard to do reliably.",
    approach:
      "We proposed a tool that parses InnoDB tablespace files alongside binary logs to reconstruct a database's transaction history for forensic investigation. I'm currently working on the system architecture and design.",
    outcome:
      "Still in active development — the current focus is finalizing the system architecture before implementation begins.",
  },
];
