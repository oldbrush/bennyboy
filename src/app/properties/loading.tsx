export default function PropertiesLoading() {
  return (
    <>
      <div className="h-20 bg-charcoal" />
      <section className="py-24 px-6 bg-charcoal">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="h-9 w-56 bg-charcoal-light rounded mx-auto animate-pulse" />
            <div className="mt-4 h-0.5 w-16 bg-terra mx-auto" />
            <div className="mt-4 h-5 w-80 bg-charcoal-light rounded mx-auto animate-pulse" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }, (_, i) => (
              <div
                key={i}
                className="rounded-lg bg-charcoal-light overflow-hidden"
              >
                <div className="aspect-[4/3] bg-charcoal-border animate-pulse" />
                <div className="p-4 space-y-3">
                  <div className="h-5 w-3/4 bg-charcoal-border rounded animate-pulse" />
                  <div className="h-4 w-1/2 bg-charcoal-border rounded animate-pulse" />
                  <div className="h-4 w-2/3 bg-charcoal-border rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
