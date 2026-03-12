import PageHero from "@/components/PageHero";
import { testimonials } from "@/data/neighborhoods";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials | Harris Land & Home",
  description: "Hear what our clients say about working with Ben Harris.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        title="Testimonials"
        subtitle="Hear what our clients say"
        image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&h=800&fit=crop"
      />
      <section className="section-padding">
        <div className="max-w-4xl mx-auto space-y-12">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="border-l-4 border-primary pl-8 py-4"
            >
              <svg
                className="w-10 h-10 text-primary/30 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
              </svg>
              <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div>
                <p className="font-heading font-medium text-gray-900">
                  {t.author}
                </p>
                <p className="text-gray-500 text-sm">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
