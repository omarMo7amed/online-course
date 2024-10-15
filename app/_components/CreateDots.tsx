export function CreateDots({
  length,
  currentIndex,
  setCurrentIndex,
}: {
  length: number;
  currentIndex: number;
  setCurrentIndex: (arg0: number) => void;
}) {
  return (
    <div className="absolute bottom-0 w-full flex justify-center space-x-2">
      {Array.from({ length: length }).map((_, index) => (
        <div
          key={index}
          className={`w-3 h-3 
             bg-opacity-70 rounded-full cursor-pointer transition-all ${
               index === currentIndex ? "bg-rose-900" : "bg-gray-500"
             }`}
          onClick={() => setCurrentIndex(index)}
        ></div>
      ))}
    </div>
  );
}
