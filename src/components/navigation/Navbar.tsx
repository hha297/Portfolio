import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navigation } from '../../data/education';
import { profile } from '../../data/profile';
import { useActiveSection } from '../../hooks/useActiveSection';
import { cn } from '../../lib/cn';
import { Button } from '../ui/Button';

export function Navbar() {
  const activeId = useActiveSection();
  const [open, setOpen] = useState(false);
  const navItems = navigation.filter((item) => item.id !== 'contact');

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-bg/80 backdrop-blur-xl">
      <div className="section-pad">
        <div className="container-shell flex h-16 items-center justify-between md:h-[4.25rem]">
          <a href="#hero" aria-label={profile.wordmark} className="inline-flex items-center">
            <img
              src={profile.logo}
              alt=""
              className="h-10 w-auto object-contain sm:h-11"
              width={44}
              height={44}
            />
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  'rounded-full px-3.5 py-2 font-mono text-[0.72rem] uppercase tracking-[0.16em] transition',
                  activeId === item.id
                    ? 'bg-elevated text-cyan'
                    : 'text-muted hover:bg-elevated/70 hover:text-text',
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button href="#contact" variant="primary">
              Contact
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-text lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="border-t border-white/5 bg-bg/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="section-pad flex flex-col gap-2 py-5" aria-label="Mobile">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={cn(
                    'rounded-2xl border px-4 py-3 text-base transition',
                    activeId === item.id
                      ? 'border-line bg-surface text-cyan'
                      : 'border-transparent text-text hover:border-line hover:bg-surface',
                  )}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button href="#contact" className="mt-2" onClick={() => setOpen(false)}>
                Contact
              </Button>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
