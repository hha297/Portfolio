export type SkillGroup = {
  id: string;
  label: string;
  accent: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    accent: '#9B7BFF',
    items: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Zustand',
      'Redux',
      'Framer Motion',
      'Zod',
      'TanStack Query',
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    accent: '#007BF3',
    items: ['Node.js', 'REST APIs', 'Prisma', 'Drizzle', 'tRPC', 'Express'],
  },
  {
    id: 'mobile',
    label: 'Mobile',
    accent: '#00D95F',
    items: ['React Native', 'Expo', 'NativeWind', 'Kotlin', 'Jetpack Compose'],
  },
  {
    id: 'databases',
    label: 'Database & Platforms',
    accent: '#F59E0B',
    items: ['PostgreSQL', 'Neon', 'MySQL', 'MongoDB', 'Supabase', 'Firebase'],
  },
  {
    id: 'devops',
    label: 'DevOps & Hosting',
    accent: '#FB7185',
    items: ['Git', 'GitHub', 'GitLab', 'Docker', 'AWS', 'Vercel', 'Railway', 'Render', 'Cloudflare'],
  },
  {
    id: 'integrations',
    label: 'Integrations & Monitoring',
    accent: '#818CF8',
    items: [
      'Stripe',
      'Vipps',
      'AI SDK',
      'OpenAI',
      'Mistral AI',
      'AssemblyAI',
      'Stream',
      'Sentry',
      'PostHog',
      'Cloudinary',
    ],
  },
];


