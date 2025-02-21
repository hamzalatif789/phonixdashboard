import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Bars3Icon,
  BellIcon,
  Squares2X2Icon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/images/logo.png";
import logo2 from "../assets/images/logo2.webp";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Explore", href: "/explore", current: false },
  { name: "Items Detail", href: "/items", current: false },
  { name: "Author", href: "/author", current: false },
  { name: "Create Yours", href: "/create", current: false },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Apply saved theme on component mount
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Toggle dark mode and save preference
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-white dark:bg-gray-900 shadow-md transition-all duration-500 ease-in-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full">
        {/* Logo */}
        <div className="flex-shrink-0 flex flex-row gap-2">
          <Link to="/">
            <img src={logo} alt="Website Logo" className="w-[25px] h-auto" />
          </Link>
          <h1 className="text-gray-900 dark:text-white">Phoenix</h1>
        </div>

        {/* Centered Search Bar */}
        <div className="hidden md:flex flex-1 justify-center px-2">
          <div className="relative w-full max-w-lg">
            <input
              id="search"
              name="search"
              className="block w-full py-2 pl-10 pr-3 leading-5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900 dark:text-white"
              placeholder="Search"
              type="search"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <MagnifyingGlassIcon
                className="h-5 w-5 text-gray-400 dark:text-gray-300"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        {/* Right-aligned Icons */}
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {darkMode ? (
              <SunIcon className="h-6 w-6 text-gray-700 dark:text-yellow-400" />
            ) : (
              <MoonIcon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            )}
          </button>

          {/* Notification Bell Icon */}
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <BellIcon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
          </button>

          {/* Grid Icon */}
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <Squares2X2Icon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
          </button>

          {/* Profile Picture */}
          <img
            src={logo2}
            alt="Profile"
            className="h-8 w-8 rounded-full border-2 border-gray-300 dark:border-gray-500"
          />
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Bars3Icon className="h-8 w-8" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
