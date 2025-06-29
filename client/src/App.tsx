import { useEffect, useState } from "react";
import { Route, Switch } from "wouter";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Resume from "./pages/Resume";
import AnimatedGlobalBackground from "@/components/AnimatedGlobalBackground";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading screen
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingFinish = () => {
    setLoading(false);
  };

  return (
    <>
      <AnimatedGlobalBackground />
      {loading && <LoadingScreen onFinish={handleLoadingFinish} />}
      <div className={loading ? "hidden" : "dark bg-dark"}>
        <Navbar />
        <Switch>
          <Route path="/">
            <main>
              <Hero />
              <About />
              <Journey />
              <Projects />
              <Skills />
              <Certifications />
              <Achievements />
              <Contact />
            </main>
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
        </Switch>
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}

export default App;
