import { AboutUs } from "./Components/About-us/AboutUs";
import { Advantages } from "./Components/Advantages/Advantages";
import { Calculating } from "./Components/Calculating/Calculating";
import { Catalog } from "./Components/Catalog/Catalog";
import { Gallery } from "./Components/Gallery/Gallery";
import { Header } from "./Components/Header/Header";
import { Hero } from "./Components/Hero/Hero";
import { Testimonials } from "./Components/Testimonials/Testimonials";
import { VideoSection } from "./Components/VideoSection/VideoSection";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Catalog />
        <VideoSection />
        <Gallery />
        <Testimonials />
        <Calculating />
        <Advantages />
        <AboutUs />
      </main>
    </>
  );
}

export default App;
