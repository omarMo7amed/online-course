import Link from "next/link";

type NavItemProps = {
  item: {
    label: string;
    href: string;
  };
  styleLink: string;
};

export function NavItem({ item, styleLink }: NavItemProps) {
  return (
    <li>
      <Link className={styleLink} href={item.href}>
        {item.label}
      </Link>
    </li>
  );
}
