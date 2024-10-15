"use client";
import { useMemo } from "react";
import dynamic from "next/dynamic";

const CustomSlider = dynamic(() => import("@/app/_components/Slider"), {
  ssr: false,
});
const Learner = dynamic(() => import("./Learner"), {
  ssr: false,
});

type LearnerType = {
  imgSrc: string;
  name: string;
  id: number;
  feedback: string;
  field: string;
};

type SliderProps = { someLearners: LearnerType[] };

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1200 },
    items: 4,
    slidesNumberToSlide: 4,
  },
  desktop: {
    breakpoint: { max: 1199, min: 1024 },
    items: 3,
    slidesNumberToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1023, min: 768 },
    items: 2,
    slidesNumberToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 767, min: 320 },
    items: 1,
    slidesNumberToSlide: 1,
  },
};

export default function Slider({ someLearners }: SliderProps) {
  const memoizedLearners = useMemo(() => {
    return someLearners.map((learner: LearnerType) => (
      <Learner key={learner.id} learner={learner} />
    ));
  }, [someLearners]);

  return (
    <CustomSlider responsive={responsive}>{memoizedLearners}</CustomSlider>
  );
}
