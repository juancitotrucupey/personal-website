# CV — source content

> Extracted 2026-10-29 from https://trucupey.notion.site (pages "Experience" = long CV PDF, "CV" = 1-page CV PDF).
> Kept close to the original wording. See `README.md` for inconsistencies to resolve before publishing.
> Personal references (names, phones, emails of third parties) and the phone number were intentionally NOT copied — they should not go on a public site.

## Identity

- **Name:** Juan Sebastián Flórez Jiménez
- **Tagline (Notion home):** I love working on AI and I have a soft spot for non standard paradigms of computation.
- **Summary (1-page CV):** I am a Machine Learning Engineer with experience in software development and a strong physics and mathematics background.

## Links

- Email: jsflorezj@gmail.com
- GitHub: https://github.com/juancitotrucupey
- GitLab: https://gitlab.com/trucupey
- LinkedIn: https://www.linkedin.com/in/juan-florez-mad-scientist/
- Twitter/X: https://twitter.com/mongosorongo

## Experience

### ML Engineer / Data Scientist — Lyric Tech (Remote) · Jan 2025 – Present

Short version:

- Implement and optimize pipelines for distributed training of ML models using Ray and Kubernetes.
- Implement observability tools for distributed ML pipelines.
- Developed and maintained Python packages to train and serve ML models in production.

Core technologies: Python, bash, SQL · Ray, MLflow, Optuna, Pydantic · time series forecasting · GCP, AWS · Docker, GitHub Actions, Kubernetes, KubeRay · S3 · Scrum · Git, Jira, VS Code, Confluence, Grafana, Streamlit, pdb, pylance, pyright, mypy, ruff

### ML Engineer / Data Scientist — Zapata AI (Remote) · Feb 2024 – Oct 2024

Short version:

- Developed end-to-end ML applications for financial time series analysis using generative AI, delivering models that surpassed the client's legacy models.
- Designed tailored hyper-parameter tuning and evaluation pipelines for generative models following the customer use case.
- Developed and maintained Python packages used to serve ML models in production.

Long version:

- Developed generative models for financial time series which outperformed the customer's legacy models.
- Optimized model inference and training using JIT tools provided by PyTorch and TensorFlow.
- Optimized model inference and training using GPUs.
- Deployed various generative models for financial time series as RESTful APIs.
- Designed an interactive dashboard for generative time series models which allowed querying various models and comparing their outputs.
- Designed an evaluation pipeline for generative time series models based on the metrics used to evaluate state-of-the-art generative models.
- Designed a hyper-parameter tuning pipeline for generative time series models and used distributed computing frameworks to speed up the exploration.
- Obtained a 2x improvement on the metrics by running a hyper-parameter tuning pipeline.
- Benchmarked GANs, diffusion models, variational autoencoders and normalizing flows according to the customer use case.
- Developed and maintained a Python library for training and fine-tuning generative models for time series.
- Implemented GitHub Actions to guarantee the reliability of the Python library in various production environments.

Core technologies: Python, bash, SQL · PyTorch, TensorFlow, MLflow, Optuna, MLServer, Ray, Scikit-Learn, Pydantic · generative AI, time series forecasting · AWS, EC2 · Docker, GitHub Actions, Kubernetes · Dremio, S3 · Scrum, Kanban · Git, Jira, VS Code, Confluence, Grafana, Streamlit, pdb, pylance, pyright, mypy, ruff

### Teacher — Pontificia Universidad Javeriana, Bogotá (Part-time, remote) · Sep 2023 – Nov 2023

- Gave lectures on Data Science and Machine Learning to 20+ students.
- Developed Jupyter notebooks to put the content of the lectures into practice.
- Provided real-world examples of ML techniques with hands-on exercises on Kaggle datasets.
- Provided guidelines on the software development skills needed to work in a fast-paced cross-disciplinary team.

Core technologies: Python, bash, SQL · PyTorch, TensorFlow, NumPy, Dask · EDA, NLP, statistics, neural networks · MongoDB Atlas, GCP · MongoDB, SQLite · Git

### ML (Ops) Engineer — Human Brain Technologies S.A.S. (Part-time, remote) · Feb 2021 – Jun 2023

Short version:

- Designed RAG systems for legal texts using custom semantic embeddings.
- Implemented scraping pipelines for publicly available legal texts and news.
- Conducted research on applied NLP.

Long version:

