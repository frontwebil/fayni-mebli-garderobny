import { Catalog } from "./Components/Catalog/Catalog";
import { Gallery } from "./Components/Gallery/Gallery";
import { Header } from "./Components/Header/Header";
import { Hero } from "./Components/Hero/Hero";
import { VideoSection } from "./Components/VideoSection/VideoSection";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Catalog />
      <VideoSection />
      <Gallery />
    </>
  );
}

export default App;
