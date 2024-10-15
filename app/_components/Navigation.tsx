"use client";

import { useEffect, useMemo, useState } from "react";
import { useMediaQuery } from "../_hooks/useMediaQuery";
import { HiOutlineMenu } from "react-icons/hi";
import { MainNav, SecondaryNav } from "./NavItems";
import { Window } from "./SmallScreenNav";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLargeScreen] = useMediaQuery("(min-width: 768px)");

  const mainNavItems = useMemo(
    () => [
      { label: "Sign up", href: "/signup" },
      { label: "Login", href: "/login" },
    ],
    []
  );

  const secondaryNavItems = useMemo(
    () => [
      { label: "Store", href: "/store" },
      { label: "Publisher", href: "/publishers" },
      { label: "Courses", href: "/courses" },
    ],
    []
  );

  const toggleWindow = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isLargeScreen) setIsOpen(false);
  }, [isLargeScreen]);

  return (
    <div className="flex justify-end items-center w-full">
      {isLargeScreen ? (
        <>
          <SecondaryNav secondaryNavItems={secondaryNavItems} />
          <MainNav mainNavItems={mainNavItems} />
        </>
      ) : (
        <HiOutlineMenu
          onClick={toggleWindow}
          className="text-rose-700 font-bold text-2xl cursor-pointer"
        />
      )}

      {isOpen && (
        <Window
          mainNavItems={mainNavItems}
          secondaryNavItems={secondaryNavItems}
          close={toggleWindow}
        />
      )}
    </div>
  );
}
