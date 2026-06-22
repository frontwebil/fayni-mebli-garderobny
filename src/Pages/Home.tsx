import { lazy, Suspense, useState } from "react";
import { Header } from "../Components/Header/Header";
import { Hero } from "../Components/Hero/Hero";
import { Catalog } from "../Components/Catalog/Catalog";
import { ContactModal } from "../Components/ContactModal/ContactModal";

const VideoSection = lazy(() =>
  import("../Components/VideoSection/VideoSection").then((m) => ({
    default: m.VideoSection,
  }))
);
const Gallery = lazy(() =>
  import("../Components/Gallery/Gallery").then((m) => ({
    default: m.Gallery,
  }))
);
const Testimonials = lazy(() =>
  import("../Components/Testimonials/Testimonials").then((m) => ({
    default: m.Testimonials,
  }))
);
const Calculating = lazy(() =>
  import("../Components/Calculating/Calculating").then((m) => ({
    default: m.Calculating,
  }))
);
const Advantages = lazy(() =>
  import("../Components/Advantages/Advantages").then((m) => ({
    default: m.Advantages,
  }))
);
const AboutUs = lazy(() =>
  import("../Components/About-us/AboutUs").then((m) => ({
    default: m.AboutUs,
  }))
);
const Customers = lazy(() =>
  import("../Components/Customers/Customers").then((m) => ({
    default: m.Customers,
  }))
);
const Faq = lazy(() =>
  import("../Components/Faq/Faq").then((m) => ({ default: m.Faq }))
);
const Footer = lazy(() =>
  import("../Components/Footer/Footer").then((m) => ({ default: m.Footer }))
);

export function Home() {
  const [contactModal, setContactModal] = useState<{
    open: boolean;
    title: string;
  }>({ open: false, title: "" });

  const openContactModal = (title: string) =>
    setContactModal({ open: true, title });

  const closeContactModal = () => setContactModal({ open: false, title: "" });

  return (
    <>
      <Header />
      <main>
        <Hero
          onOpenContactForm={() => openContactModal("Розрахувати вартість")}
        />
        <Catalog />
        <Suspense fallback={null}>
          <VideoSection />
          <Gallery />
          <Testimonials />
          <Calculating />
          <Advantages
            onOpenContactForm={() =>
              openContactModal("Замовити безкоштовний замір та 3D візуалізацію")
            }
          />
          <AboutUs />
          <Customers />
          <Faq />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <ContactModal
        isOpen={contactModal.open}
        onClose={closeContactModal}
        title={contactModal.title}
      />
    </>
  );
}
