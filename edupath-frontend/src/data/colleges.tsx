import { College } from "@/types/college";
export const colleges: College[] = [
  {
    id: 1,
    name: "IIT Delhi",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585",

    location: "New Delhi",

    type: "Engineering",

    ownership: "Government",

    establishedYear: 1961,

    studentRating: 4.8,

    nirfRanking: 2,

    about:
      "IIT Delhi is one of India's premier engineering institutions known for academic excellence, innovation, and strong industry collaborations.",

    activeStudents: 12000,

    naacGrade: "A++",

    applicationStatus: "Open",

    applicationDeadline: "2026-07-15",

    averageCutoffScore: 99,

    averagePackage: "25 LPA",

    placementPercentage: 95,

    courses: [
      {
        id: 1,
        name: "B.Tech Computer Science",
        duration: "4 Years",
        totalFees: "₹8,00,000",
        eligibility: "10+2 PCM + JEE Advanced",
      },

      {
        id: 2,
        name: "B.Tech Mechanical Engineering",
        duration: "4 Years",
        totalFees: "₹7,50,000",
        eligibility: "10+2 PCM + JEE Advanced",
      },

      {
        id: 3,
        name: "M.Tech Computer Science",
        duration: "2 Years",
        totalFees: "₹3,00,000",
        eligibility: "B.Tech + GATE",
      },
    ],
  },

  {
    id: 2,

    name: "NIT Trichy",

    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",

    location: "Tamil Nadu",

    type: "Engineering",

    ownership: "Government",

    establishedYear: 1964,

    studentRating: 4.6,

    nirfRanking: 9,

    about:
      "NIT Trichy is among the top National Institutes of Technology with excellent placement records and strong research programs.",

    activeStudents: 9000,

    naacGrade: "A+",

    applicationStatus: "Open",

    applicationDeadline: "2026-06-30",

    averageCutoffScore: 97,

    averagePackage: "16 LPA",

    placementPercentage: 92,

    courses: [
      {
        id: 1,
        name: "B.Tech Computer Science",
        duration: "4 Years",
        totalFees: "₹6,50,000",
        eligibility: "10+2 PCM + JEE Main",
      },

      {
        id: 2,
        name: "B.Tech Electrical Engineering",
        duration: "4 Years",
        totalFees: "₹6,20,000",
        eligibility: "10+2 PCM + JEE Main",
      },
    ],
  },

  {
    id: 3,

    name: "VIT Vellore",

    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",

    location: "Tamil Nadu",

    type: "Engineering",

    ownership: "Private",

    establishedYear: 1984,

    studentRating: 4.4,

    nirfRanking: 11,

    about:
      "VIT is a leading private university offering diverse programs with strong placement support and global collaborations.",

    activeStudents: 30000,

    naacGrade: "A++",

    applicationStatus: "Open",

    applicationDeadline: "2026-05-25",

    averageCutoffScore: 90,

    averagePackage: "10 LPA",

    placementPercentage: 88,

    courses: [
      {
        id: 1,
        name: "B.Tech Computer Science",
        duration: "4 Years",
        totalFees: "₹8,50,000",
        eligibility: "10+2 PCM + VITEEE",
      },

      {
        id: 2,
        name: "B.Tech AI & ML",
        duration: "4 Years",
        totalFees: "₹9,00,000",
        eligibility: "10+2 PCM + VITEEE",
      },
    ],
  },
];