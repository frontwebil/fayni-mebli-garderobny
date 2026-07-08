import { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { ContactModal } from "../Components/ContactModal/ContactModal";
import { Footer } from "../Components/Footer/Footer";
import { Header } from "../Components/Header/Header";
import { WardrobeHero } from "../Components/WardrobeHero/WardrobeHero";
import { WardrobeDescription } from "../Components/WardrobeDescription/WardrobeDescription";
import { Gallery } from "../Components/Gallery/Gallery";
import { Testimonials } from "../Components/Testimonials/Testimonials";
import { ColorsVariants } from "../Components/ColorsVariants/ColorsVariants";
import { getWardrobeBySlug } from "../data/wardrobes";
import { RelatedProducts } from "../Components/RelatedProducts/RelatedProducts";

export function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const wardrobe = getWardrobeBySlug(slug ?? "");

  const [contactModal, setContactModal] = useState<{
    open: boolean;
    title: string;
  }>({ open: false, title: "" });

  const openContactModal = (title: string) =>
    setContactModal({ open: true, title });

  const closeContactModal = () => setContactModal({ open: false, title: "" });

  if (!wardrobe) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Header />
      <WardrobeHero
        wardrobe={wardrobe}
        openContactModal={() => openContactModal("Отримати прорахунок")}
      />
      <WardrobeDescription wardrobe={wardrobe} />
      <ColorsVariants />
      <Gallery />
      <Testimonials />
      <RelatedProducts currentWardrobe={wardrobe} />
      <Footer />
      <ContactModal
        isOpen={contactModal.open}
        onClose={closeContactModal}
        title={contactModal.title}
      />
    </>
  );
}
