import { colleges } from "@/data/colleges";
import CollegeCard from "@/components/college/CollegeCard"; 
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function CollegeDetailPage({ params }: PageProps) {
  // Await your async route parameters
  const { id } = await params;

  // FIX: Force normalization by comparing string representations to bypass number vs text 404s
  const collegeData = colleges.find((c) => String(c.id) === String(id));

  // If no object is returned by the finder function array loop, show a standard 404 screen
  if (!collegeData) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-blue-700 transition-colors duration-200"
        >
          <ArrowLeft size={16} />
          Back to Featured Universities
        </Link>
      </div>

      {/* Render presentation UI */}
      <CollegeCard college={collegeData} />
    </div>
  );
}