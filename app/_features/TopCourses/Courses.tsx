"use client";

import { useMemo } from "react";
import dynamic from "next/dynamic";
import CustomSlider from "@/app/_components/Slider";

const Card = dynamic(() => import("./Card"), { ssr: false });
const Empty = dynamic(() => import("@/app/_components/Empty"), { ssr: false });

type CoursesProps = {
  courses: Array<{
    imgSrc: string;
    title: string;
    id: string;
    href: string;
    author: string;
    rate: number;
    price: number;
  }>;
};

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1200 },
    items: 5,
    slidesNumberToSlide: 5,
  },
  desktop: {
    breakpoint: { max: 1800, min: 1024 },
    items: 4,
    slidesNumberToSlide: 4,
  },
  tablet: {
    breakpoint: { max: 998, min: 768 },
    items: 3,
    slidesNumberToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 767, min: 550 },
    items: 2,
    slidesNumberToSlide: 2,
  },
  smallMobile: {
    breakpoint: { max: 549, min: 320 },
    items: 1,
    slidesNumberToSlide: 1,
  },
};

export default function Courses({ courses }: CoursesProps) {
  const visibleCourses = useMemo(
    () => courses.filter((course) => course.rate > 4.5),
    [courses]
  );

  if (!visibleCourses.length)
    return <Empty message="Top courses not found right now, come soon!" />;

  return (
    <div className="relative py-10">
      <h2 className="text-2xl text-slate-700 font-bold mb-2">
        Top Rated Courses
      </h2>

      <p className="text-slate-400 mb-6">
        Discover the most popular courses with excellent ratings.
      </p>

      <CustomSlider responsive={responsive}>
        {visibleCourses.map((course) => (
          <Card key={course.id} course={course} />
        ))}
      </CustomSlider>
    </div>
  );
}
