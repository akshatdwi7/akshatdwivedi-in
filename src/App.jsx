import About from "./components/About";
import Brands from "./components/Brands";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-cream text-ink antialiased">
      <Navbar />

      <section id="home" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <Hero />
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Marquee />

        <Brands />

        <Projects />

        <section id="about" className="scroll-mt-24">
          <About />
        </section>

        <Experience />

        <Contact />

        <Footer />
      </div>
    </div>
  );
};

export default App;
