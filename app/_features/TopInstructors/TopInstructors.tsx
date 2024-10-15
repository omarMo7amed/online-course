import Instructors from "./Instructors";

type TempDataType = Array<{
  imgSrc: string;
  name: string;
  id: string;
  field: string;
  rate: number;
}>;

const TempData: TempDataType = [
  {
    imgSrc: "/John2.webp",
    name: "John Doe",
    id: "1",
    field: "Web Development",
    rate: 4.9,
  },
  {
    imgSrc: "/Jane.webp",
    name: "Jane Smith",
    id: "2",
    field: "Data Science",
    rate: 4.8,
  },
  {
    imgSrc: "/Alex.webp",
    name: "Alex Johnson",
    id: "3",
    field: "UI/UX Design",
    rate: 4.7,
  },
  {
    imgSrc: "/John.webp",
    name: "John Brown",
    id: "4",
    field: "Machine Learning",
    rate: 4.9,
  },
  {
    imgSrc: "/Mike.webp",
    name: "Mike Davis",
    id: "5",
    field: "Mobile App Development",
    rate: 4.8,
  },
  {
    imgSrc: "/sarah.webp",
    name: "Sarah Wilson",
    id: "6",
    field: "Cybersecurity",
    rate: 4.9,
  },
];

export default function TopInstructors() {
  return (
    <section className="py-20 min-h-screen">
      <div className="mb-12">
        <h1 className="text-2xl text-slate-700 font-bold mb-2">
          Top Instructors
        </h1>
        <p className="text-slate-400 mb-6">
          Learn from the best in the industry
        </p>
      </div>
      <Instructors instructors={TempData} />
    </section>
  );
}
