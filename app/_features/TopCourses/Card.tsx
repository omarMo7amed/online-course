import { formatCurrency } from "@/app/_utlis/helpers";
import Image from "next/image";
import Link from "next/link";

type CourseProps = {
  course: {
    imgSrc: string;
    title: string;
    id: string;
    author: string;
    href: string;
    rate: number;
    price: number;
  };
};

export default function Card({ course }: CourseProps) {
  return (
    <div className="rounded-lg transition-all duration-500 ease-in-out hover:shadow-xl mx-1 flex flex-col ">
      <Link href={course.href} className="relative block ">
        <Image
          src={course.imgSrc}
          alt={course.title}
          className="object-cover w-full"
          width={320}
          height={320}
          loading="lazy"
        />
      </Link>

      <div className="px-3 py-3 flex flex-col flex-1">
        <h2 className="text-rose-700 text-lg">{course.title}</h2>

        <p className="text-slate-400 text-sm mt-3 mb-5">
          <strong>{course.author}</strong>
        </p>

        <div className="flex flex-col justify-end flex-1">
          <p className="text-sm text-slate-400">
            {formatCurrency(course.price)}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-yellow-500 font-semibold text-lg">
              ★ {course.rate}
            </span>

            <button className="px-3 py-1 rounded-lg transition-all duration-300 text-slate-100 bg-rose-700 text-sm capitalize">
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
