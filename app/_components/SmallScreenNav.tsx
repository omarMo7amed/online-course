"use client";
import Logo from "./Logo";
import { useOutsideClick } from "../_hooks/useOutSideClick";
import { FaRegCircleXmark } from "react-icons/fa6";
import { domAnimation, LazyMotion, motion } from "framer-motion";
import { NavItem } from "./NavItem";

type WindowProps = {
  close: () => void;
  secondaryNavItems: Array<{ label: string; href: string }>;
  mainNavItems: Array<{ label: string; href: string }>;
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

const windowVariants = {
  hidden: { x: "100%" },
  visible: { x: 0, transition: { type: "spring", stiffness: 50 } },
  exit: { x: "100%", transition: { duration: 0.3 } },
};

export function Window({
  close,
  secondaryNavItems,
  mainNavItems,
}: WindowProps) {
  const [ref] = useOutsideClick(close);

  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        className="fixed inset-0 bg-slate-200 bg-opacity-75 z-50"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={overlayVariants}
        aria-label="Overlay for mobile menu"
      >
        <motion.div
          ref={ref}
          className="flex flex-col gap-y-10 bg-slate-300 opacity-85 sm:w-2/4 fixed top-0 right-0 min-h-screen px-3"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={windowVariants}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex justify-end pt-5">
            <FaRegCircleXmark
              onClick={close}
              className="cursor-pointer text-2xl text-rose-700 transition-colors duration-300 hover:text-rose-500"
              aria-label="Close menu"
            />
          </div>

          <ul aria-label="Navigation links">
            {[...secondaryNavItems, ...mainNavItems].map((item) => (
              <NavItem
                key={item.label}
                item={item}
                styleLink="rounded-md border-2 border-rose-600 transition-all duration-300 text-sm hover:text-slate-100 tracking-wide my-3 block lg:px-8 px-5 py-3 text-center"
              />
            ))}
          </ul>

          <div className="flex justify-center items-end mb-10">
            <Logo />
          </div>
        </motion.div>
      </motion.div>
    </LazyMotion>
  );
}
