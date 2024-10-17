"use client";
import { useState } from "react";

export default function AuthPanel() {
  const [clicked, setIsClicked] = useState<boolean>(false);

  return (
    <div
      className={`bg-rose-500 absolute top-0 left-0 h-full z-10 transition-all duration-500 ease-in-out ${
        clicked ? "w-2/5 opacity-100" : "w-full opacity-100"
      } flex flex-col items-center justify-center rounded-tl-xl rounded-bl-xl`}
    >
      <div className={`text-center `}>
        <div
          className={`${
            clicked ? "translate-x-0" : "-translate-x-[300%]"
          } transition-all duration-500 max-w-[300px] `}
        >
          <h1 className="text-white font-bold text-4xl mb-8">Hello, Friend!</h1>
          <p className="text-rose-100 text-md">
            Enter your personal details and start your journey with us
          </p>
        </div>

        <button
          aria-label="sign-up"
          onClick={() => setIsClicked((prev) => !prev)}
          className="mt-16 bg-transparent rounded-full px-10 py-3 border transform transition-transform duration-150 hover:scale-105 active:scale-95 border-rose-100 text-rose-100"
        >
          Sign up
        </button>
      </div>
    </div>
  );
}
