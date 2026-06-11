"use client";

import { savedColleges } from "@/data/colleges";
import { MapPin, Star } from "lucide-react";

export default function Colleges() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="mb-10">
          <h2 className="text-4xl font-bold text-slate-900">
            SAVED COLLECTION
          </h2>

          <p className="mt-2 text-slate-500">
            Discover top universities around the world.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {savedColleges.map((college) => (
            <div
              key={college.id}
              className="overflow-hidden rounded-3xl bg-white shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={college.image}
                alt={college.name}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">

                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold text-slate-900">
                    {college.name}
                  </h3>

                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star size={16} fill="currentColor" />
                    <span className="font-medium">
                      {college.rating}
                    </span>
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-2 text-slate-500">
                  <MapPin size={16} />
                  <span>{college.location}</span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {college.courses.map((course) => (
                    <span
                      key={course}
                      className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                    >
                      {course}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between">

                  <div>
                    <p className="text-xs text-slate-400">
                      Annual Fees
                    </p>

                    <p className="font-semibold text-slate-900">
                      {college.fees}
                    </p>
                  </div>

                  <button className="rounded-xl bg-blue-700 px-5 py-2.5 text-white font-medium hover:bg-blue-800 transition">
                    View Details
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}