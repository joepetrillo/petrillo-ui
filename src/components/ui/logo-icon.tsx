import { cn } from "@/lib/utils";

type Size = "sm" | "md" | "lg" | "xl";

interface PizzaLogoProps {
  /** Size of the logo. Defaults to 'lg' */
  size?: Size;
  /** Color of the logo strokes. Defaults to 'var(--color-gray-950)' */
  strokeColor?: string;
  /** Width of the strokes. Defaults to 12 */
  strokeWidth?: number;
  /** Additional CSS classes */
  className?: string;
}

export default function LogoIcon({
  size = "lg",
  strokeColor = "var(--color-gray-950)",
  strokeWidth = 12,
  className,
}: PizzaLogoProps) {
  // Size mappings using Tailwind classes
  const sizeClasses: Record<Size, string> = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-12 h-12",
  };

  return (
    <div className={cn("inline-block", sizeClasses[size], className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        className="h-full w-full"
      >
        {/* Main circle outline */}
        <circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
        />

        {/* Slice lines */}
        <line
          x1="100"
          y1="10"
          x2="100"
          y2="190"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
        />
        <line
          x1="10"
          y1="100"
          x2="190"
          y2="100"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
        />

        {/* Diagonal lines */}
        <line
          x1="36.4"
          y1="36.4"
          x2="163.6"
          y2="163.6"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
        />
        <line
          x1="163.6"
          y1="36.4"
          x2="36.4"
          y2="163.6"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
        />
      </svg>
    </div>
  );
}
