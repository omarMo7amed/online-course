import { ReactNode } from "react";

type ButtonProps = {
  type: "button" | "submit";
  onClick?: () => void;
  children: ReactNode;
};

export default function FormButton({
  type = "button",
  onClick,
  children,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="px-4 py-2 rounded-lg text-sm disabled:cursor-not-allowed text-slate-800 bg-transparent border border-slate-300"
    >
      {children}
    </button>
  );
}
