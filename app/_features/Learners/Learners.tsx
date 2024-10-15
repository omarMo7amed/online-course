import dynamic from "next/dynamic";
const Slider = dynamic(() => import("./Slider"), {
  ssr: false,
});

type LearnerType = {
  imgSrc: string;
  name: string;
  id: number;
  feedback: string;
  field: string;
};

type LearnersType = LearnerType[];

const someLearners: LearnersType = [
  {
    imgSrc: "/why-join-us.webp",
    name: "John Doe",
    id: 1,
    feedback:
      "This course really helped me understand React and advanced JavaScript concepts!",
    field: "Front-End Developer",
  },
  {
    imgSrc: "/why-join-us.webp",
    name: "Jane Smith",
    id: 2,
    feedback:
      "I loved the structured content and hands-on projects. It was a great experience!",
    field: "Full-Stack Developer",
  },
  {
    imgSrc: "/why-join-us.webp",
    name: "Alex Johnson",
    id: 3,
    feedback:
      "The projects helped me build my portfolio. The lessons were well-explained.",
    field: "Back-End Developer",
  },
  {
    imgSrc: "/why-join-us.webp",
    name: "Emily Davis",
    id: 4,
    feedback:
      "Excellent course! The instructors were clear and the community support was great.",
    field: "UI/UX Designer",
  },
  {
    imgSrc: "/why-join-us.webp",
    name: "Michael Lee",
    id: 5,
    feedback:
      "I enhanced my skills in modern web development technologies through this course.",
    field: "Software Engineer",
  },
];

function Learners() {
  return (
    <section className="py-20">
      <div className="px-4 py-10 border-2 rounded-lg border-slate-200">
        <h2 className="text-2xl text-slate-700 font-bold mb-2">
          Learners Love Course Online
        </h2>
        <p className="text-slate-400 mb-6">
          Hear What Our Learners Have to Say!
        </p>

        <Slider someLearners={someLearners} />
      </div>
    </section>
  );
}

export default Learners;
