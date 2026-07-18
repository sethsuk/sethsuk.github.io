export interface Project {
  slug: string
  number: string
  title: string
  tagline: string
  description: string
  githubUrl?: string
  liveUrl?: string
  reportUrl?: string
  imageUrl?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    slug: 'penncloud',
    number: '01',
    title: 'PennCloud',
    tagline: 'Distributed Cloud Storage & Email Platform',
    description:
      "PennCloud replicates the core functionality of Google Drive and Gmail — file uploads and downloads, sending and receiving email both within the platform and to external addresses. Under the hood, everything runs on a custom distributed key-value store modeled after Google's BigTable, with data replicated across primary and secondary nodes. Each node checkpoints its state to disk and maintains an operation log, so the system recovers cleanly from failures. We also snuck a multiplayer Blackjack game on top of the storage layer, then deployed the whole thing on AWS.",
    reportUrl: 'https://drive.google.com/file/d/1NWWr8HsYbwdtMePH_BEoCvLqEUDHMvdu/view?usp=sharing',
    imageUrl: '/projects/penncloud.png',
    featured: true,
  },
  {
    slug: 'wharton-ai-hackathon',
    number: '02',
    title: 'Wharton AI Hackathon',
    tagline: 'Prompt Hacking Challenge — 1st Place',
    description:
      'At the Wharton AI & Analytics Initiative Hackathon, our team reverse-engineered system instructions and crafted adversarial prompts to bypass RAG-based safeguards on a custom GPT chatbot. By analyzing model outputs and iteratively manipulating prompts, we exposed sensitive data and altered model behavior. The project earned 1st Place out of 60 teams for its demonstration of advanced prompt engineering and LLM security testing techniques.',
    reportUrl: 'https://drive.google.com/file/d/1WwlddF85a9cELVsOl_bC8MkKvfC638uo/view?usp=drive_link',
    imageUrl: '/projects/wharton_aiai.png',
    featured: true,
  },
  {
    slug: 'instalite',
    number: '03',
    title: 'InstaLite',
    tagline: 'Social Media App',
    description:
      'InstaLite is an Instagram clone built for scale — profiles, post feeds, nested comments, real-time chat, and profile discovery. The backend runs on Node.js with a MySQL schema on AWS RDS and file storage on S3, with custom indices and optimized queries keeping things fast. The most interesting piece was using ChromaDB vector embeddings to power image similarity search, letting users find celebrities who look like their profile photo.',
    githubUrl: 'https://github.com/sethsuk/InstaLite',
    reportUrl: 'https://drive.google.com/file/d/1xTLcAzz--ulZxU70RGf1uFbWh-M8OaWV/view?usp=sharing',
    imageUrl: '/projects/instalite.png',
    featured: true,
  },
  {
    slug: 'pennos',
    number: '04',
    title: 'PennOS',
    tagline: 'Custom UNIX-like Operating System',
    description:
      'PennOS is a UNIX-like operating system that runs as a single process on a host machine, using threads to simulate independent processes scheduled by a custom kernel. The kernel tracks each process through a PCB — PID, parent/child relationships, file descriptors, priority, and state — and handles signals with an init-based model for reaping zombies. Scheduling is priority-based round-robin across three weighted queues, firing on a 100ms clock tick. Storage is handled by a custom FAT file system with its own system calls. On top of all of that, we built a fully interactive shell with job control, I/O redirection, and scripting support.',
    imageUrl: '',
    featured: true,
  },
  {
    slug: 'nyc-rideshare',
    number: '05',
    title: 'NYC Rideshare',
    tagline: 'Fare Predictions from 125M NYC Rides',
    description:
      'NYC Rideshare predicts Uber fares using real-time inputs — pickup location, time of day, and current weather — trained on 125 million ride records and hourly weather data from 2021. The app is built on Node.js, React, and Express, backed by PostgreSQL on AWS RDS. Handling data at that scale required some care: custom indices and materialized views keep queries fast even against a table that large.',
    githubUrl: 'https://github.com/sethsuk/nyc-ride-share',
    reportUrl: 'https://drive.google.com/file/d/1bMusC5OYKGzh7-5lXMfJD56l302kN9yO/view?usp=drive_link',
    imageUrl: '/projects/nyc_rideshare.png',
    featured: false,
  },
  {
    slug: 'latitude-attitude',
    number: '06',
    title: 'Latitude Attitude',
    tagline: 'GPS From Image Features',
    description:
      'Latitude Attitude predicts geographic coordinates based solely on image features using deep learning. It uses a ResNet model with dropout and batch normalization, trained on over 3,600 samples with 150,000 input features, reaching a 34.6-meter RMSE on the test set. Baseline models using Linear Regression and Vision Transformers were also developed, and the project placed 2nd out of 200+ students.',
    liveUrl: 'https://huggingface.co/Latitude-Attitude',
    reportUrl: 'https://drive.google.com/file/d/1kwpAoEjS7kkosb9ZPJqIVA09sOAkEit2/view?usp=drive_link',
    imageUrl: '/projects/latitude_attitude.png',
    featured: false,
  },
]
