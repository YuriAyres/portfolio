import { useState } from 'react';
import IntroScreen from './components/IntroScreen/IntroScreen';
import LoadingAnimation from './components/LoadingAnimation/LoadingAnimation';
import Navbar from './components/Navbar/Navbar';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Skills from './sections/Skills/Skills';
import Projects from './sections/Projects/Projects';
import Contact from './sections/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  const [currentScreen, setCurrentScreen] = useState('intro');

  return (
    <main>
      {currentScreen === 'intro' && (
        <IntroScreen
          onEnter={() => setCurrentScreen('loading')}
        />
      )}

      {currentScreen === 'loading' && (
        <LoadingAnimation
          onComplete={() => setCurrentScreen('portfolio')}
        />
      )}

      {currentScreen === 'portfolio' && (
        <>
        <Navbar />

        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />

        <Footer />
        </>
      )}
    </main>
  );
}

export default App;