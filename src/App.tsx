import { AboutUs } from "./Components/About-us/AboutUs";
import { Advantages } from "./Components/Advantages/Advantages";
import { Calculating } from "./Components/Calculating/Calculating";
import { Catalog } from "./Components/Catalog/Catalog";
import { Customers } from "./Components/Customers/Customers";
import { Faq } from "./Components/Faq/Faq";
import { Footer } from "./Components/Footer/Footer";
import { Gallery } from "./Components/Gallery/Gallery";
import { Testimonials } from "./Components/Testimonials/Testimonials";
import { VideoSection } from "./Components/VideoSection/VideoSection";

function App() {
  return (
    <>
      <main>
        <Catalog />
        <VideoSection />
        <Gallery />
        <Testimonials />
        <Calculating />
        <Advantages />
        <AboutUs />
        <Customers />
        <Faq />
      </main>
      <Footer />
    </>
  );
}

export default App;
