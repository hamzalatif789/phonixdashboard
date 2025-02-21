import { useTheme } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react"; // Use Lucide icons (ShadCN uses Lucide)

export default function DarkModeToggle() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      {darkMode ? (
        <Sun className="h-6 w-6 text-yellow-500" />
      ) : (
        <Moon className="h-6 w-6 text-gray-700" />
      )}
    </button>
  );
}
