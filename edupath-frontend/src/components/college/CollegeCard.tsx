import { College } from "@/data/colleges";
import { MapPin, Star } from "lucide-react";

interface CollegeCardProps {
  college: College;
}

export default function CollegeCard({ college }: CollegeCardProps) {
  return (
    <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-100">
      <img
        src={college.image}
        alt={college.name}
        {/* FIX: Changed h-112.5 to standard Tailwind utility or explicit bracket notation */}
        className="w-full h-[450px] object-cover" 
      />

      <div className="p-8">
        <h1 className="text-4xl font-bold text-gray-900">
          {college.name}
        </h1>

        <div className="flex items-center gap-2 mt-3 text-slate-500">
          <MapPin size={18} />
          {college.location}
        </div>

        <div className="flex items-center gap-2 mt-3">
          <Star
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />
          <span className="font-medium text-gray-700">
            {college.rating}
          </span>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800">
            Annual Fees
          </h2>
          <p className="text-blue-700 text-2xl font-bold mt-2">
            {college.fees}
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Courses Offered
          </h2>

          <div className="flex flex-wrap gap-3">
            {college.courses?.map((course) => (
              <span
                key={course}
                className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-medium text-sm"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}