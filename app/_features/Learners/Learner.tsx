"use client";
import Image from "next/image";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { SiComma } from "react-icons/si";

type LearnerProps = {
  learner: {
    imgSrc: string;
    name: string;
    id: number;
    feedback: string;
    field: string;
  };
};

export default function Learner({ learner }: LearnerProps) {
  return (
    <div className="pt-12">
      <div className="relative pt-12 pb-6 px-6 bg-white mx-2 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out ">
        {/* Image in an arch-like design */}
        <div className="absolute inset-x-0 -top-12 flex justify-center">
          <div className="relative bg-gradient-to-r from-pink-300 via-rose-300 to-red-300 p-2 rounded-full shadow-lg">
            <Image
              src={learner.imgSrc}
              className="w-24 h-24 rounded-full border-4 border-white"
              alt={learner.name}
              width={320}
              height={320}
              loading="lazy"
            />
          </div>
        </div>

        {/* Content of the card */}
        <div className="mt-10 text-center">
          <h3 className="text-slate-700 text-xl font-bold">{learner.name}</h3>
          <p className="text-sm text-slate-500 italic">{learner.field}</p>
        </div>

        <div className="flex justify-center gap-x-1 mt-3">
          <MdOutlineStarPurple500 className="text-orange-500" />
          <MdOutlineStarPurple500 className="text-orange-500" />
          <MdOutlineStarPurple500 className="text-orange-500" />
          <MdOutlineStarPurple500 className="text-orange-500" />
        </div>

        {/* Separator */}
        <div className="w-1/2 h-[2px] bg-rose-700 my-4 mx-auto"></div>

        {/* Styled feedback */}
        <div className="relative bg-rose-50 px-6 py-4 rounded-lg shadow-inner border border-rose-300">
          <SiComma className="absolute text-4xl text-rose-300 -top-6 left-4 rotate-180" />
          <p className="text-sm text-slate-600 italic leading-relaxed">
            {learner.feedback}
          </p>
          <SiComma className="absolute text-4xl text-rose-300 -bottom-6 right-4" />
        </div>
      </div>
    </div>
  );
}
