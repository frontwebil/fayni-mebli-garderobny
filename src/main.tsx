import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./reset.css";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { ScrollToHash } from "./Components/ScrollToHash";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToHash />
      <App />
    </BrowserRouter>
  </StrictMode>,
);
