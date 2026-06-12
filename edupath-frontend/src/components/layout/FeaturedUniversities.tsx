 import { colleges } from "@/data/colleges";
 import Link from "next/link";

export default function FeaturedUniversities() {
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
                  <span className="text-blue-700">{college.fees}</span>
                </div>

                <Link
  href={`/college/${college.id}`}
  className="mt-6 block w-full rounded-lg bg-blue-700 py-3 text-center text-white hover:bg-blue-800 transition"
>
  View Details
</Link>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
