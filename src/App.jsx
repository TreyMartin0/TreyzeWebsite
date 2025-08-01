import NavBar from './components/NavBar.jsx';
import Hero from './sections/Hero.jsx';
import LogoSection from './components/logoSection.jsx';
import FeatureCards from './sections/FeatureCards.jsx';
import Experience from './sections/Experience.jsx';

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <LogoSection />
      <FeatureCards />
      <Experience />
    </>
  );
};

export default App;
