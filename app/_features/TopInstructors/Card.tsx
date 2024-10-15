import Image from "next/image";

type CardProps = {
  instructor: {
    imgSrc: string;
    name: string;
    id: string;
    field: string;
    rate: number;
  };
};

export default function Card({ instructor }: CardProps) {
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    // Logic for view profile
  }

  return (
    <li className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-500 ease-in-out hover:shadow-2xl">
      <div className="relative overflow-hidden h-56">
        <Image
          src={instructor.imgSrc}
          alt={instructor.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          fill
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-slate-700 mb-2">
          {instructor.name}
        </h2>
        <p className="text-slate-400 text-base mb-4">{instructor.field}</p>
        <div className="flex items-center justify-between">
          <span className="text-yellow-500 font-semibold text-lg">
            ★ {instructor.rate}
          </span>
          <button
            onClick={handleClick}
            className="bg-rose-700 hover:bg-rose-500 text-white px-5 py-2 rounded-full font-semibold text-sm transition duration-300 hover:shadow-lg"
            aria-label="view profile"
          >
            View Profile
          </button>
        </div>
      </div>
    </li>
  );
}
