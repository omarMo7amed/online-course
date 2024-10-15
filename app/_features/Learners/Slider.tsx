"use client";
import { useState, useMemo } from "react";
import Learner from "./Learner";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
    slidesToSlide: 4,
  },
  desktop: {
    breakpoint: { max: 1200, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1023, min: 768 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 767, min: 320 },
    items: 1,
    slidesToSlide: 1,
  },
};

export default function Slider({ someLearners }: SliderProps) {
  const [autoPlay, setAutoPlay] = useState<boolean>(true);

  const memoizedLearners = useMemo(() => {
    return someLearners.map((learner: LearnerType) => (
      <Learner key={learner.id} learner={learner} />
    ));
  }, [someLearners]);

  return (
    <div
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
    >
      <Carousel
        autoPlay={autoPlay}
        autoPlaySpeed={3000}
        transitionDuration={3000}
        infinite
        responsive={responsive}
        className="min-h-[450px]"
      >
        {memoizedLearners}
      </Carousel>
    </div>
  );
}
