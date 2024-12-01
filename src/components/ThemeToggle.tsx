import { useTheme } from "../hooks/useTheme";
import { cn } from "../utils/utils";

const ThemeToggle = ({ className }: { className?: string }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      data-testid="theme-togger"
      onClick={toggleTheme}
      className={cn(
        "!size-8 rounded-full flex items-center justify-center bg-gray-500 dark:bg-gray-200 transition-all duration-150 ease-linear",
        className,
        "absolute top-12 left-24"
      )}
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;
