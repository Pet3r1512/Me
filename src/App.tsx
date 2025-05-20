import { ThemeProvider } from "./contexts/ThemeContext";
import AnimatedBackground from "./components/Background";
import Header from "./components/Layout/Header/_index";
import "./App.css";
import Hero from "./components/Sections/Hero/_index";
import About from "./components/Sections/About/_index";
import Experience from "./components/Sections/Experience/_index";
import TechStack from "./components/Sections/Tech/_index";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen w-full bg-white dark:bg-gray-900 transition-colors duration-300">
        <AnimatedBackground />
        <Header />
        <Hero />
        <About />
        <Experience />
        <TechStack />
      </div>
    </ThemeProvider>
  );
}
