export default function Stats() {
  const stats = [
    ["1500+", "Colleges"],
    ["500+", "Scholarships"],
    ["250+", "Courses"],
    ["10K+", "Students"],
  ];

  return (
    <section className="px-6 pb-16">
      <div className="mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-4">

        {stats.map(([value, label]) => (
          <div
            key={label}
            className="rounded-2xl bg-white p-6 text-center shadow-sm"
          >
            <h2 className="text-3xl font-bold text-blue-700">
              {value}
            </h2>

            <p className="text-slate-400">
              {label}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}