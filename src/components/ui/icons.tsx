import React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const FileText: React.FC<IconProps> = ({ size = 20, className = "", ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="M10 9H8" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
  </svg>
);

export const Download: React.FC<IconProps> = ({ size = 20, className = "", ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" x2="12" y1="15" y2="3" />
  </svg>
);

export const ExternalLink: React.FC<IconProps> = ({ size = 20, className = "", ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </svg>
);

export const ArrowUpRight: React.FC<IconProps> = ({ size = 20, className = "", ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

export const ArrowDown: React.FC<IconProps> = ({ size = 20, className = "", ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <line x1="12" y1="5" x2="12" y2="19" />
    <polyline points="19 12 12 19 5 12" />
  </svg>
);

export const ArrowUp: React.FC<IconProps> = ({ size = 20, className = "", ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <line x1="12" y1="19" x2="12" y2="5" />
    <polyline points="5 12 12 5 19 12" />
  </svg>
);

export const Menu: React.FC<IconProps> = ({ size = 20, className = "", ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

export const X: React.FC<IconProps> = ({ size = 20, className = "", ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

export const TutWuriLogo: React.FC<IconProps> = ({ size = 32, className = "", ...props }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} {...props}>
    {/* Pentagonal Shield Base (Dark Cyan / Blue) */}
    <path
      d="M50 4 L92 34 L76 90 L24 90 L8 34 Z"
      fill="#0288D1"
      stroke="#B3E5FC"
      strokeWidth="2.5"
    />
    {/* Inner decorative outline */}
    <path
      d="M50 10 L86 36 L72 84 L28 84 L14 36 Z"
      fill="#01579B"
      stroke="#E1F5FE"
      strokeWidth="1.2"
    />
    {/* Golden Wings (Garuda wings shape) */}
    <path
      d="M50 42 C36 28 20 40 22 62 C30 64 42 56 46 48 Z"
      fill="#FFD54F"
    />
    <path
      d="M50 42 C64 28 80 40 78 62 C70 64 58 56 54 48 Z"
      fill="#FFD54F"
    />
    {/* Inner wing feathers detail */}
    <path
      d="M26 48 Q36 50 44 46 M28 56 Q38 58 46 52"
      stroke="#FFA000"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M74 48 Q64 50 56 46 M72 56 Q62 58 54 52"
      stroke="#FFA000"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
    {/* Central Blencong / Torch Flame */}
    <path
      d="M50 20 C45 30 42 38 47 48 C49 52 51 52 53 48 C58 38 55 30 50 20 Z"
      fill="#E53935"
    />
    <path
      d="M50 26 C47 33 46 38 49 44 C50 46 50 46 51 44 C54 38 53 33 50 26 Z"
      fill="#FFF176"
    />
    {/* White Book Base / Tut Wuri Base */}
    <path
      d="M32 64 Q50 60 68 64 L65 74 Q50 70 35 74 Z"
      fill="#FFFFFF"
    />
    <line x1="50" y1="62" x2="50" y2="72" stroke="#01579B" strokeWidth="1.5" />
    <path
      d="M30 74 Q50 78 70 74"
      stroke="#FFD54F"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);


export const Runner: React.FC<IconProps> = ({ size = 20, className = "", ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className} {...props}>
    {/* Running figure matching PJOK athletics */}
    <circle cx="13.5" cy="5.5" r="2.5" />
    <path d="M9.5 9l3 2.5 3-1.5 2 3.5-1.5 1-1.5-2.5-3 1.5-1.5 4.5h-2.5l2-5.5-2.5-1.5v-3.5h2.5z" />
    <path d="M12.5 14l-2 3.5-4 1.5 1 2 4-1.5 2.5-4z" />
  </svg>
);

export const TargetBullseye: React.FC<IconProps> = ({ size = 20, className = "", ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="m12 2a10 10 0 0 1 10 10" strokeWidth="2.6" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3" strokeWidth="1.8" />
  </svg>
);

export const Activity: React.FC<IconProps> = ({ size = 20, className = "", ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);

export const Target: React.FC<IconProps> = ({ size = 20, className = "", ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

export const Broom: React.FC<IconProps> = ({ size = 20, className = "", ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="m14 10-8.5 8.5a2.12 2.12 0 1 0 3 3L17 13" />
    <path d="m16 8 2-2a2.83 2.83 0 0 1 4 4l-2 2" />
    <path d="m9 15 3 3" />
  </svg>
);

export const BoxArchive: React.FC<IconProps> = ({ size = 20, className = "", ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
    <path d="m3.3 7 8.7 5 8.7-5" />
    <path d="M12 22V12" />
  </svg>
);

export const BarChart3: React.FC<IconProps> = ({ size = 20, className = "", ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M3 3v18h18" />
    <path d="M18 17V9" />
    <path d="M13 17V5" />
    <path d="M8 17v-3" />
  </svg>
);

export const CheckSquare: React.FC<IconProps> = ({ size = 20, className = "", ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <polyline points="9 11 12 14 22 4" />
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>
);

export const ArrowRight: React.FC<IconProps> = ({ size = 20, className = "", ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export const Quote: React.FC<IconProps> = ({ size = 20, className = "", ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
    <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
  </svg>
);

export const ChevronRight: React.FC<IconProps> = ({ size = 20, className = "", ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export const Play: React.FC<IconProps> = ({ size = 20, className = "", ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className} {...props}>
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

export const Lightbulb: React.FC<IconProps> = ({ size = 20, className = "", ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
    <path d="M9 18h6" />
    <path d="M10 22h4" />
  </svg>
);
