import {
  Search,
  MapPin,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-4xl text-center">

        <span className="rounded-full bg-blue-50 px-4 py-2 text-blue-700 text-sm">
          Trusted by 2M+ Students
        </span>

        <h1 className="mt-6 text-5xl font-bold">
          Find the Right College
          <span className="block text-blue-700">
            for Your Future
          </span>
        </h1>

        <p className="mt-6 text-slate-500">
          Discover universities, compare
          admission criteria and make
          smarter education decisions.
        </p>

        <div className="mt-10 flex flex-col md:flex-row rounded-2xl bg-white shadow-xl p-2">

          <div className="flex flex-1 items-center gap-2 px-4">
            <Search size={18} />
            <input
              placeholder="Search colleges..."
              className="w-full outline-none"
            />
          </div>

          <div className="flex flex-1 items-center gap-2 px-4">
            <MapPin size={18} />
            <input
              placeholder="Location"
              className="w-full outline-none"
            />
          </div>

          <button className="rounded-xl bg-blue-700 px-8 py-3 text-white">
            Search
          </button>

        </div>
      </div>
    </section>
  );
}