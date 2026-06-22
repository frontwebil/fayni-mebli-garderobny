import { useState } from "react";
import { ContactModal } from "../Components/ContactModal/ContactModal";
import { Footer } from "../Components/Footer/Footer";
import { Header } from "../Components/Header/Header";
import { WardrobeHero } from "../Components/WardrobeHero/WardrobeHero";
import { WardrobeDescription } from "../Components/WardrobeDescription/WardrobeDescription";
import { Gallery } from "../Components/Gallery/Gallery";
import { Testimonials } from "../Components/Testimonials/Testimonials";
import { ColorsVariants } from "../Components/ColorsVariants/ColorsVariants";

export function ProductPage() {
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
      <WardrobeHero
        openContactModal={() => openContactModal("Отримати прорахунок")}
      />
      <WardrobeDescription />
      <ColorsVariants />
      <Gallery />
      <Testimonials />
      <Footer />
      <ContactModal
        isOpen={contactModal.open}
        onClose={closeContactModal}
        title={contactModal.title}
      />
    </>
  );
}
