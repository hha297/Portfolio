export const socials = [
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:ha.dh290702@gmail.com',
    handle: 'ha.dh290702@gmail.com',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/hha297/',
    handle: '@hha297',
  },
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/hha297',
    handle: '@hha297',
  },
  {
    id: 'website',
    label: 'Website',
    href: 'https://www.danghoangha.com/',
    handle: 'danghoangha.com',
  },
] as const;

export type Social = (typeof socials)[number];
