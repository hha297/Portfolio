import type { SimpleIcon } from 'simple-icons';
import {
  siCloudflare,
  siCloudinary,
  siDocker,
  siDrizzle,
  siExpo,
  siExpress,
  siFirebase,
  siFramer,
  siGit,
  siGithub,
  siGitlab,
  siJetpackcompose,
  siKotlin,
  siMistralai,
  siMongodb,
  siMysql,
  siNeon,
  siNextdotjs,
  siNodedotjs,
  siOpenapiinitiative,
  siPostgresql,
  siPosthog,
  siPrisma,
  siPython,
  siRailway,
  siReact,
  siReactquery,
  siRedux,
  siRender,
  siSentry,
  siShadcnui,
  siStripe,
  siSupabase,
  siTailwindcss,
  siTanstack,
  siTrpc,
  siTypescript,
  siVercel,
  siZod,
} from 'simple-icons';

const icons: Record<string, SimpleIcon> = {
  'React.js': siReact,
  React: siReact,
  'Next.js': siNextdotjs,
  TypeScript: siTypescript,
  'Tailwind CSS': siTailwindcss,
  NativeWind: siTailwindcss,
  Redux: siRedux,
  'Framer Motion': siFramer,
  'shadcn/ui': siShadcnui,
  'Node.js': siNodedotjs,
  'REST APIs': siOpenapiinitiative,
  Prisma: siPrisma,
  Drizzle: siDrizzle,
  tRPC: siTrpc,
  Express: siExpress,
  Zod: siZod,
  'React Native': siReact,
  Kotlin: siKotlin,
  Expo: siExpo,
  'Jetpack Compose': siJetpackcompose,
  PostgreSQL: siPostgresql,
  MySQL: siMysql,
  MongoDB: siMongodb,
  Supabase: siSupabase,
  Firebase: siFirebase,
  Git: siGit,
  GitHub: siGithub,
  GitLab: siGitlab,
  Docker: siDocker,
  Vercel: siVercel,
  Railway: siRailway,
  Render: siRender,
  Cloudflare: siCloudflare,
  Neon: siNeon,
  'Mistral AI': siMistralai,
  Stripe: siStripe,
  'AI SDK': siVercel,
  Sentry: siSentry,
  PostHog: siPosthog,
  Cloudinary: siCloudinary,
  Python: siPython,
  'TanStack Query': siTanstack,
  'React Query': siReactquery,
};

/** Prefer readable fills for brands that ship as black/near-black. */
const fillOverrides: Record<string, string> = {
  'Next.js': '#F5F5F7',
  'shadcn/ui': '#F5F5F7',
  Prisma: '#B7C0D1',
  Expo: '#F5F5F7',
  GitHub: '#F5F5F7',
  Vercel: '#F5F5F7',
  'AI SDK': '#F5F5F7',
  PostHog: '#F5F5F7',
  Express: '#F5F5F7',
  Railway: '#F5F5F7',
  Render: '#46E3B7',
};

/** Raster/SVG brand marks when simple-icons has no entry. */
const imageIcons: Record<string, string> = {
  Zustand: '/logos/zustand.png',
  Vipps: '/logos/vipps.svg',
};

/** Brands missing from simple-icons (or removed). */
const customIcons: Record<string, { path: string; fill: string }> = {
  AWS: {
    fill: '#FF9900',
    path: 'M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.272-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.383.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z',
  },
  OpenAI: {
    fill: '#10A37F',
    path: 'M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z',
  },
  Stream: {
    fill: '#005FFF',
    // Official Stream (getstream.io) mark, normalized to 24x24
    path: 'M 15.125 10.210 L 21.644 9.748 C 22.074 9.717 22.345 10.202 22.093 10.553 L 17.533 16.911 C 17.437 17.045 17.283 17.124 17.119 17.124 L 6.893 17.124 C 6.729 17.124 6.575 17.045 6.480 16.912 L 1.907 10.554 C 1.655 10.203 1.926 9.717 2.357 9.748 L 8.856 10.210 L 11.632 7.104 C 11.835 6.876 12.191 6.878 12.393 7.107 L 15.125 10.210 Z M 16.490 16.116 L 12.259 14.533 L 12.259 16.116 L 16.490 16.116 Z M 11.750 16.116 L 11.750 14.533 L 7.519 16.116 L 11.750 16.116 Z M 11.262 14.155 L 6.939 15.770 L 3.759 11.345 L 11.262 14.155 Z M 12.738 14.155 L 17.061 15.770 L 20.241 11.345 L 12.738 14.155 Z M 11.754 13.786 L 11.754 8.460 L 8.220 12.454 L 11.754 13.786 Z M 12.259 13.786 L 12.259 8.461 L 15.794 12.454 L 12.259 13.786 Z M 7.183 12.086 L 7.996 11.171 L 4.024 10.886 L 7.183 12.086 Z M 16.787 12.086 L 15.974 11.171 L 19.947 10.886 L 16.787 12.086 Z',
  },
  AssemblyAI: {
    fill: '#2545FF',
    // Waveform-style mark for speech/AI transcription
    path: 'M4 10.5h1.6v3H4v-3zm2.8-3h1.6v9H6.8v-9zm2.8 1.5h1.6v6H9.6v-6zm2.8-4h1.6v14h-1.6v-14zm2.8 2.5h1.6v9h-1.6v-9zm2.8 2h1.6v5h-1.6v-5zm2.8-1.5h1.6v8h-1.6v-8z',
  },
};

const fallbackColors: Record<string, string> = {
  Zustand: '#443E38',
  Vipps: '#FF5B24',
};

function readableFill(hex: string) {
  const value = hex.replace('#', '');
  const r = Number.parseInt(value.slice(0, 2), 16);
  const g = Number.parseInt(value.slice(2, 4), 16);
  const b = Number.parseInt(value.slice(4, 6), 16);
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return luminance < 0.28 ? '#F5F5F7' : `#${value}`;
}

type BrandIconProps = {
  name: string;
  className?: string;
  size?: number;
};

export function BrandIcon({ name, className, size = 14 }: BrandIconProps) {
  const image = imageIcons[name];
  if (image) {
    return (
      <img
        src={image}
        alt=""
        aria-hidden
        width={size}
        height={size}
        className={className}
        style={{
          width: size,
          height: size,
          borderRadius: 4,
          objectFit: 'cover',
          flexShrink: 0,
        }}
      />
    );
  }

  const icon = icons[name];
  const custom = customIcons[name];

  if (icon || custom) {
    return (
      <svg
        role="img"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        aria-hidden
        className={className}
        fill={
          custom?.fill ??
          fillOverrides[name] ??
          readableFill(icon!.hex)
        }
      >
        <path d={custom?.path ?? icon!.path} />
      </svg>
    );
  }

  const initial = name.trim().charAt(0).toUpperCase() || '?';
  const color = fallbackColors[name] ?? '#A1A8B8';

  return (
    <span
      aria-hidden
      className={className}
      style={{
        display: 'inline-flex',
        width: size,
        height: size,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 999,
        background: color,
        color: '#0B0D14',
        fontSize: Math.max(9, size * 0.62),
        fontWeight: 700,
        lineHeight: 1,
        flexShrink: 0,
      }}
    >
      {initial}
    </span>
  );
}
