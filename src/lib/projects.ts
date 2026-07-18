export interface Project {
  slug: string
  number: string
  title: string
  tagline: string
  description: string
  githubUrl?: string
  liveUrl?: string
  imageUrl?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    slug: 'latitude-attitude',
    number: '01',
    title: 'Latitude Attitude',
    tagline: 'GPS From Image Features',
    description:
      'Latitude Attitude predicts geographic coordinates based solely on image features using deep learning. It uses a ResNet model with dropout and batch normalization, trained on over 3,600 samples with 150,000 input features, reaching a 34.6-meter RMSE on the test set. Baseline models using Linear Regression and Vision Transformers were also developed, and the project placed 2nd out of 200+ students.',
    githubUrl: '',
    liveUrl: '',
    imageUrl: '',
    featured: true,
  },
  {
    slug: 'instalite',
    number: '02',
    title: 'InstaLite',
    tagline: 'Social Media App',
    description:
      'InstaLite is a full-featured social media platform inspired by Instagram, featuring user profiles, image-based search, post feeds, nested comments, real-time chat, and profile discovery. The backend is built and tested with Node.js, powered by RESTful APIs that handle user interactions and content management. Data is managed through a scalable schema on AWS RDS (MySQL) and S3, with auxiliary tables and optimized queries ensuring consistency and efficient access across the application. Additionally, InstaLite relied on the vector database ChromaDB and image embeddings to support similarity queries and actors that look similar to the user profile picture.',
    githubUrl: '',
    liveUrl: '',
    imageUrl: '',
    featured: true,
  },
  {
    slug: 'nyc-rideshare',
    number: '03',
    title: 'NYC Rideshare',
    tagline: 'Fare Predictions from 125M NYC Rides',
    description:
      'NYC Rideshare is a full-stack webapp that predicts Uber prices using real-time weather, location, and time inputs. Powered by Node.js, React, and Express, it lets users query specific and aggregated ride information, create accounts, and log rides. It uses over 125 million Uber ride records and hourly weather data from 2021, which is stored on an AWS RDS (PostgreSQL) instanced, with optimizations like custom indices and materialized views.',
    githubUrl: '',
    liveUrl: '',
    imageUrl: '',
    featured: true,
  },
  {
    slug: 'cvd-risk-prediction',
    number: '04',
    title: 'CVD Risk Prediction',
    tagline: 'Modeling Health From Habits',
    description:
      'This project is a machine learning pipeline that predicts cardiovascular disease risk using data from the CDC BRFSS survey. It tackles class imbalance with SMOTEENN resampling and employs classic feature engineering techniques like one-hot encoding, K-means clustering, and correlation pruning to improve performance and interpretability. Models including Random Forests and Neural Networks are trained with class-weighted loss, hyperparameter tuning, and threshold calibration, boosting the F1 score from a 0.11 baseline to 0.37.',
    githubUrl: '',
    liveUrl: '',
    imageUrl: '',
    featured: true,
  },
  {
    slug: 'franklin-benchmark',
    number: '05',
    title: 'Franklin Benchmark',
    tagline: 'Human Benchmark for Penn',
    description:
      'A full-stack web app where Penn students can compete in minigames like reaction time, quick math, and button masher. It’s uses React, Express, and PostgreSQL, with Google sign-in functionality via encrypted JWTs for easier user registrations. The scores are stored on Supabase, allowing for real time updates.',
    githubUrl: '',
    liveUrl: '',
    imageUrl: '',
    featured: false,
  },
  {
    slug: 'wharton-ai-hackathon',
    number: '06',
    title: 'Wharton AI Hackathon',
    tagline: 'Prompt Hacking Challenge — 1st Place',
    description:
      'At the Wharton AI & Analytics Initiative Hackathon, our team reverse-engineered system instructions and crafted adversarial prompts to bypass RAG-based safeguards on a custom GPT chatbot. By analyzing model outputs and iteratively manipulating prompts, we exposed sensitive data and altered model behavior. The project earned 1st Place out of 60 teams for its demonstration of advanced prompt engineering and LLM security testing techniques.',
    githubUrl: '',
    liveUrl: '',
    imageUrl: '',
    featured: false,
  },
  {
    slug: 'penncloud',
    number: '07',
    title: 'PennCloud',
    tagline: 'Distributed Cloud Storage & Email Platform',
    description:
      "PennCloud is a distributed cloud storage and email platform that replicates core functionality of Google Drive and Gmail, supporting file upload/download and sending/receiving mail both within the PennCloud ecosystem and to external addresses. The backend is built on a custom distributed key-value store modeled after Google's BigTable, with data replicated across primary and secondary nodes to provide multi-node crash fault tolerance. Each node periodically checkpoints its state to disk and maintains an operation log to support recovery after failure. On top of this storage layer, we built a multiplayer Blackjack minigame, and deployed the full system on AWS.",
    githubUrl: '',
    liveUrl: '',
    imageUrl: '',
    featured: false,
  },
  {
    slug: 'pennos',
    number: '08',
    title: 'PennOS',
    tagline: 'Custom UNIX-like Operating System',
    description:
      'PennOS is a custom UNIX-like operating system that runs as a single process on a host OS, using the spthread library to simulate independent processes as threads scheduled by a custom kernel. The kernel maintains process control blocks (PCBs) tracking PID, parent/child relationships, file descriptors, priority, and state (running, blocked, stopped, zombie), with custom signal handling (P_SIGSTOP, P_SIGCONT, P_SIGTERM) and an init-based model for reaping orphaned and zombie processes. A priority-based round-robin scheduler runs on a 100ms clock tick across three weighted priority queues, idling via sigsuspend when no processes are runnable. PennOS mounts a custom PennFAT file system, with system calls (s_open, s_read, s_write, s_close, s_lseek, s_unlink) backed by per-process and system-wide file descriptor tables. On top of this, we built an interactive shell with built-in commands (cat, ls, cp, mv, rm, chmod, ps, kill, nice, jobs, bg, fg, etc.), I/O redirection, job control, and shell scripting, along with structured logging for scheduling and process lifecycle events.',
    githubUrl: '',
    liveUrl: '',
    imageUrl: '',
    featured: false,
  },
]
