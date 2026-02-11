import "./App.css";
import { ThemeProvider } from "./context/theme-context";
import About from "./modules/about";
import Contact from "./modules/contact";
import Hero from "./modules/hero";
import Navigation from "./modules/navigation";
import Projects from "./modules/projects";
import Skills from "./modules/skills";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        {/* <Footer /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
