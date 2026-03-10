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
    <div className={`mb-14 ${center ? "text-center" : ""}`}>
      <h2
        className={`font-serif text-3xl md:text-4xl font-semibold ${light ? "text-charcoal" : "text-white"}`}
      >
        {title}
      </h2>
      {accent ? (
        <div
          className={`mt-5 h-px w-12 bg-terra ${center ? "mx-auto" : ""}`}
        />
      ) : null}
      {subtitle ? (
        <p
          className={`mt-4 text-base md:text-lg ${light ? "text-charcoal/60" : "text-cream/50"}`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
