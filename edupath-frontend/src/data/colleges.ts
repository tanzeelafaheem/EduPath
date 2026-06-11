export interface College {
  id: number;
  name: string;
  location: string;
  rating: number;
  fees: string;
  image: string;
  courses: string[];
}

export const colleges: College[] = [
  {
    id: 1,
    name: "Harvard University",
    location: "Boston, USA",
    rating: 4.8,
    fees: "$50k/year",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?w=1200",
    courses: ["Computer Science", "Business", "Law"],
  },
  {
    id: 2,
    name: "MIT",
    location: "Cambridge, USA",
    rating: 4.9,
    fees: "$55k/year",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200",
    courses: ["AI", "Robotics", "Engineering"],
  },
  {
    id: 3,
    name: "Stanford University",
    location: "California, USA",
    rating: 4.8,
    fees: "$53k/year",
    image:
      "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=1200",
    courses: ["Computer Science", "Medicine", "MBA"],
  },
  {
    id: 4,
    name: "Oxford University",
    location: "Oxford, UK",
    rating: 4.7,
    fees: "$45k/year",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSawh0Fm2-68st8IRuorRPMkcTUxNXgKlQ6v0gbMiIZpw&s=10",
    courses: ["History", "Law", "Literature"],
  },
  {
    id: 5,
    name: "Cambridge University",
    location: "Cambridge, UK",
    rating: 4.8,
    fees: "$48k/year",
    image:
      "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=1200",
    courses: ["Engineering", "Physics", "Mathematics"],
  },
  {
    id: 6,
    name: "IIT Delhi",
    location: "New Delhi, India",
    rating: 4.6,
    fees: "$8k/year",
    image:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1200",
    courses: ["CSE", "ECE", "Mechanical"],
  },
];

export const savedColleges: College[] = [
  {
    id: 7,
    name: "University of California, Berkeley",
    location: "California, USA",
    rating: 4.7,
    fees: "$44k/year",
    image:
      "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=1200",
    courses: ["Computer Science", "Data Science", "Economics"],
  },
  {
    id: 8,
    name: "National University of Singapore",
    location: "Singapore",
    rating: 4.8,
    fees: "$18k/year",
    image:
      "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=1200",
    courses: ["AI", "Business Analytics", "Engineering"],
  },
  {
    id: 9,
    name: "University of Toronto",
    location: "Toronto, Canada",
    rating: 4.6,
    fees: "$32k/year",
    image:
      "https://images.unsplash.com/photo-1568792923760-d70635a89fdc?w=1200",
    courses: ["Computer Science", "Medicine", "Psychology"],
  },
  {
    id: 10,
    name: "Indian Institute of Science (IISc)",
    location: "Bangalore, India",
    rating: 4.9,
    fees: "$6k/year",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGKaJWWTnNpPFhuMKzCeb5jAoa6LQJ2qkWPJFIRDPZBnGX19kFpnKveKOXEhJFpX3HCNcqpYAtTISiRkQKXT0TV0p5ln3VEBwfEd97GTcnrntNq_lLwTOWjrrMsZ2n_jHvY02Yylw=s1360-w1360-h1020-rw",
    courses: ["Research", "Data Science", "Engineering"],
  },
];