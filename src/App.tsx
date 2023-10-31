import "./App.css";
import About from "./components/About/About";
import HotArticles from "./components/Articles/HotArticles";
import OurBenefits from "./components/Benefits/OurBenefits";
import ReadyToDiscusss from "./components/Contact/ReadyToDiscusss";
import Footer from "./components/Footer/Footer";

import Hero from "./components/Hero/Hero";
import NavBar from "./components/Nav/NavBar";
import OurPartners from "./components/Partners/OurPartners";
import BestWorkHero from "./components/ProjectShowcase/BestWorkHero";
import Services from "./components/Services/Services";
import Testimonial from "./components/Testimonial/Testimonial";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Testimonial />
      <BestWorkHero />
      <OurBenefits />
      <HotArticles />
      <ReadyToDiscusss />
      <Footer />
      <OurPartners />
      {/* 
      
      
      
       
      
      
      
      
       */}
    </>
  );
}

export default App;
