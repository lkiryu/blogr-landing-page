import Header from './components/header/header';
import Hero from './components/hero/hero'
import SectionDesign from './components/sectionDesign/sectionDesign';
import SectionState from './components/sectionState/sectionState';
import About from './components/about/about';
import Footer from './components/footer/footer';

import './App.css';

function App() {
  return (
    <main className="container">
      <Header/>

      <Hero/>

      <SectionDesign/>

      <SectionState/>

      <About/>

      <Footer/>
    </main>
  );
}

export default App;
