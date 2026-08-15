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
      "Large-scale software engineering group project for a smart agriculture platform. I containerized 14 microservices — a FastAPI backend, React dashboard, MQTT–Kafka bridge, Spark, and 6 ML inference services — authoring 27 Dockerfiles with multi-stage builds, and owned the CI/GitOps pipeline into ArgoCD.",
    tech: ["Docker", "GitHub Actions", "GHCR", "ArgoCD", "Kubernetes"],
    link: "https://github.com/AgriSenseNet",
    challenge:
      "The platform spanned 14 independently developed microservices — a FastAPI backend, a React dashboard, an MQTT–Kafka bridge, Spark, and six ML inference services. Each had different dependencies and build requirements, and the team needed a consistent, reproducible way to build all of them and keep the deployed cluster in sync with what was in Git.",
    approach:
      "I containerized all 14 services, authoring 27 Dockerfiles with multi-stage builds to keep images lean. I then built a GitHub Actions CI pipeline using Buildx caching that publishes SHA-tagged images to GitHub Container Registry, and bridged it to GitOps via repository dispatch — automatically updating the Kubernetes manifests that ArgoCD watches.",
    outcome:
      "Every merge produces reproducible, SHA-tagged images and automatically updates the Kubernetes manifests ArgoCD deploys from, so the running cluster stays in sync with Git without any manual deployment steps.",
  },
  {
    slug: "kandypack",
    title: "Kandypack — Rail & Road Supply Chain System",
    description:
      "A rail and road logistics platform built for a Database Systems group project. I designed the relational schema and ERD for 15+ entities, enforced business rules through triggers and procedures, built the Elysia.js backend API with JWT auth, and implemented the Store Manager Dashboard in Next.js.",
    tech: ["PostgreSQL", "Elysia.js", "Next.js", "Docker", "ER Modeling"],
    link: "https://github.com/sahithyandev/kandypack-system",
    challenge:
      "A logistics platform covering orders, train and truck trips, shipments, and worker rosters needed a database design that stayed consistent across 15+ entities — while enforcing real operational rules like driver working-hour limits and train-capacity overflow that a plain schema can't express on its own.",
    approach:
      "I designed the relational schema and ERD for the full 15+ entity model, then contributed to enforcing those business rules directly in the database using triggers, stored procedures, and views. On the application side, I built backend API endpoints on Elysia.js (Bun runtime) with JWT authentication and implemented the Store Manager Dashboard in Next.js.",
    outcome:
      "A normalized, constraint-enforced database where operational rules are guaranteed at the data layer rather than trusted to application code, backed by a working API and dashboard.",
  },
  {
    slug: "hr-interview-system",
    title: "HR Interview Automation System",
    status: "Ongoing",
    description:
      "An independent project: a FastAPI + PostgreSQL backend with Pydantic validation, API-key authentication, rate limiting, and structured logging. I own the full delivery pipeline — GitHub Actions CI running pytest and Trivy image scanning, versioned images to GHCR, deployed live on Render.",
    tech: ["FastAPI", "PostgreSQL", "Docker", "GitHub Actions", "Trivy", "GHCR"],
    link: "https://github.com/ChethanaGimhan/hr-interview-system",
    challenge:
      "Shipping a backend service manually is error-prone and doesn't catch security issues before they reach production. I wanted a service where every change was automatically validated, tested, scanned, and deployed without manual steps.",
    approach:
      "I built the backend with FastAPI and PostgreSQL, adding Pydantic validation, API-key authentication, rate limiting, and structured logging, then containerized it with multi-stage Docker builds. I own the delivery pipeline end to end: GitHub Actions CI runs pytest and a Trivy image scan on every build, publishes versioned images to GHCR, and deploys to Render.",
    outcome:
      "Every build is tested and vulnerability-scanned before it ships, producing versioned images that deploy to a live service automatically — no manual builds, and known CVEs are caught before an image ever reaches production.",
  },
  {
    slug: "factumdb",
    title: "FactumDB — MySQL Forensic Correlation Tool",
    status: "Ongoing",
    description:
      "A Semester 5 cyber security group project building a digital forensics tool for MySQL. I built the utility adapter layer that parses raw forensic tool output into canonical models, and designed the SQLite persistence layer backing it.",
    tech: ["Python", "SQLite", "MySQL InnoDB Internals", "Digital Forensics"],
    link: "https://github.com/Factum-Labs",
    challenge:
      "Investigating a compromised or disputed database means reconstructing what actually happened at the storage layer — but the raw forensic tools each emit their own ad-hoc output format, and InnoDB tablespace files aren't designed to be correlated with binary logs.",
    approach:
      "I built the utility adapter layer wrapping ibd2sdi, innochecksum, ibd2sql, and mysqlbinlog, parsing their raw output into canonical models — including positional-field-to-schema mapping and table-level filtering for multi-table binary logs. I also designed and implemented the SQLite persistence layer covering schemas, physical records, binlog events, and utility-execution provenance, with normalized test fixtures validating each adapter.",
    outcome:
      "Still in active development. The adapter and persistence layers are implemented and test-covered, turning inconsistent forensic tool output into a queryable, provenance-tracked store.",
  },
  {
    slug: "nano-processor",
    title: "Nano Processor",
    description:
      "A custom 8-register processor designed from scratch in VHDL and deployed to a Basys 3 FPGA. I extended a 4-bit base core into a 5-bit datapath with a dedicated ALU and hardware multiplier, and built the decoder for a 13-bit instruction set.",
    tech: ["VHDL", "Xilinx Vivado", "Basys 3 FPGA", "Digital Design"],
    link: "https://github.com/ChethanaGimhan/nano-processor",
    challenge:
      "Understanding how a processor actually executes instructions requires building one, not reading about it — the project was to design a working custom processor from first principles and run it on real FPGA hardware.",
    approach:
      "I designed and implemented a custom 8-register processor from scratch, extending a 4-bit base core into a 5-bit datapath with a dedicated ALU and a hardware multiplier. I built the instruction decoder for a 13-bit instruction set supporting immediate load, negation, conditional register-compare jumps, and ALU operations, plus a 7-segment display driver for on-board output.",
    outcome:
      "A working processor running on real Basys 3 FPGA hardware, with results visible on the on-board 7-segment display — and a much deeper understanding of how instructions map onto physical digital logic.",
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
];
