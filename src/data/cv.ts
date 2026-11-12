import type { Audience, CvData } from "./cv.types";

/**
 * CV content. Source: ML_Enginer_Cv_Juan_Florez.pdf (AI/ML Engineer version, Nov 2026).
 * Phone number and references are intentionally not published on the website.
 * Spanish text is a translation of the English; review before publishing changes.
 */
export const CV: CvData = {
  summary: {
    engineer: {
      en: "Software Engineer specializing in MLOps, DevOps and AI Engineering. I design, deploy and maintain scalable AI applications using distributed computing pipelines in cloud-native environments.",
      es: "Ingeniero de software especializado en MLOps, DevOps e ingeniería de IA. Diseño, despliego y mantengo aplicaciones de IA escalables con pipelines de computación distribuida en entornos cloud-native.",
    },
  },

  experience: [
    {
      id: "mas-global",
      title: { en: "Senior AI Engineer", es: "Ingeniero Sénior de IA" },
      org: "Mas Global Consulting",
      start: "2026-05",
      bullets: {
        engineer: [
          {
            en: "Architect multi-agent AI systems in which autonomous models collaborate and reason to solve intricate, multi-step business problems.",
            es: "Diseño sistemas de IA multiagente en los que modelos autónomos colaboran y razonan para resolver problemas de negocio complejos y de varios pasos.",
          },
          {
            en: "Design and maintain robust CI/CD pipelines for seamless, scalable cloud deployments of machine learning applications, from development to production.",
            es: "Diseño y mantengo pipelines de CI/CD robustos para desplegar aplicaciones de machine learning en la nube de forma escalable, desde el desarrollo hasta producción.",
          },
          {
            en: "Implement intelligent model routing that dynamically directs each task to the most capable or cost-effective model for the query.",
            es: "Implemento enrutamiento inteligente de modelos que dirige cada tarea al modelo más capaz o más rentable según la consulta.",
          },
        ],
      },
    },
    {
      id: "traffic-tech",
      title: { en: "Senior MLOps/Platform Architect", es: "Arquitecto Sénior de MLOps/Plataforma" },
      org: "Traffic Tech",
      start: "2025-08",
      end: "2026-04",
      bullets: {
        engineer: [
          {
            en: "Designed and implemented a scalable, fault-tolerant backend for running AI agents with Kubernetes, Azure cloud-native services, Temporal.io and infrastructure as code (Terraform).",
            es: "Diseñé e implementé un backend escalable y tolerante a fallos para ejecutar agentes de IA con Kubernetes, servicios cloud-native de Azure, Temporal.io e infraestructura como código (Terraform).",
          },
          {
            en: "Set the guidelines for developing Python packages and implementing CI/CD pipelines with GitHub Actions.",
            es: "Definí las guías para desarrollar paquetes de Python e implementar pipelines de CI/CD con GitHub Actions.",
          },
          {
            en: "Designed AI-native automations for a CRM and a TMS using Python and TypeScript.",
            es: "Diseñé automatizaciones nativas de IA para un CRM y un TMS con Python y TypeScript.",
          },
          {
            en: "Set up an observability pipeline for AI agents based on Langfuse.",
            es: "Implementé un pipeline de observabilidad para agentes de IA basado en Langfuse.",
          },
          {
            en: "Deployed inference pipelines using vLLM with Ray/KServe on NVIDIA GPUs.",
            es: "Desplegué pipelines de inferencia con vLLM sobre Ray/KServe y GPUs NVIDIA.",
          },
          {
            en: "Set up AI model serving and training in a hybrid cloud (Azure + self-hosted data center).",
            es: "Configuré el servicio y el entrenamiento de modelos de IA en una nube híbrida (Azure + centro de datos propio).",
          },
        ],
      },
    },
    {
      id: "lyric-tech",
      title: { en: "ML Engineer/MLOps", es: "Ingeniero de ML/MLOps" },
      org: "Lyric Tech",
      start: "2025-01",
      end: "2025-08",
      bullets: {
        engineer: [
          {
            en: "Designed and deployed distributed training and inference pipelines on Kubernetes with Ray.",
            es: "Diseñé y desplegué pipelines distribuidos de entrenamiento e inferencia en Kubernetes con Ray.",
          },
          {
            en: "Set guidelines for versioning through containerization, versioned environments and managed container registries with GitHub Actions and Argo Workflows.",
            es: "Definí guías de versionamiento mediante contenedores, entornos versionados y registros de contenedores gestionados con GitHub Actions y Argo Workflows.",
          },
          {
            en: "Maintained Python ML libraries, promoted good coding practices and implemented observability pipelines with Sentry.",
            es: "Mantuve librerías de ML en Python, promoví buenas prácticas de programación e implementé pipelines de observabilidad con Sentry.",
          },
          {
            en: "Implemented training and evaluation pipelines with MLflow for time-series models in logistics.",
            es: "Implementé pipelines de entrenamiento y evaluación con MLflow para modelos de series de tiempo en logística.",
          },
        ],
      },
    },
    {
      id: "reflejos",
      title: { en: "ML Engineer/MLOps", es: "Ingeniero de ML/MLOps" },
      org: "Reflejos",
      start: "2024-12",
      end: "2025-03",
      bullets: {
        engineer: [
          {
            en: "Applied state-of-the-art diffusion models to conditioned video-to-video generation.",
            es: "Apliqué modelos de difusión de última generación a la generación condicionada de video a video.",
          },
          {
            en: "Developed multi-node ComfyUI workflows for creating visual effects for video.",
            es: "Desarrollé flujos de trabajo multinodo en ComfyUI para crear efectos visuales en video.",
          },
          {
            en: "Configured cloud instances with NVIDIA GPUs to run open-source, state-of-the-art diffusion models written in PyTorch.",
            es: "Configuré instancias en la nube con GPUs NVIDIA para ejecutar modelos de difusión de código abierto y de última generación escritos en PyTorch.",
          },
        ],
      },
    },
    {
      id: "zapata-ml",
      title: { en: "ML Engineer/MLOps", es: "Ingeniero de ML/MLOps" },
      org: "Zapata AI",
      start: "2024-02",
      end: "2024-10",
      bullets: {
        engineer: [
          {
            en: "Built distributed training and inference pipelines on Ray + Kubernetes with GPU and JIT (PyTorch/TensorFlow) optimizations.",
            es: "Construí pipelines distribuidos de entrenamiento e inferencia sobre Ray + Kubernetes con optimizaciones de GPU y JIT (PyTorch/TensorFlow).",
          },
          {
            en: "Developed and deployed generative time-series models (GANs, VAEs, diffusion models, normalizing flows) as REST API endpoints.",
            es: "Desarrollé y desplegué modelos generativos de series de tiempo (GANs, VAEs, modelos de difusión, normalizing flows) como endpoints de una API REST.",
          },
          {
            en: "Owned MLOps: CI/CD (GitHub Actions), evaluation and benchmarking, and scalable hyperparameter tuning.",
            es: "Fui responsable de MLOps: CI/CD (GitHub Actions), evaluación y benchmarking, y búsqueda escalable de hiperparámetros.",
          },
        ],
      },
    },
    {
      id: "zapata-swe",
      title: { en: "Software Engineer", es: "Ingeniero de Software" },
      org: "Zapata AI",
      start: "2022-06",
      end: "2022-12",
      bullets: {
        engineer: [
          {
            en: "Built Ray + Kubernetes pipelines on AWS for scalable training.",
            es: "Construí pipelines con Ray + Kubernetes en AWS para entrenamiento escalable.",
          },
          {
            en: "Designed workflow-orchestrator APIs and observability to align AI developers' needs with the MLOps infrastructure.",
            es: "Diseñé APIs de un orquestador de flujos de trabajo y su observabilidad para alinear las necesidades de los desarrolladores de IA con la infraestructura de MLOps.",
          },
          {
            en: "Co-developed and optimized ML libraries (e.g., quantum error correction code search), delivering 50× speed-ups with JIT compilation and distributed computing.",
            es: "Co-desarrollé y optimicé librerías de ML (p. ej., búsqueda de códigos de corrección de errores cuánticos), logrando aceleraciones de 50× con compilación JIT y computación distribuida.",
          },
        ],
      },
    },
    {
      id: "hubrain-tech",
      title: { en: "ML Engineer/MLOps", es: "Ingeniero de ML/MLOps" },
      org: "Human Brain Technologies S.A.S.",
      start: "2021-02",
      end: "2023-06",
      bullets: {
        engineer: [
          {
            en: "Designed and deployed retrieval-augmented generation (RAG) systems.",
            es: "Diseñé y desplegué sistemas de generación aumentada por recuperación (RAG).",
          },
          {
            en: "Built end-to-end legal-document ingestion: web scraping into document databases, information extraction and data versioning.",
            es: "Construí la ingesta de documentos legales de extremo a extremo: web scraping hacia bases de datos documentales, extracción de información y versionamiento de datos.",
          },
          {
            en: "Authored research on NLP and epidemics.",
            es: "Fui autor de investigaciones sobre NLP y epidemias.",
          },
        ],
      },
    },
    {
      id: "contraloria",
      title: { en: "ML Engineer", es: "Ingeniero de ML" },
      org: "Contraloría General de la República",
      start: "2021-10",
      end: "2022-03",
      bullets: {
        engineer: [
          {
            en: "Orchestrated, scaled and monitored a news-ingestion pipeline covering 100+ sites per day and delivering data to SQL databases.",
            es: "Orquesté, escalé y monitoreé un pipeline de ingesta de noticias de más de 100 sitios al día que entregaba datos a bases de datos SQL.",
          },
          {
            en: "Built and deployed NER pipelines to catalog news and 5,000+ public contracts.",
            es: "Construí y desplegué pipelines de reconocimiento de entidades (NER) para catalogar noticias y más de 5.000 contratos públicos.",
          },
          {
            en: "Engineered a distributed relevance search that matches news to contracts and automatically flags violations.",
            es: "Desarrollé una búsqueda distribuida de relevancia que relaciona noticias con contratos y señala automáticamente posibles incumplimientos.",
          },
        ],
      },
    },
    {
      id: "javeriana",
      title: { en: "Data Science Instructor", es: "Profesor de Ciencia de Datos" },
      org: "Pontificia Universidad Javeriana",
      start: "2023-09",
      end: "2023-11",
      bullets: {
        engineer: [
          {
            en: "Taught real-world applications of machine learning with hands-on exercises on Kaggle datasets.",
            es: "Enseñé aplicaciones reales de machine learning con ejercicios prácticos sobre conjuntos de datos de Kaggle.",
          },
          {
            en: "Provided guidelines on the software development skills needed to work in fast-paced, cross-disciplinary teams.",
            es: "Di pautas sobre las habilidades de desarrollo de software necesarias para trabajar en equipos interdisciplinarios de ritmo rápido.",
          },
          {
            en: "Coached cross-functional teams on MLOps and development practices and on distributed tools for scalable AI.",
            es: "Asesoré a equipos multifuncionales en prácticas de MLOps y desarrollo, y en herramientas distribuidas para IA escalable.",
          },
        ],
      },
    },
  ],

  education: [
    {
      id: "msc",
      degree: { en: "M.Sc. in Mathematics", es: "Maestría en Matemáticas" },
      institution: "Universidad Nacional de Colombia",
      date: "2024-11",
      note: {
        en: "Thesis on mathematical methods for the analysis of solid-state physics.",
        es: "Tesis sobre métodos matemáticos para el análisis de la física del estado sólido.",
      },
      audiences: ["engineer", "research"],
    },
    {
      id: "bsc",
      degree: { en: "B.Sc. in Physics", es: "Pregrado en Física" },
      institution: "Universidad Nacional de Colombia",
      date: "2019-06",
      note: {
        en: "Thesis on the numerical simulation of traffic in Bogotá.",
        es: "Tesis sobre la simulación numérica del tráfico en Bogotá.",
      },
      audiences: ["engineer", "research"],
    },
  ],

  skills: [
    {
      id: "programming",
      label: { en: "Programming", es: "Programación" },
      items: ["Python", "TypeScript", "Bash", "SQL", "C++", "CUDA"],
      audiences: ["engineer", "research"],
    },
    {
      id: "ai-dev",
      label: { en: "AI-assisted development", es: "Desarrollo asistido por IA" },
      items: ["Claude Code", "Codex", "OpenClaw"],
      audiences: ["engineer"],
    },
    {
      id: "cloud",
      label: { en: "Cloud", es: "Nube" },
      items: [
        "Azure",
        "AKS",
        "Container Apps",
        "AWS",
        "EC2",
        "S3",
        "GCP",
        "GKE",
        "DigitalOcean",
        "MongoDB Atlas",
      ],
      audiences: ["engineer"],
    },
    {
      id: "mlops",
      label: { en: "MLOps & orchestration", es: "MLOps y orquestación" },
      items: [
        "Docker",
        "Kubernetes",
        "GitHub Actions",
        "Ray",
        "Airflow",
        "Temporal",
        "Kafka",
        "Flink",
      ],
      audiences: ["engineer"],
    },
    {
      id: "ml",
      label: { en: "ML & AI", es: "ML e IA" },
      items: ["PyTorch", "TensorFlow", "Hugging Face", "LangChain", "Langfuse", "Tesseract"],
      audiences: ["engineer", "research"],
    },
    {
      id: "data",
      label: { en: "Data", es: "Datos" },
      items: ["PostgreSQL", "SQL Server", "SQLite", "MongoDB", "Qdrant", "Dremio", "Iceberg"],
      audiences: ["engineer"],
    },
    {
      id: "tools",
      label: { en: "Tools", es: "Herramientas" },
      items: [
        "Git",
        "pytest",
        "pyright",
        "Ruff",
        "pdb",
        "gdb",
        "cProfile",
        "nvprof",
        "FastAPI",
        "gRPC",
        "Selenium",
      ],
      audiences: ["engineer"],
    },
    {
      id: "methods",
      label: { en: "Methodologies", es: "Metodologías" },
      items: ["Scrum", "Kanban"],
      audiences: ["engineer"],
    },
  ],

  languages: [
    { name: { en: "Spanish", es: "Español" }, level: "C2" },
    { name: { en: "English", es: "Inglés" }, level: "C1" },
    { name: { en: "Russian", es: "Ruso" }, level: "A1" },
  ],

  activities: [
    {
      id: "hubrain",
      role: { en: "Founder", es: "Fundador" },
      name: { en: "Hubrain", es: "Hubrain" },
      url: "https://gitlab.com/hubrain",
      start: "2021-01",
      description: {
        en: "Group of AI practitioners who love open-source software and sharing knowledge.",
        es: "Grupo de practicantes de IA apasionados por el software de código abierto y por compartir conocimiento.",
      },
      audiences: ["engineer", "research"],
    },
    {
      id: "ml-seminar",
      role: { en: "Co-organizer", es: "Coorganizador" },
      name: { en: "AI Seminar", es: "Seminario de IA" },
      start: "2020-05",
      end: "2020-12",
      links: [
        { label: { en: "Code", es: "Código" }, url: "https://gitlab.com/hubrain/seminario-ml" },
      ],
      audiences: ["engineer", "research"],
    },
    {
      id: "nlp-seminar",
      role: { en: "Co-organizer", es: "Coorganizador" },
      name: { en: "NLP Seminar", es: "Seminario de NLP" },
      start: "2020-05",
      end: "2020-12",
      links: [
        { label: { en: "Code", es: "Código" }, url: "https://gitlab.com/hubrain/seminario-nlp" },
      ],
      audiences: ["engineer", "research"],
    },
  ],
};

/** The parts of the CV that belong to one version, in page order. */
export function cvFor(audience: Audience) {
  return {
    summary: CV.summary[audience],
    experience: CV.experience.filter((entry) => (entry.bullets[audience]?.length ?? 0) > 0),
    education: CV.education.filter((entry) => entry.audiences.includes(audience)),
    skills: CV.skills.filter((group) => group.audiences.includes(audience)),
    languages: CV.languages,
    activities: CV.activities.filter((entry) => entry.audiences.includes(audience)),
  };
}

/** True when a version has enough content to be shown. */
export function hasCv(audience: Audience): boolean {
  return CV.summary[audience] !== undefined && cvFor(audience).experience.length > 0;
}
