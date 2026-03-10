export default function PropertiesLoading() {
  return (
    <>
      <div className="h-24 md:h-28 bg-warm-white" />
      <section className="py-24 px-8 md:px-16 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="h-9 w-56 bg-sandy rounded mx-auto animate-pulse" />
            <div className="mt-5 h-px w-12 bg-terra mx-auto" />
            <div className="mt-4 h-5 w-80 bg-sandy rounded mx-auto animate-pulse" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {Array.from({ length: 6 }, (_, i) => (
              <div
                key={i}
                className="rounded-xl bg-white border border-sandy-dark/40 overflow-hidden"
              >
                <div className="aspect-[4/3] bg-sandy animate-pulse" />
                <div className="p-5 space-y-3">
                  <div className="h-5 w-3/4 bg-sandy rounded animate-pulse" />
                  <div className="h-4 w-1/2 bg-sandy rounded animate-pulse" />
                  <div className="h-4 w-2/3 bg-sandy rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
