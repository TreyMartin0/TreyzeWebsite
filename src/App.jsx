import NavBar from './components/NavBar.jsx';
import Hero from './sections/Hero.jsx';
import LogoSection from './components/logoSection.jsx';
import FeatureCards from './sections/FeatureCards.jsx';
import Experience from './sections/Experience.jsx';
import Skills from './sections/Skills.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <LogoSection />
      <FeatureCards />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
