export type ProjectLink = {
  label: string;
  href: string;
};

export type FeaturedProject = {
  id: string;
  number: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  accent: string;
  accentSoft: string;
  logo: string;
  website?: ProjectLink;
  source?: ProjectLink;
  linkedin?: ProjectLink;
  stack: string[];
  features: string[];
  screenshots: { src: string; alt: string; label: string }[];
};

export const projects: FeaturedProject[] = [
  {
    id: "notoria",
    number: "01",
    name: "Notoria",
    category: "Full-stack Developer / Founder",
    tagline:
      "A private language-learning workspace built around your own material.",
    description:
      "Notoria is a language-learning platform organized around language-specific workspaces. Learners collect vocabulary, capture scraps, write theory notes, and practise with flashcards, quizzes, writing, listening, and speaking — connected in one product loop rather than scattered tools.",
    accent: "#9B7BFF",
    accentSoft: "rgba(155, 123, 255, 0.16)",
    logo: "/logos/notoria.png",
    website: { label: "Visit notoria.fi", href: "https://notoria.fi/" },
    source: { label: "Source", href: "https://github.com/hha297/Notoria" },
    linkedin: {
      label: "Follow on LinkedIn",
      href: "https://www.linkedin.com/company/notoria-fi/",
    },
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Drizzle",
      "Stripe",
      "Docker",
      "OpenAI",
      "AssemblyAI",
    ],
    features: [
      "Built language-specific workspaces with vocabulary entries covering meanings, examples, tags, and primary/secondary senses",
      "Shipped spaced-repetition flashcards plus quiz modes (multiple choice, fill-in blanks, match pairs, type-the-answer) generated from the learner’s own material",
      "Added writing practice and worksheets with AI vocabulary assistance, writing feedback, and an activity-based Learning Coach",
      "Delivered audio/video transcription and AI-generated listening exercises with AssemblyAI and OpenAI",
      "Implemented realtime speaking practice using Stream Video and OpenAI Realtime",
      "Built CSV / PDF / DOCX import-export with parsing, field mapping, and AI-assisted extraction, plus validated JSON backup and restore",
      "Established Stripe billing for Pro and Premium with verified webhooks, subscription access controls, and AI usage quotas",
    ],
    screenshots: [
      {
        src: "/projects/notoria/hero.png",
        alt: "Notoria product hero overview",
        label: "Hero",
      },
      {
        src: "/projects/notoria/vocabulary.png",
        alt: "Notoria vocabulary workspace with word bank and filters",
        label: "Vocabulary",
      },
      {
        src: "/projects/notoria/exercise.png",
        alt: "Notoria exercise practice interface",
        label: "Exercise",
      },
      {
        src: "/projects/notoria/ai-tutor.jpg",
        alt: "Notoria AI tutor feature",
        label: "AI Tutor",
      },
      {
        src: "/projects/notoria/pro-premium.jpg",
        alt: "Notoria Pro and Premium plans",
        label: "Plans",
      },
      {
        src: "/projects/notoria/banner.jpg",
        alt: "Notoria brand banner",
        label: "Brand",
      },
    ],
  },
  {
    id: "trackwise",
    number: "02",
    name: "Trackwise",
    category: "Full-stack Developer / Mobile Product Development",
    tagline:
      "Nutrition, workouts, and progress tracking in one mobile-first product.",
    description:
      "Trackwise is a nutrition and fitness application for logging meals, scanning barcodes, training from an exercise library, setting personal goals, and reviewing progress trends. It is built as an Expo/React Native app with a Supabase backend and companion web packages.",
    accent: "#00D95F",
    accentSoft: "rgba(0, 217, 95, 0.14)",
    logo: "/logos/trackwise.png",
    website: {
      label: "Visit trackwise.one",
      href: "https://www.trackwise.one/",
    },
    source: { label: "Source", href: "https://github.com/hha297/Trackwise" },
    stack: [
      "Expo",
      "React Native",
      "TypeScript",
      "NativeWind",
      "Supabase",
      "PostgreSQL",
      "TanStack Query",
      "Zustand",
      "Cloudinary",
      "Next.js",
    ],
    features: [
      "Built a daily food diary with search, recent foods, custom entries, meal logging, and live calorie/macro progress against personal targets",
      "Integrated camera barcode scanning with Open Food Facts lookup so products can be confirmed by serving size, meal, and date",
      "Designed workout flows with an exercise library, templates, active sessions, set tracking, and estimated calorie burn",
      "Shipped guided goal setup for lose / maintain / gain with editable daily calorie and macronutrient targets",
      "Added progress dashboards for 7 / 30 / 90-day nutrition, training, and body-measurement trends",
      "Implemented account tooling with JSON export/import, multi-language support, and secure account deletion via Edge Functions",
      "Structured the product as an Expo mobile app with Supabase Auth/Postgres/RLS plus companion admin and marketing web packages",
    ],
    screenshots: [
      {
        src: "/projects/trackwise/hero.png",
        alt: "Trackwise marketing hero and feature overview",
        label: "Hero",
      },
      {
        src: "/projects/trackwise/food-log.jpg",
        alt: "Trackwise food log marketing visual",
        label: "Food log",
      },
      {
        src: "/projects/trackwise/food-scan.jpg",
        alt: "Trackwise food barcode scanning flow",
        label: "Scan",
      },
      {
        src: "/projects/trackwise/add-food.jpg",
        alt: "Trackwise add food visual",
        label: "Add food",
      },
      {
        src: "/projects/trackwise/workout.jpg",
        alt: "Trackwise workout tracking visual",
        label: "Workout",
      },
      {
        src: "/projects/trackwise/progres.jpg",
        alt: "Trackwise progress trends visual",
        label: "Progress",
      },
    ],
  },
];
