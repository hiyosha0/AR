import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Wearables from "./pages/Wearbles.jsx";
import Games from "./pages/Games.jsx";
import AboutPage from "./pages/About-page.jsx";
import Maps from "./pages/Maps.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/wearables" element={<Wearables />} />
      <Route path="/ar games" element={<Games />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/ar Maps" element={<Maps />} />
    </Routes>
  </BrowserRouter>
);
