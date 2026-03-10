interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  accent?: boolean;
  center?: boolean;
  dark?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  accent = true,
  center = true,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-16 md:mb-20 ${center ? "text-center" : ""}`}>
      <h2
        className={`font-serif text-3xl md:text-4xl font-semibold ${dark ? "text-white" : "text-charcoal"}`}
      >
        {title}
      </h2>
      {accent ? (
        <div
          className={`mt-3 h-px w-12 bg-terra ${center ? "mx-auto" : ""}`}
        />
      ) : null}
      {subtitle ? (
        <p
          className={`mt-5 text-base md:text-lg ${dark ? "text-cream/50" : "text-charcoal/50"}`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
