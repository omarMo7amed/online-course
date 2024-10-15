"use client";
export function ArrowRight({ onClick }: { onClick: () => void }) {
  return (
    <button
      className="absolute top-1/2 transform -translate-y-1/2 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 cursor-pointer"
      onClick={onClick}
    >
      &#10095;
    </button>
  );
}
