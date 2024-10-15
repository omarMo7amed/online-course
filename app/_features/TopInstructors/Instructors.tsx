"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Empty = dynamic(() => import("@/app/_components/Empty"), { ssr: false });
const Button = dynamic(() => import("@/app/_components/Button"), {
  ssr: false,
});
const Card = dynamic(() => import("./Card"), { ssr: false });

type InstructorType = {
  imgSrc: string;
  name: string;
  id: string;
  field: string;
  rate: number;
};

type InstructorsProps = {
  instructors: InstructorType[];
};

export default function Instructors({ instructors }: InstructorsProps) {
  const [showMore, setShowMore] = useState<boolean>(false);

  if (!instructors.length)
    return <Empty message="We have not any right now , come soon !" />;

  const filterInstructors = instructors.filter(
    (instructor) => instructor.rate > 4.5
  );

  if (!filterInstructors.length)
    return (
      <Empty message="We have not instructors rating above 4.5 right now " />
    );

  const showInstructors = showMore
    ? filterInstructors
    : filterInstructors.slice(0, 3);

  return (
    <>
      <ul className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {showInstructors.map((instructor) => (
          <Card key={instructor.id} instructor={instructor} />
        ))}
      </ul>
      <motion.div
        whileHover={{ scale: 1.11 }}
        whileTap={{ scale: 0.95 }}
        className="mt-10 w-fit mx-auto"
      >
        <Button onClick={() => setShowMore(!showMore)} ariaLabel="show-content">
          {showMore ? "Show Less" : "Show More"}
        </Button>
      </motion.div>
    </>
  );
}
