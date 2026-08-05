interface PlaceholderImageProps {
  label: string;
  aspect?: string;
  className?: string;
}

/** Visual stand-in until real assets are added under /public/images */
export function PlaceholderImage({
  label,
  aspect = "aspect-[16/10]",
  className = "",
}: PlaceholderImageProps) {
  return (
    <div
      className={`flex ${aspect} items-center justify-center rounded-2xl bg-gradient-to-br from-water/20 via-cyan/10 to-navy/10 text-center ${className}`}
      role="img"
      aria-label={label}
    >
      <span className="max-w-[80%] px-4 text-sm font-medium text-navy/50">
        {label}
      </span>
    </div>
  );
}
