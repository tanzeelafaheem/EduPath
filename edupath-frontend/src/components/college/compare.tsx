"use client";

import { Star, X } from "lucide-react";

const compareData = [
  {
    id: 1,
    name: "Stanford University",
    location: "Stanford, California",
    image:
      "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=1200",
    fees: "$56,169",
    rating: 4.9,
    package: "$165,000",
    placements: "94%",
    courseCount: "120+ Majors",
  },
  {
    id: 2,
    name: "MIT",
    location: "Cambridge, MA",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200",
    fees: "$53,450",
    rating: 4.8,
    package: "$172,000",
    placements: "98%",
    courseCount: "50+ Majors",
  },
  {
    id: 3,
    name: "Harvard University",
    location: "Boston, MA",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?w=1200",
    fees: "$54,002",
    rating: 4.9,
    package: "$158,000",
    placements: "92%",
    courseCount: "140+ Majors",
  },
];

export default function CompareColleges() {
  return (
    <section className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}

        <div className="mb-10">
          <h1 className="text-4xl font-bold text-slate-900">
            Compare Colleges
          </h1>

          <p className="mt-2 text-slate-500">
            Compare your shortlisted colleges side by side.
          </p>
        </div>

        {/* Table */}

        <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full min-w-[1000px]">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="p-6 text-left text-slate-500 font-semibold">
                  Parameters
                </th>

                {compareData.map((college) => (
                  <th
                    key={college.id}
                    className="p-6 text-left relative"
                  >
                    <button className="absolute top-4 right-4 p-1 rounded-full hover:bg-slate-100">
                      <X size={16} />
                    </button>

                    <img
                      src={college.image}
                      alt={college.name}
                      className="h-40 w-full rounded-xl object-cover"
                    />

                    <h3 className="mt-4 text-xl font-bold">
                      {college.name}
                    </h3>

                    <p className="text-sm text-slate-500">
                      {college.location}
                    </p>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-6 font-semibold">
                  Annual Fees
                </td>

                {compareData.map((college) => (
                  <td key={college.id} className="p-6">
                    {college.fees}
                  </td>
                ))}
              </tr>

              <tr className="border-b border-gray-200">
                <td className="p-6 font-semibold">
                  Rating
                </td>

                {compareData.map((college) => (
                  <td key={college.id} className="p-6">
                    <div className="flex items-center gap-2">
                      <Star
                        size={18}
                        className="fill-yellow-400 text-yellow-400"
                      />
                      <span className="font-semibold">
                        {college.rating}
                      </span>
                    </div>
                  </td>
                ))}
              </tr>

              <tr className="border-b border-gray-200">
                <td className="p-6 font-semibold">
                  Avg Package
                </td>

                {compareData.map((college) => (
                  <td
                    key={college.id}
                    className="p-6 font-bold text-green-600"
                  >
                    {college.package}
                  </td>
                ))}
              </tr>

              <tr className="border-b border-gray-200 bg-slate-50">
                <td className="p-6 font-semibold">
                  Placements
                </td>

                {compareData.map((college) => (
                  <td key={college.id} className="p-6">
                    <div className="space-y-2">
                      <div className="h-2 rounded-full bg-slate-200">
                        <div
                          className="h-2 rounded-full bg-green-500"
                          style={{
                            width: college.placements,
                          }}
                        />
                      </div>

                      <span className="font-semibold">
                        {college.placements}
                      </span>
                    </div>
                  </td>
                ))}
              </tr>

              <tr className="border-b border-gray-200">
                <td className="p-6 font-semibold">
                  Course Count
                </td>

                {compareData.map((college) => (
                  <td key={college.id} className="p-6">
                    {college.courseCount}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-6 font-semibold">
                  Action
                </td>

                {compareData.map((college) => (
                  <td key={college.id} className="p-6">
                    <button className="w-full rounded-xl border border-blue-700 py-3 font-semibold text-blue-700 hover:bg-blue-700 hover:text-white transition">
                      View Details
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Floating CTA */}

        <div className="fixed bottom-6 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-5 rounded-full bg-slate-900 px-6 py-4 text-white shadow-xl">
            <span className="font-medium">
              3 Colleges Selected
            </span>

            <button className="rounded-full bg-blue-600 px-6 py-2 font-semibold hover:bg-blue-700 transition">
              Apply To All
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}