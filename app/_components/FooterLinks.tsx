import Link from "next/link";

type FooterLinksProps = {
  links: Array<{ name: string; href: string }>;
  label: string;
};

export default function FooterLinks({ links, label }: FooterLinksProps) {
  return (
    <div>
      <h4 className="font-semibold mb-4">{label}</h4>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.name}>
            <Link href={link.href} className="hover:underline text-sm">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
