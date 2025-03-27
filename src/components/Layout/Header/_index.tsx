import { useEffect, useState } from "react";
import { SunIcon, MoonIcon, MenuIcon, XIcon } from "lucide-react";
import { useTheme } from "../../../hooks/useTheme";
import NavigationLink from "./NavigationLink";
import MobileNavigationLink from "./MobileNavigationLink";

const NAVIGATIONS = [
  {
    id: "about",
    name: "About",
  },
  {
    id: "experience",
    name: "Experience",
  },
  {
    id: "technologies",
    name: "Technologies",
  },
  {
    id: "education",
    name: "Education",
  },
  {
    id: "projects",
    name: "Projects",
  },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white dark:bg-gray-900 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-green-600 dark:text-green-400">
          Portfolio
        </div>
        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-800 dark:text-gray-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAVIGATIONS.map((nav) => {
            return (
              <NavigationLink
                key={nav.id}
                props={{
                  sectionId: nav.id,
                  sectionName: nav.name,
                  setIsMenuOpen,
                }}
              />
            );
          })}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {theme === "dark" ? (
              <SunIcon className="text-amber-300" size={20} />
            ) : (
              <MoonIcon size={20} />
            )}
          </button>
        </nav>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg">
          <div className="flex flex-col px-4 py-2">
            {NAVIGATIONS.map((nav) => {
              return (
                <MobileNavigationLink
                  key={nav.id}
                  props={{
                    sectionId: nav.id,
                    sectionName: nav.name,
                    setIsMenuOpen,
                  }}
                />
              );
            })}
            <button
              onClick={toggleTheme}
              className="py-3 flex items-center text-gray-700 dark:text-gray-300"
            >
              {theme === "dark" ? (
                <>
                  <SunIcon size={20} className="mr-2" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <MoonIcon size={20} className="mr-2" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
