import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  role?: "button" | "link";
  onClick?: () => void;
  children: ReactNode;
  href?: string;
  ariaLabel: string;
};

const baseStyle =
  "inline-block py-3 px-7 rounded-full border-2 border-rose-500 transition-all duration-300 focus:border-none focus:outline-none bg-transparent focus:ring-offset-2 focus:ring focus:ring-rose-500";

export default function Button({
  role = "button",
  onClick,
  children,
  href,
  ariaLabel,
}: ButtonProps) {
  if (role === "link")
    return (
      <Link href={href || ""} className={baseStyle}>
        {children}
      </Link>
    );

  return (
    <button className={baseStyle} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
