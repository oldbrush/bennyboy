interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  accent?: boolean;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  accent = true,
  center = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      <h2
        className={`font-serif text-3xl md:text-4xl font-bold ${light ? "text-charcoal" : "text-white"}`}
      >
        {title}
      </h2>
      {accent && (
        <div
          className={`mt-4 h-0.5 w-16 bg-terra ${center ? "mx-auto" : ""}`}
        />
      )}
      {subtitle && (
        <p
          className={`mt-4 text-lg ${light ? "text-charcoal/70" : "text-cream/60"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
