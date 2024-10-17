"use client";
import { useMediaQuery } from "@/app/_hooks/useMediaQuery";
import FormAction from "./FormAction";
import AuthPanel from "@/app/_components/AuthPanel";

export default function Page() {
  const [isLarge] = useMediaQuery("(min-width: 639px)");
  return (
    <section className="flex justify-center my-20 items-center ">
      <div className="sm:w-full sm: lg:w-[1024px] relative flex justify-end rounded-xl overflow-hidden shadow-xl bg-white min-h-[600px] shadow-[0_10px_25px_-5px_rgba(190, 24, 93, 0.5), 0_4px_6px_-2px_rgba(190, 24, 93, 0.1)]">
        {isLarge && <AuthPanel />}
        <FormAction />
      </div>
    </section>
  );
}
