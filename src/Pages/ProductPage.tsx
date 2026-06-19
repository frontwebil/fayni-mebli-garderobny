import { useState } from "react";
import { ContactModal } from "../Components/ContactModal/ContactModal";
import { Footer } from "../Components/Footer/Footer";
import { Header } from "../Components/Header/Header";
import { WardrobeHero } from "../Components/WardrobeHero/WardrobeHero";

export function ProductPage() {
  const [contactModal, setContactModal] = useState<{
    open: boolean;
    title: string;
  }>({ open: false, title: "" });

  // const openContactModal = (title: string) =>
  //   setContactModal({ open: true, title });

  const closeContactModal = () => setContactModal({ open: false, title: "" });

  return (
    <>
      <Header />
      <WardrobeHero />
      <Footer />
      <ContactModal
        isOpen={contactModal.open}
        onClose={closeContactModal}
        title={contactModal.title}
      />
    </>
  );
}
