"use client";
export function ArrowLeft({ onClick }: { onClick: () => void }) {
  return (
    <button
      className="absolute top-1/2 transform -translate-y-1/2 left-4 text-white bg-black bg-opacity-50 rounded-full p-2 cursor-pointer"
      onClick={onClick}
    >
      &#10094;
    </button>
  );
}
