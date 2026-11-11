import { useEffect, useState } from 'react';
import { navigation } from '../data/education';

const sectionIds = ['hero', ...navigation.map((item) => item.id)] as const;

export function useActiveSection() {
  const [activeId, setActiveId] = useState<string>('hero');

  useEffect(() => {
    const update = () => {
      const marker = window.innerHeight * 0.3;
      let current: string = sectionIds[0];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top - marker <= 0) {
          current = id;
        }
      }

      setActiveId((prev) => (prev === current ? prev : current));
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    window.addEventListener('hashchange', update);

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      window.removeEventListener('hashchange', update);
    };
  }, []);

  return activeId;
}
