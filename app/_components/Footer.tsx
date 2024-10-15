import dynamic from "next/dynamic";
import Link from "next/link";
import { FaFacebook, FaLinkedin } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";

const Logo = dynamic(() => import("./Logo"), { ssr: false });
const FooterLinks = dynamic(() => import("./FooterLinks"), { ssr: false });

const links = {
  categories: [
    { name: "Development", href: "/development" },
    { name: "Business", href: "/business" },
    { name: "Finance & Accounting", href: "/finance-accounting" },
    { name: "IT & Software", href: "/it-software" },
    { name: "Personal Development", href: "/personal-development" },
  ],
  resources: [
    { name: "Online Course Business", href: "/business" },
    { name: "Teach on Online Course", href: "/teach" },
    { name: "Get the App", href: "/app" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ],
  support: [
    { name: "Help & Support", href: "/support" },
    { name: "Trust & Safety", href: "/trust-safety" },
    { name: "Terms", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
  ],
  socialMedia: [
    {
      href: "/",
      icon: <FaFacebook />,
    },
    {
      href: "/",
      icon: <RiTwitterXLine />,
    },
    {
      href: "/",
      icon: <FaLinkedin />,
    },
    {
      href: "/",
      icon: <FiInstagram />,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Categories */}
        <FooterLinks links={links.categories} label="Top Categories" />
        {/* Resources */}
        <FooterLinks links={links.resources} label="Resources" />
        {/* Support */}
        <FooterLinks links={links.support} label="Support" />

        {/* Social Media */}
        <div>
          <h4 className="font-semibold mb-4">Follow Us</h4>
          <ul className="flex space-x-4">
            {links.socialMedia.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xl hover:text-2xl transition-all duration-300"
                >
                  {link.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 flex-wrap justify-center gap-5 mt-10 flex sm:justify-between items-center text-sm text-gray-400 border-t border-gray-700 pt-5">
        <Logo />
        <p>&copy; {new Date().getFullYear()} Online Course. rights.</p>
      </div>
    </footer>
  );
}
