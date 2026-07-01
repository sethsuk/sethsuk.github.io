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
      'Placeholder — describe what the project does, why it matters, and what you learned.',
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
      'Placeholder — describe what the project does, why it matters, and what you learned.',
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
      'Placeholder — describe what the project does, why it matters, and what you learned.',
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
      'Placeholder — describe what the project does, why it matters, and what you learned.',
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
      'Placeholder — describe what the project does, why it matters, and what you learned.',
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
      'Placeholder — describe what the project does, why it matters, and what you learned.',
    githubUrl: '',
    liveUrl: '',
    imageUrl: '',
    featured: false,
  },
  {
    slug: 'wharton-datathon',
    number: '07',
    title: 'Wharton Datathon',
    tagline: 'Data Analytics Competition — 3rd Place',
    description:
      'Placeholder — describe what the project does, why it matters, and what you learned.',
    githubUrl: '',
    liveUrl: '',
    imageUrl: '',
    featured: false,
  },
]
