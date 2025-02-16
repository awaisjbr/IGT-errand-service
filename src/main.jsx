import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ContextProvider } from "./context/CityContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <HelmetProvider>
      <ContextProvider>
        <App />
      </ContextProvider>
    </HelmetProvider>
  </BrowserRouter>
);
