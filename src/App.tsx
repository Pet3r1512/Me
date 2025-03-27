import { ThemeProvider } from "./contexts/ThemeContext";
import AnimatedBackground from "./components/Background";
import Header from "./components/Layout/Header/_index";
import "./App.css";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen w-full bg-white dark:bg-gray-900 transition-colors duration-300">
        <AnimatedBackground />
        <Header />
      </div>
    </ThemeProvider>
  );
}
