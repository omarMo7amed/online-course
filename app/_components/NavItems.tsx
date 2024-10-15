// "use client";
import Link from "next/link";

type mainNavProps = {
  mainNavItems: Array<{ label: string; href: string }>;
};

type secondaryNavProps = {
  secondaryNavItems: Array<{ label: string; href: string }>;
};

export function SecondaryNav({ secondaryNavItems }: secondaryNavProps) {
  return (
    <ul className="flex items-center justify-center flex-1 gap-x-1">
      {secondaryNavItems.map((item) => (
        <li key={item.label}>
          <Link className="text-rose-700 px-4 py-1" href={item.href}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function MainNav({ mainNavItems }: mainNavProps) {
  return (
    <ul className="flex items-center gap-x-4">
      {mainNavItems.map((item) => (
        <li key={item.label}>
          <Link
            className="rounded-md lg:px-8 px-5 py-3 bg-rose-700 transition-all duration-300 text-sm text-slate-100 focus:ring focus:outline-none 
              focus:ring-offset-2 focus:ring-rose-700 
              focus:bg-rose-500 hover:bg-rose-500 tracking-wide"
            href={item.href}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