- Implemented a scraping pipeline for news extracting more than 10,000 articles from X.
- Implemented an automatic topic extraction and identification pipeline for news which processed more than ⟨MISSING NUMBER⟩.
- Implemented an automatic scraping pipeline to extract publicly available legal documents and store them in document-oriented databases.
- Implemented an OCR pipeline to extract text from PDFs and store it in document-oriented databases.
- Trained custom semantic embeddings for Colombian legal texts and benchmarked them against publicly available embedding models, improving performance for the specific use case.
- Deployed a semantic similarity retrieval system as a RESTful API.
- Implemented a RAG application for retrieving legally relevant texts from user queries and benchmarked open and commercial generative language models.
- Designed a dashboard to interact with the legal-document RAG application.
- Led the development of a Python package for the analysis of interviews, used by Universidad de La Sabana in a research project.
- Co-authored one paper on applied NLP and one paper on statistics applied to epidemics.
- Implemented an ML model to analyze the effect of socio-economic factors on Colombian standardized tests, using interpretable ML to uncover hidden patterns.

Core technologies: Python, bash, SQL · PyTorch, TensorFlow, HuggingFace, Scikit-learn, spaCy, NLTK, NumPy, Tesseract, SHAP, NetworkX, LangChain, LlamaIndex, SentenceTransformers · Pathos, cProfile, SnakeViz · NLP, NER, entity disambiguation, topic identification, OCR, interpretable ML · MongoDB Atlas · MongoDB, PostgreSQL, SQLite · Kanban · Selenium, cron, Streamlit, Dash, BeautifulSoup, Trafilatura, FastAPI, Uvicorn, OpenAI API, Qdrant, Chroma · Docker, GitLab CI/CD

### Software Developer Intern — Zapata AI (Remote internship) · Jun 2022 – Dec 2022

- Developed a workflow orchestrator for distributed computing of resource-intensive tasks based on Ray.
- Co-designed the orchestrator's API using the design thinking framework, and enhanced its versatility.
- Co-developed a Python library for efficiently searching quantum error correction codes.
- Optimized the performance of a Python library by a factor of 50x using JIT tools and distributed computing packages.
- Developed observability tools for Python.
- Co-designed the pipeline for deploying distributed computing workflows using Ray on AWS with EC2 instances.

Core technologies: Python, bash · Ray, Numba, Pathos, cProfile, SnakeViz, multiprocessing · pytest, pydantic, coverage, pdb, pylance, pyright, mypy · AWS, EC2 · Docker, GitHub Actions, Kubernetes · SQLite · Scrum, Kanban · Git, Jira, VS Code

### Data Scientist / ML Engineer — Contraloría General de la República (Full-time) · Oct 2021 – Mar 2022

- Created an automatic news scraping pipeline consuming 100+ news sites daily into SQL databases.
- Implemented a named-entity extraction pipeline to catalog news and public contracts.
- Implemented a relevant-document search pipeline matching contracts and news, to automatically flag potential violations of public contracts.
- Used distributed computing to cross-match daily news against the public contracts of interest (⟨5,000+ vs 1,000+ — see README⟩).

Core technologies: Python, bash, SQL · PyTorch, HuggingFace, Scikit-learn, spaCy, NLTK, PySpark · Dask, Pathos, cProfile, SnakeViz · NLP, NER, entity disambiguation · AzureML, Azure VMs · SQL Server · Kanban · Git, VS Code, Azure DevOps, Selenium, cron, SQLAlchemy, BeautifulSoup, Trafilatura

### Quantum Programmer — Quantum Widget Company (Remote internship) · Jun 2017 – Jan 2018

- Developed and implemented algorithms for the D-Wave 2000Q quantum computer using the D-Wave Python API.
- Translated trajectory optimization problems into QUBO problems and solved them on the D-Wave 2000Q.
- Trained autoencoders and Restricted Boltzmann Machines and benchmarked them against generative models using the D-Wave 2000Q.

Core technologies: Python, bash, C++ · TensorFlow, Scikit-learn, NumPy · generative AI · Git, GitHub

### Research Assistant — Simulation of Physical Systems research group (UNAL) · 2017 – 2019

- Implemented high-performance C++ code to simulate traffic dynamics in Bogotá using cellular automaton models, with results relevant for public policy.
- Implemented high-performance C++ and CUDA code to simulate immiscible fluids using the Lattice Boltzmann Method.
- Presented results at national and international events.

