export const education = {
  school: 'Oulu University of Applied Sciences',
  degree: 'Bachelor of Engineering, Information Technology',
  period: '2022–2025',
  gpa: '4.4/5',
} as const;

export const languages = [
  {
    name: 'Vietnamese',
    level: 'Native',
    detail: 'First language',
  },
  {
    name: 'English',
    level: 'Professional',
    detail: 'Work, study, and product collaboration',
  },
  {
    name: 'Finnish',
    level: 'Intermediate',
    detail: 'Daily life and local communication in Finland',
  },
] as const;

export const navigation = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
] as const;
