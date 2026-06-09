import Link from "next/link";
import { College } from "@/types/college";

interface CollegeCardProps {
  college: College;
}

export default function CollegeCard({
  college,
}: CollegeCardProps) {
  return (
    <div className="bg-white rounded-xl border overflow-hidden shadow-sm hover:shadow-md transition">
      <img
        src={college.image}
        alt={college.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold">
          {college.name}
        </h3>

        <p className="text-sm text-gray-500">
          {college.location}
        </p>

        <div className="flex gap-4 mt-3 text-sm">
          <span>⭐ {college.studentRating}</span>
          <span>🏆 NIRF #{college.nirfRanking}</span>
        </div>

        <div className="mt-3">
          <p className="text-sm">
            Package: {college.averagePackage}
          </p>

          <p className="text-sm">
            Placement: {college.placementPercentage}%
          </p>
        </div>

        <Link
          href={`/college/${college.id}`}
          className="block mt-4 bg-blue-600 text-white text-center py-2 rounded-lg"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}