Core technologies: C++, Python, bash · CUDA, OpenMP, Open MPI, SLURM, Eigen · Git, gdb, Valgrind, perf, nvprof

## Education

- **M.Sc. in Mathematics** — Universidad Nacional de Colombia · Mar 2019 – Nov 2024
  Thesis: _The Non-Commutative Brillouin Torus, a Non-commutative Geometry perspective_ (applications of Non-Commutative Geometry to solid state physics). Thesis files: https://drive.google.com/drive/folders/1VXjomd_6Oim7oigK2n3sZYwsrhWClumS
- **B.Sc. in Physics** — Universidad Nacional de Colombia · Feb 2013 – Dec 2018 (1-page CV says Jun 2019)
  Thesis: _Simulation of traffic bottlenecks using cellular automaton_ (numerical simulation of traffic in Bogotá). Thesis PDF: https://drive.google.com/file/d/1iW4wcanFF1jaBMap7b8ekN22cE6Hvyzb/view · Code: https://github.com/juancitotrucupey/Depured_Multilane

## Publications

- **Learning from Students' Perception on Professors Through Opinion Mining** — ICAI 2020 (International Conference on Applied Informatics). DOI: 10.1007/978-3-030-61702-8_23 · https://link.springer.com/chapter/10.1007/978-3-030-61702-8_23
  NLP to identify topics in a corpus of student comments; sentiment analysis with ML/NLP.
- **Percentage of reported Covid-19 cases in Colombia: Estimating the true scale of the pandemic** — medRxiv preprint. DOI: 10.1101/2020.12.30.20249052 · https://www.medrxiv.org/content/10.1101/2020.12.30.20249052v1
  Case fatality rate for Covid-19 in Colombia and some regions/cities, adjusting for delay from onset to death.

## Presentations

- **Traffic and Granular Flow** — Navarra, Spain · Jul 2019. Poster: _Study of a traffic bottleneck using a cellular automaton model_. Poster PDF: https://drive.google.com/file/d/18sZLUpGvvyk6az-Vn1P42fnXg804X_fL/view
- **XXVII National Congress of Physics** — Cartagena, Colombia · Oct 2017. Poster: _Modelling immiscible fluids using the LBM (Lattice Boltzmann Method)_

## Workshops

- **2nd Latin American School on Parallel Programming for HPC** — São Paulo, Brazil · Dec 2–13, 2019. Modern HPC architectures and how to use them. Course code: https://github.com/advinstai/hpc-school2019
- **Uniandes SRI-2019 on Geometry and Theoretical Physics** — Villa de Leyva, Colombia · Jul 22–27, 2019. Talks on the connections between Non-Commutative Geometry and physics, from conformal theories of spacetime to stabilizer algebras and their applications to quantum mechanics.
- **First Workshop on the Lattice Boltzmann Method** — Universidad Nacional de Colombia, Bogotá · Dec 5–16, 2017. Introduction to the LBM with hands-on sessions. Resources: https://github.com/ijpulidos/1stLBMunal

## Extracurriculars

- **Founder, Hubrain (Human Brain Technologies)** · Jan 2021 – present — group of passionate AI practitioners who love open source software and sharing knowledge.
- **Co-organizer, Artificial Intelligence Seminar by Hubrain** · May 2020 – Dec 2020 — seminar on the tools used in AI; first cycle on the basics of Machine Learning.
- **Co-organizer, Introduction to NLP Seminar by Hubrain** · May 2020 – Dec 2020 — introductory NLP seminar using PyTorch; first cycle on pre-transformer language models.

## Awards

- Bronze medal, First College Physics Olympiad of Latin America and the Caribbean.
- Finalist, XIX College Mathematics Olympiad organized by Universidad Antonio Nariño.

## Skills (1-page CV grouping)

- **Languages:** Python, Bash, SQL, C++, CUDA
- **Cloud:** AWS, MongoDB Atlas, GCP, DigitalOcean
- **Infra / MLOps:** Docker, GitHub Actions, Ray, Kubernetes, EC2
- **ML:** PyTorch, TensorFlow, LangChain, Tesseract, HuggingFace
- **Data:** MongoDB, SQL Server, PostgreSQL, SQLite, Qdrant, Dremio
- **Process:** Scrum, Kanban
- **Dev tools:** Git, pdb, gdb, pytest, pyright, ruff, Selenium, FastAPI, cProfile, nvprof

## Human languages

Spanish (native, C2) · English (C1, TOEFL iBT 104) · Russian (A1)
