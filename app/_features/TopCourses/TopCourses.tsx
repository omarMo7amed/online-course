import Courses from "./Courses";

type CourseType = {
  imgSrc: string;
  title: string;
  id: string;
  author: string;
  href: string;
  rate: number;
  price: number;
};

type CoursesDataType = CourseType[];

const CoursesData: CoursesDataType = [
  {
    imgSrc: "/why-join-us.webp",
    title: "Mastering ReactJS",
    id: "course1",
    author: "Jonas Schmedtmann",
    rate: 4.8,
    price: 200,
    href: "",
  },
  {
    imgSrc: "/why-join-us.webp",
    title: "JavaScript: The Advanced Concepts",
    id: "course2",
    author: "Andrei Neagoie",
    rate: 4.7,
    price: 200,
    href: "",
  },
  {
    imgSrc: "/why-join-us.webp",
    title: "Complete Guide to CSS & Flexbox",
    id: "course3",
    author: "Kevin Powell",
    rate: 4.6,
    price: 200,
    href: "",
  },
  {
    imgSrc: "/why-join-us.webp",
    title: "Algorithms and Data Structures",
    id: "course4",
    author: "Colt Steele",
    rate: 4.9,
    price: 200,
    href: "",
  },
  {
    imgSrc: "/why-join-us.webp",
    title: "Node.js and Express from Scratch",
    id: "course5",
    author: "Brad Traversy",
    rate: 4.5,
    price: 200,
    href: "",
  },
  {
    imgSrc: "/why-join-us.webp",
    title: "Mastering ReactJS",
    id: "course1",
    author: "Jonas Schmedtmann",
    rate: 4.8,
    price: 200,
    href: "",
  },
  {
    imgSrc: "/why-join-us.webp",
    title: "JavaScript: The Advanced Concepts",
    id: "course2",
    author: "Andrei Neagoie",
    rate: 4.7,
    price: 200,
    href: "",
  },
  {
    imgSrc: "/why-join-us.webp",
    title: "CompdFlexbox",
    id: "course3",
    author: "Kevin Powell",
    rate: 4.6,
    price: 200,
    href: "",
  },
  {
    imgSrc: "/why-join-us.webp",
    title: "s and Data Structures",
    id: "course4",
    author: "Colt Steele",
    rate: 4.9,
    price: 200,
    href: "",
  },
  {
    imgSrc: "/why-join-us.webp",
    title: "x",
    id: "course5",
    author: "Brad Traversy",
    rate: 4.5,
    price: 200,
    href: "",
  },
  {
    imgSrc: "/why-join-us.webp",
    title: "Mastering ReactJS",
    id: "course1",
    author: "Jonas Schmedtmann",
    rate: 4.8,
    price: 200,
    href: "",
  },
  {
    imgSrc: "/why-join-us.webp",
    title: "JavaScript: The Advanced Concepts",
    id: "course2",
    author: "Andrei Neagoie",
    rate: 4.7,
    price: 200,
    href: "",
  },
  {
    imgSrc: "/why-join-us.webp",
    title: "Complete Guide to CSS & Flexbox",
    id: "course3",
    author: "Kevin Powell",
    rate: 4.6,
    price: 200,
    href: "",
  },
  {
    imgSrc: "/why-join-us.webp",
    title: "Algorithms and Data Structures",
    id: "course4",
    author: "Colt Steele",
    rate: 4.9,
    price: 200,
    href: "",
  },
  {
    imgSrc: "/why-join-us.webp",
    title: "Node.js and Express from Scratch",
    id: "course5",
    author: "Brad Traversy",
    rate: 4.5,
    price: 200,
    href: "",
  },
  {
    imgSrc: "/why-join-us.webp",
    title: "Mastering ReactJS",
    id: "course1",
    author: "Jonas Schmedtmann",
    rate: 4.8,
    price: 200,
    href: "",
  },
];

export default function TopCourses() {
  return (
    <section className="py-20">
      <div className="relative border-2 rounded-lg border-slate-200 px-4">
        <Courses courses={CoursesData} />
      </div>
    </section>
  );
}
