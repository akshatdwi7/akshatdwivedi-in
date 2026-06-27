import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="min-h-screen bg-white text-ink antialiased">
      <Navbar />

      <main className="mx-auto max-w-4xl px-4 md:px-6">
        <section id="home" className="scroll-mt-24">
          <Hero />
        </section>

        <Projects />

        <About />

        <Experience />

        <Contact />

        <Footer />
      </main>
    </div>
  );
};

export default App;
