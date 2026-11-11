import { navigation } from '../../data/education';
import { profile } from '../../data/profile';
import { socials } from '../../data/socials';
import { SocialIcon } from '../ui/SocialIcon';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-pad border-t border-line/70 py-10">
      <div className="container-shell flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <a href="#hero" aria-label={profile.wordmark} className="inline-flex items-center">
            <img
              src={profile.logo}
              alt=""
              className="h-10 w-auto object-contain sm:h-11"
              width={44}
              height={44}
            />
          </a>
          <p className="mt-2 text-sm text-muted">
            © {year} {profile.fullName}
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-4 gap-y-2 sm:gap-x-5">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted transition hover:text-text"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target={item.id === 'email' ? undefined : '_blank'}
              rel={item.id === 'email' ? undefined : 'noreferrer'}
              aria-label={item.label}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-2.5 py-2 text-muted transition hover:border-cyan/40 hover:text-cyan sm:px-3"
            >
              <SocialIcon id={item.id} size={15} />
              <span className="hidden font-mono text-[0.68rem] uppercase tracking-[0.12em] sm:inline">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
