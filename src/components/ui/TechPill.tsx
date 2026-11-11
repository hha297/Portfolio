import { cn } from '../../lib/cn';
import { BrandIcon } from './BrandIcon';

type TechPillProps = {
  name: string;
  className?: string;
  size?: number;
};

export function TechPill({ name, className, size = 14 }: TechPillProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-line/80 bg-bg/40 px-3 py-1.5 font-mono text-[0.72rem] text-muted',
        className,
      )}
    >
      <BrandIcon name={name} size={size} />
      {name}
    </span>
  );
}
