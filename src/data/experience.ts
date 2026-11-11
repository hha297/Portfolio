export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  monogram: string;
  logo?: string;
  logoFit?: 'cover' | 'contain';
  accent: string;
  stack: string[];
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: 'trancon',
    company: 'Trancon Co., Ltd.',
    role: 'Software Developer',
    period: 'February 2026 – Present',
    location: 'Vietnam (Remote)',
    monogram: 'TC',
    logo: '/logos/trancon.png',
    logoFit: 'contain',
    accent: '#007BF3',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Drizzle', 'Docker'],
    highlights: [
      'Delivered an end-to-end warranty ticket platform used by 10–20 technicians and office staff to manage approximately 400–500 tickets per month.',
      'Built dashboards and filters for open jobs and jobs awaiting parts, reducing daily triage time from approximately 45 to 15 minutes.',
      'Implemented validated forms and reliable server-side updates for jobs, customers, brands, and components, reducing ticket-related support issues by approximately 40% after launch.',
    ],
  },
  {
    id: 'factorise',
    company: 'Factorise Technologies ApS',
    role: 'Mobile Developer Intern',
    period: 'August 2025 – February 2026',
    location: 'Denmark (Remote)',
    monogram: 'FT',
    logo: '/logos/factorise_technologies_logo.jpg',
    logoFit: 'cover',
    accent: '#00D95F',
    stack: ['React Native', 'TypeScript', 'Expo', 'Zustand', 'PostgreSQL', 'Supabase'],
    highlights: [
      'Developed and maintained React Native features in collaboration with product and engineering teams.',
      'Refactored key UI flows to improve screen-loading consistency and reduce recurring issues during testing.',
      'Resolved approximately 15 high-priority bugs identified by internal testers.',
    ],
  },
  {
    id: 'beiarntek',
    company: 'Beiarntek AS',
    role: 'Frontend Developer Intern',
    period: 'February 2025 – August 2025',
    location: 'Norway (Remote)',
    monogram: 'B',
    logo: '/logos/beiarntek.jpg',
    logoFit: 'cover',
    accent: '#9B7BFF',
    stack: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Python', 'PostgreSQL', 'Stripe', 'Vipps'],
    highlights: [
      'Developed responsive Next.js interfaces across 10+ core pages, standardizing UI patterns and improving usability across desktop and mobile experiences.',
      'Integrated a Mistral AI-powered chatbot for common onboarding questions, automating repetitive support interactions and reducing manual support workload.',
      'Implemented Stripe and Vipps payment flows with validation and error handling, improving checkout reliability for early users.',
    ],
  },
  {
    id: 'katch',
    company: 'Katch Oy',
    role: 'Full Stack Developer Intern',
    period: 'July 2024 – February 2025',
    location: 'Espoo, Finland (Remote)',
    monogram: 'K',
    logo: '/logos/kyky_today_logo.jpg',
    logoFit: 'cover',
    accent: '#20B2AA',
    stack: ['React.js', 'Redux', 'TypeScript', 'REST APIs', 'Firebase', 'Stripe'],
    highlights: [
      'Developed React applications with Redux state management and RESTful API integrations for the Katch service marketplace platform.',
      'Debugged and resolved React component issues across core product flows used by freelancers and small businesses.',
      'Deployed web applications on Firebase Hosting and collaborated with UI/UX designers on marketplace experience polish.',
      'Managed source control across GitLab and GitHub while contributing to Stripe-related payment flows.',
    ],
  },
];
