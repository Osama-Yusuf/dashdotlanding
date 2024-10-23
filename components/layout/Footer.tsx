import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa"; // Importing icons

const footerLinks = [
  { label: "Contact", href: "mailto:osama9mohamed5@gmail.com" },
  { label: "Portfolio", href: "https://www.osamalabs.com" },
];

const socialLinks = [
  {
    icon: <FaYoutube size={24} />,
    href: "https://youtube.com/@DashDotPro",
    label: "YouTube",
  },
  {
    icon: <FaTiktok size={24} />,
    href: "https://tiktok.com/@DashDotPro",
    label: "TikTok",
  },
  {
    icon: <FaInstagram size={24} />,
    href: "https://instagram.com/DashDotPro",
    label: "Instagram",
  },
];

const Footer = () => {
  return (
    <footer className="pt-10">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="space-y-6 sm:max-w-md sm:mx-auto sm:text-center">
          <p>
            Transform your workflow into a seamless, focused experience. Achieve
            more with less stress, one session at a time.
          </p>
          <div className="items-center gap-x-3 space-y-3 sm:flex sm:justify-center sm:space-y-0">
            <Button asChild>
              <Link href="https://chromewebstore.google.com/detail/dashdot-todo-task-list/cchfkkgnanpaeibglebgpjcfbdmdaadf">
                Install Now
              </Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="#features">Learn More</Link>
            </Button>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="mt-6 flex justify-center space-x-6">
          {socialLinks.map(({ icon, href, label }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              className="text-gray-600 hover:text-primary transition-colors"
              aria-label={label}
            >
              {icon}
            </Link>
          ))}
        </div>

        <div className="mt-10 py-10 border-t items-center justify-between sm:flex">
          <p>© 2024 DashDot. All rights reserved.</p>
          <ul className="flex flex-wrap items-center gap-4 mt-6 sm:text-sm sm:mt-0">
            {footerLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="hover:text-primary transition-colors"
                  target="_blank"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
