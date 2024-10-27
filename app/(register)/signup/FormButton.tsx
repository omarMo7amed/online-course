import { ReactNode } from "react";

type ButtonProps = {
  type: "button" | "submit";
  onClick?: () => void;
  children: ReactNode;
  variant: "primary" | "secondary";
};

const baseStyle =
  "px-4 py-2 rounded-lg text-sm disabled:cursor-not-allowed border border-slate-300";

const Style = {
  primary: baseStyle + " bg-rose-700 text-slate-100 ",
  secondary: baseStyle + " bg-transparent text-slate-800",
};
export default function FormButton({
  type = "button",
  onClick,
  children,
  variant,
}: ButtonProps) {
  return (
    <button type={type} onClick={onClick} className={Style[variant]}>
      {children}
    </button>
  );
}
