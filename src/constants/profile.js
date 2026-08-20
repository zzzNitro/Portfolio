// Canonical content for the site. React components, JSON-LD, and the
// meta tags in _document.js all read from this file.
// NOTE: public/resume.json and public/llms.txt are hand-maintained static
// files — keep them in sync with this file when experience/skills/projects change.

const person = {
  name: 'Pablo Benito',
  role: 'Full Stack Developer',
  location: { city: 'Santiago', country: 'Chile' },
  email: 'pablo.benito@rocketmail.com',
  siteUrl: 'https://www.dexforge.com',
  github: 'https://github.com/zzzNitro',
  linkedin: 'https://www.linkedin.com/in/pablo-benito-nunez/',
  tagline: 'Full Stack Developer | Go, Python, JS/TS, SQL',
  metaDescription:
    'Full stack developer with 3+ years shipping production systems — Go microservices at Mercado Libre, Django APIs at Spot Health. React, Next.js, TypeScript, PostgreSQL, AI-assisted dev workflows.',
  summary:
    "Full stack developer with 3+ years building production systems: Go microservices at Mercado Libre and Python/Django APIs at an early-stage health startup. I ship end-to-end features across React, Next.js, TypeScript, and PostgreSQL. AI development tools such as Claude Code and Cursor are part of my daily workflow, applied with a clear understanding of what the code is doing. I have a track record of taking side projects from concept to working product, a strong grounding in automated testing, CI/CD, and clean, scalable architecture, and I deliver independently in small, fast-moving teams where priorities shift.",
}

const experience = [
  {
    id: 'mercadolibre',
    company: 'Mercado Libre',
    title: 'Software Developer',
    start: '2023-03',
    end: null,
    location: 'Santiago, Chile',
    highlights: [
      'Reduced response time ~50% across production Go microservices serving around 8k users by refactoring aggregator endpoints to use goroutines',
      'Cut technical debt and shortened new-developer onboarding from 6 to 4 weeks by establishing scalable, maintainable architecture patterns, rigorous peer review, and clear documentation',
      'Increased test coverage from 85% to 98% by building automated unit and integration test suites integrated with the CI/CD pipeline',
      'Delivered 9 custom RESTful APIs consumed by internal teams, applying clean-code principles and version-controlled workflows to keep iteration velocity high as the system scaled',
    ],
    stack: ['Go', 'PostgreSQL', 'CI/CD'],
  },
  {
    id: 'spothealth',
    company: 'Spot Health',
    title: 'Software Developer',
    start: '2022-07',
    end: '2022-12',
    location: 'Remote',
    highlights: [
      'Improved query performance ~25% by optimizing Django SQL queries critical to product support, reducing page load for the support team',
      'Accelerated test reliability by developing reusable data factories that cut test-setup time by ~40% and enabled broader integration-test coverage',
      'Contributed to a full overhaul of the primary issue-tracking dashboard, improving the tracking workflow in collaboration with the product team',
    ],
    stack: ['Python', 'Django', 'PostgreSQL'],
  },
]

const skills = {
  languages: ['Python', 'JavaScript', 'TypeScript', 'Go'],
  backend: ['Django', 'Flask', 'Node.js', 'Express', 'HTMX'],
  frontend: ['React', 'Next.js', 'Three.js'],
  data: ['PostgreSQL'],
  practices: ['Unit & integration testing', 'CI/CD', 'Git/GitHub'],
  aiTooling: ['Claude Code', 'Cursor', 'AI-assisted dev workflows'],
  infra: ['Docker', 'Vercel'],
  spokenLanguages: [
    { lang: 'Spanish', level: 'native' },
    { lang: 'English', level: 'advanced' },
  ],
}

const projects = [
  {
    id: 0,
    title: 'Firmamento & Firmamento-3D',
    description:
      'Full-stack web platform built and maintained end to end as sole developer: custom authentication, relational data modeling with the Django ORM, server-rendered UI, and an interactive 3D scene in Three.js.',
    // TODO: replace this placeholder graphic with a real screenshot at public/images/firmamento.png.
    image: '/images/firmamento.png',
    tags: ['Django', 'PostgreSQL', 'HTMX', 'Three.js'],
    source: '',
    visit: '',
  },
  {
    id: 1,
    title: 'Grimoire',
    description:
      'Desktop code editor with locally-run, GPU-powered LSP support, built to explore offline-first developer tooling. Shipped a working first version on Wails and currently migrating the editor core to Monaco.',
    // TODO: replace this placeholder graphic with a real screenshot at public/images/grimoire.png.
    image: '/images/grimoire.png',
    tags: ['Go', 'React', 'Wails'],
    source: '',
    visit: '',
  },
  {
    id: 2,
    title: 'Hardware Lab',
    description:
      'Self-directed electronics project spanning PCB design, soldering and assembly, and 3D-printed enclosures, taking a physical product from schematic to working prototype.',
    // TODO: replace this placeholder graphic with a real screenshot at public/images/hardware-lab.png.
    image: '/images/hardware-lab.png',
    tags: ['Electronics', 'PCB Design', '3D Printing'],
    source: '',
    visit: '',
  },
]

const metrics = [
  { number: '50%', text: 'Faster response times shipped via a Go microservice refactor' },
  { number: '98%', text: 'Automated test coverage achieved on core production services' },
  { number: '9', text: 'RESTful APIs delivered for internal teams' },
  { number: '3+', text: 'Years shipping production systems' },
]

module.exports = { person, experience, skills, projects, metrics }
