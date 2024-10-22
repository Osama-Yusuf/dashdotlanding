import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeChanger } from "@/app/Theme-changer";
import Image from "next/image";

const navLinks = [
  { title: "Features", href: "#features" },
  { title: "Contact", href: "mailto:osama9mohamed5@gmail.com" },
  { title: "Portfolio", href: "https://www.osamalabs.com" },
];

const Navbar = () => {
  return (
    <nav className="py-4 bg-background/30 backdrop-blur-sm sticky top-0 z-50">
      <div className="container flex flex-row justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="DashDot Logo" width={65} height={65} />
        </Link>

        <ul className="md:flex flex-row justify-between gap-8 hidden">
          {navLinks.map((link) => (
            <li key={link.title}>
              <Link
                href={link.href}
                className="hover:text-primary transition-colors"
                target={link.title === "Portfolio" ? "_blank" : undefined}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-row justify-end space-x-2">
          <ThemeChanger />
          <Button asChild>
            <Link
              target="_blank"
              href="https://chromewebstore.google.com/detail/dashdot-todo-task-list/cchfkkgnanpaeibglebgpjcfbdmdaadf"
            >
              Install Now
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
