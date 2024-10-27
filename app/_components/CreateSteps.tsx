"use client";

type StepsProps = {
  currentStep: number;
  numberOfSteps: number;
};

export default function Steps({ currentStep, numberOfSteps }: StepsProps) {
  return (
    <ul className="flex justify-between gap-2 items-center mt-10 w-64 sm:w-[320px]">
      {Array.from({ length: numberOfSteps }).map((_, index) => (
        <li
          key={index}
          className={`${
            index < currentStep ? "bg-rose-700" : "bg-slate-400"
          } h-1 rounded-lg basis-1/5`}
        ></li>
      ))}
    </ul>
  );
}
