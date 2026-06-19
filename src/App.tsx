import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { ProductPage } from "./Pages/ProductPage";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productPage/:id" element={<ProductPage />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
