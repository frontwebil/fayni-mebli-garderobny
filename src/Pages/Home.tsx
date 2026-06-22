import { useState } from "react";
import { Header } from "../Components/Header/Header";
import { Catalog } from "../Components/Catalog/Catalog";
import { Hero } from "../Components/Hero/Hero";
import { VideoSection } from "../Components/VideoSection/VideoSection";
import { Gallery } from "../Components/Gallery/Gallery";
import { Testimonials } from "../Components/Testimonials/Testimonials";
import { Calculating } from "../Components/Calculating/Calculating";
import { Advantages } from "../Components/Advantages/Advantages";
import { AboutUs } from "../Components/About-us/AboutUs";
import { Customers } from "../Components/Customers/Customers";
import { Faq } from "../Components/Faq/Faq";
import { Footer } from "../Components/Footer/Footer";
import { ContactModal } from "../Components/ContactModal/ContactModal";
import { ColorsVariants } from "../Components/ColorsVariants/ColorsVariants";

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
        <ColorsVariants />
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
      </main>
      <Footer />
      <ContactModal
        isOpen={contactModal.open}
        onClose={closeContactModal}
        title={contactModal.title}
      />
    </>
  );
}
