interface LogoProps {
  className?: string;
}

export function Logo({ className = "h-8 w-8" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background kotak biru dengan sudut membulat (rounded) */}
      <rect width="40" height="40" rx="8" fill="#3b82f6" />
      
      {/* Teks WN menggunakan font Roboto */}
      <text
        x="20"
        y="21"
        fontFamily="Roboto, Arial, sans-serif"
        fontWeight="700"
        fontSize="17"
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
        letterSpacing="-0.5"
      >
        WN
      </text>
    </svg>
  );
}