import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";

const ProductPage = lazy(() =>
  import("./Pages/ProductPage").then((m) => ({ default: m.ProductPage }))
);

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/productPage/:id"
        element={
          <Suspense fallback={null}>
            <ProductPage />
          </Suspense>
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
