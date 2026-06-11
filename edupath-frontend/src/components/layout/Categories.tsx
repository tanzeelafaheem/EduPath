export default function Categories() {
  const categories = [
    "Engineering",
    "Medical",
    "Management",
    "Law",
    "Arts",
    "Commerce",
  ];

  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-5xl">

        <h2 className="mb-6 text-2xl font-bold">
          Explore Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

          {categories.map((category) => (
            <div
              key={category}
              className="rounded-2xl bg-white p-5 text-center shadow-sm hover:shadow-md"
            >
              {category}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}