export default function FeaturedUniversities() {
  const colleges = [
    {
      name: "Harvard University",
      location: "Boston, USA",
      rating: "4.8",
      fee: "$50k/year",
      // Live image of Harvard dynamic campus gate/architecture
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSipPY0WLWc7ztDpWrezRW8vRaUPMBkc039lgqWObP7jA&s=10",
    },
    {
      name: "MIT",
      location: "Cambridge, USA",
      rating: "4.9",
      fee: "$55k/year",
      // Live image of modern MIT architecture dome
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3fnS_ZHTrAhjFUE5EPnbeFloaJofWNf5cT3HrFcrQnA&s=10",
    },
    {
      name: "Stanford University",
      location: "California, USA",
      rating: "4.8",
      fee: "$53k/year",
      // Live image of sunny Stanford courtyard/mission-style buildings
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9JZKjvwqZPTH_RLmLiwj0bqCgdlK3oWKn7wA9yLAvRJWgBVvZu4bJMieq&s=10",
    },
  ];

  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">

        <h2 className="mb-8 text-3xl font-bold">
          Featured Universities
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {colleges.map((college) => (
            <div
              key={college.name}
              className="overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-md transition duration-200"
            >
              {/* Added responsive live img layout rendering code here */}
              <img 
                src={college.image} 
                alt={`${college.name} Campus`}
                className="h-52 w-full object-cover bg-slate-100"
                loading="lazy"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold">
                  {college.name}
                </h3>

                <p className="mt-2 text-slate-500">
                  {college.location}
                </p>

                <div className="mt-4 flex justify-between font-medium">
                  <span>⭐ {college.rating}</span>
                  <span className="text-blue-700">{college.fee}</span>
                </div>

                <button className="mt-6 w-full rounded-lg bg-blue-700 py-3 text-white hover:bg-blue-800 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
