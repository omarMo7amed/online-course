import dynamic from "next/dynamic";
import Logo from "./Logo";
// import { lazy } from "react";

const Navigation = dynamic(() => import("./Navigation"), { ssr: false });
const Shipping = dynamic(() => import("./Shipping"), { ssr: false });
// const Navigation = lazy(() => import("./Navigation"));

export default function Header() {
  return (
    <header className="w-full shadow-sm shadow-red-200/50 py-1 px-4">
      <div className="max-w-screen mx-auto justify-between flex items-center gap-4">
        <Logo />
        <Navigation />
        <Shipping />
      </div>
    </header>
  );
}
