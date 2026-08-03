export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  challenge: string;
  approach: string;
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "agrisensenet",
    title: "AgriSenseNet (CropWise)",
    description:
      "Large-scale team project for a smart agriculture platform with a dashboard, backend, and streaming data pipeline. I worked as containerization engineer — writing Dockerfiles and publishing images to GitHub Container Registry for the backend and dashboard services.",
    tech: ["Docker", "GHCR", "GitHub", "DevOps"],
    link: "https://github.com/AgriSenseNet",
    challenge:
      "The platform was split across several independently developed services — a dashboard, a backend API, an Airflow pipeline, a Spark preprocessor, an MQTT-Kafka bridge, and an irrigation cron job. Each had different dependencies, and the team needed a consistent, reproducible way to run and deploy all of them together.",
    approach:
      "As containerization engineer, I wrote Dockerfiles for the backend and dashboard services, standardized how images were built, and published them to GitHub Container Registry (GHCR) so the rest of the team could pull consistent, versioned images instead of relying on local setup.",
    outcome:
      "The team could deploy and run the dashboard and backend the same way on any machine, which cut down on environment-specific bugs and made onboarding new contributors to those services faster.",
  },
  {
    slug: "hr-interview-system",
    title: "HR Interview Automation System",
    description:
      "A FastAPI + PostgreSQL backend for automating parts of the interview process, containerized with Docker. CI runs on GitHub Actions, including a Trivy vulnerability scan before images are published to GHCR.",
    tech: ["FastAPI", "PostgreSQL", "Docker", "GitHub Actions", "Trivy"],
    link: "https://github.com/ChethanaGimhan/hr-interview-system",
    challenge:
      "Shipping a backend service manually is error-prone and doesn't catch security issues before they reach production. I wanted a pipeline where every change was automatically built, scanned, and published without manual steps.",
    approach:
      "I built the backend with FastAPI and PostgreSQL, containerized it with Docker, then set up a GitHub Actions workflow that builds the image, runs a Trivy vulnerability scan against it, and only publishes to GHCR if the scan passes.",
    outcome:
      "Every commit to the main branch produces a scanned, versioned container image automatically — no manual builds, and known vulnerabilities are caught before an image ever gets published.",
  },
  {
    slug: "routex-bus-tracking",
    title: "RouteX — Bus Tracking App",
    description:
      "A Flutter mobile app for finding and booking buses — search, a booking flow, a bus details page, and a responsive UI built with bottom navigation and a floating action button.",
    tech: ["Flutter", "Dart"],
    link: "https://github.com/Blazer2020/RouteX",
    challenge:
      "Commuters needed a simple mobile way to find a bus route and book a seat without juggling multiple screens or a confusing flow.",
    approach:
      "I built the app in Flutter with a dedicated search screen, a booking flow, and a bus details page, tying it together with bottom navigation and a floating action button for quick access to the core action.",
    outcome:
      "A working mobile prototype covering the full search-to-booking flow with a responsive UI across screen sizes.",
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
];
