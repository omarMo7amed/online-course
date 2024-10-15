"use client";
import { useMediaQuery } from "@/app/_hooks/useMediaQuery";
import dynamic from "next/dynamic";
// import Section from "./Section";
// import { domAnimation, LazyMotion } from "framer-motion";

const Section = dynamic(() => import("./Section"), { ssr: false });

const sections = [
  {
    title: "Why Join Us?",
    text: "Our online course offers a unique opportunity to enhance your skills and knowledge in a flexible and supportive environment. With expert instructors and a well-structured curriculum, we ensure that every learner can thrive, regardless of their background.",
    imageSrc: "/why-join-us.webp",
    imageAlt: "Why Join Us",
  },
  {
    title: "Hands-On Projects!",
    text: "Work on projects that reflect industry standards and practices. Create tangible projects that you can showcase to potential employers. Collaborate with peers on group projects, simulating real-world team dynamics. Gain confidence in your abilities as you tackle complex problems and find solutions.",
    imageSrc: "/hands-on.webp",
    imageAlt: "Hands-On Projects",
  },
  {
    title: "Success Stories 🥳",
    text: "Our students have gone on to achieve remarkable success after completing our courses. Join the ranks of satisfied learners who have landed new jobs, advanced in their careers, or launched their own projects thanks to our training.",
    imageSrc: "/happy-people.webp",
    imageAlt: "Success Stories",
  },
];

function About() {
  const [isLargeScreen] = useMediaQuery("(min-width: 768px)");

  return (
    <section className="py-20 bg-gray-100">
      <div className="flex flex-col gap-20 items-center min-h-screen  ">
        {sections.map((section, index) => (
          <Section
            section={section}
            index={index}
            isLargeScreen={isLargeScreen}
            key={section.title}
          />
        ))}
      </div>
    </section>
  );
}

export default About;
