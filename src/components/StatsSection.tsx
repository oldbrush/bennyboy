import { stats } from "@/data/siteConfig";

export default function StatsSection() {
  return (
    <section className="bg-primary py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center text-white">
              <p className="text-4xl md:text-5xl font-heading font-light mb-2">
                {stat.value}
              </p>
              <p className="text-sm uppercase tracking-wider text-white/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
