import CollegeCard from "@/components/college/CollegeCard";
import { colleges } from "@/data/colleges";

export default function SearchPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Search Colleges
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {colleges.map((college) => (
          <CollegeCard
            key={college.id}
            college={college}
          />
        ))}
      </div>
    </div>
  );
}