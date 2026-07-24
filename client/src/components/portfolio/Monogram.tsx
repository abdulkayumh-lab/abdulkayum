/** Signature avian monogram for the Abdul Kayum / Birds Aviary brand. */
export default function Monogram({ size = 28, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true">
      {/* Minimal bird-in-flight mark drawn from two calligraphic strokes */}
      <path
        d="M4 20 C9 12, 14 10, 16 15 C18 10, 23 12, 28 20 C22 17, 18 17.5, 16 21 C14 17.5, 10 17, 4 20 Z"
        fill="currentColor"
        fillOpacity="0.9"
      />
      <circle cx="16" cy="24.5" r="1.2" fill="currentColor" />
    </svg>
  );
}
