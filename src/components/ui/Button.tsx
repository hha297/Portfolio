import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cn } from '../../lib/cn';

type ButtonProps = ComponentPropsWithoutRef<'a'> & {
  variant?: 'primary' | 'secondary' | 'ghost';
  icon?: ReactNode;
};

export function Button({
  className,
  variant = 'primary',
  icon,
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        'group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition duration-300',
        variant === 'primary' &&
          'bg-cyan text-bg shadow-[0_0_0_1px_rgba(0,123,243,0.28)] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,123,243,0.22)]',
        variant === 'secondary' &&
          'border border-line bg-elevated/60 text-text hover:-translate-y-0.5 hover:border-cyan/45 hover:bg-elevated',
        variant === 'ghost' && 'text-muted hover:text-text',
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      {icon ? <span className="transition group-hover:translate-x-0.5">{icon}</span> : null}
    </a>
  );
}
