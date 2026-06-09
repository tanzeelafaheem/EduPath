export interface Course {
  id: number;
  name: string;
  duration: string;
  totalFees: string;
  eligibility: string;
}

export interface College {
  id: number;
  name: string;
  image: string;
  location: string;
  type: "Engineering" | "Medical" | "Management" | "Law";
  ownership: "Government" | "Private";

  establishedYear: number;
  studentRating: number;
  nirfRanking: number;

  about: string;

  activeStudents: number;

  naacGrade: string;

  applicationStatus: "Open" | "Closed";
  applicationDeadline: string;

  averageCutoffScore: number;

  averagePackage: string;
  placementPercentage: number;

  courses: Course[];
}